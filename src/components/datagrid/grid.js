export default {
    props: {
        width: {
            type: [String, Number],
            default: 600
        },
        height: {
            type: [String, Number],
            default: 300
        },
        rowsHeight: {
            type: [String, Number],
            default: 300
        },
        borderStyle: {
            type: [String, Number],
            default: '1px solid black'
        },
        headerColor: {
            type: [String, Number],
            default: '#6B6B6B'
        },
        bodyColor: {
            type: [String, Number],
            default: '#F2F2F2'
        },
        bodyColor2: {
            type: [String, Number],
            default: '#FFFFFF'
        },
        fontSize: {
            type: [String, Number],
            default: '12px'
        },
        fontColor: {
            type: [String, Number],
            default: '#000000'
        },
        iconColor: {
            type: [String, Number],
            default: '#1E90FF'
        },
        firstItem: { type: Array, required: true },
        items: { type: Array, required: true },
        fields: { type: Array, required: true },
        onItemClickCallBack: Function
    },
    computed: {
        fieldLength: function() {
            return this.fields.length;
        },
        fieldStartIndex: function() {
            return this.fields[0].type === 'icon' || this.fields[0].type === 'button'? 1 : 0;
        }
    },
    watch: {  
    },
    methods: {
        onChange: function() {
        },
        styleClass: function(field) {
            // debugger;
            let _width = '';
            if (field.width) {
                let strwidth = (field.width+'');
                if (strwidth.indexOf('%') > 0 || strwidth.indexOf('px') > 0) _width = 'width:' +field.width +';';
                else _width = 'width:' +field.width +'px;';
            }
            else {
                _width = 'flex:1;';
            }
            let _style = _width+ 'height:' + this.rowsHeight + 'px;line-height:' + 
            this.rowsHeight + 'px;font-weight: bold;border:'+this.borderStyle+';';
            return _style;
        },
        styleClass2: function(field) {
            let _style = this.styleClass(field);
            _style = _style + 'font-weight:normal;background-color: '+this.bodyColor+';';
            return _style;
        },
        //| 日期有效性验证 
        //| 格式为：YYYY-MM-DD或YYYY/MM/DD  
        IsValidDate: function(DateStr){
            // debugger;
            let dateString = DateStr + '';
            if(dateString.trim()=="")return true;
            let r=dateString.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/); 
            if(r==null){
                // alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd\n\r例  如：2008-08-08\n\r");
                return false;
            }
            let d=new Date(r[1],r[3]-1,r[4]);  
            let num = (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);
            // if(num==0){
            //     alert("请输入格式正确的日期\n\r日期格式：yyyy-mm-dd\n\r例  如：2008-08-08\n\r");
            // }
            return (num!==0);
        },
        onItemClick: function(item, key, value, index, type, icontype) {
            // debugger;
            if (icontype) {
                if (icontype === 'add') {
                    let _item = {};
                    // debugger;
                    for (let key in item) {
                        if (this.IsValidDate(item[key])) _item[key] = item[key];
                        else _item[key] = '';
                    }

                    this.items.splice(index + 1,0,_item);
                }
                else if (icontype === 'del') {
                    // debugger;
                    this.items.splice(index, 1);
                    // console.log(this.items.length);
                }
            } else {
                if (this.onItemClickCallBack) this.onItemClickCallBack(item, key, value, index, type, icontype);
            }
        },
        inputHandler: function (item,key,$event) {
            // console.log($event);
            item[key] = $event.target.innerText;
            // for (let i=0; i<this.items.length;i++) {
            //     let _item = this.items[i];
            //     for (let ikey in _item) {
            //         console.log(_item[ikey])
            //     } 
            // }
        },
        styleBodyClass: function(field,itemindex) {
            // debugger;
            // console.log('itemindex:'+itemindex);
            let _width = '';
            if (field.width) {
                let strwidth = (field.width+'');
                if (strwidth.indexOf('%') > 0 || strwidth.indexOf('px') > 0) _width = 'width:' +field.width +';';
                else _width = 'width:' +field.width +'px;';
            }
            else {
                _width = 'flex:1;';
            }
            let _style = _width+ 'height:' + this.rowsHeight + 
            'px;line-height:' + this.rowsHeight + 'px;border:'+this.borderStyle +';';
            if (itemindex % 2===0) _style = _style + 'background-color: '+this.bodyColor2+';';
            else _style = _style + 'background-color: '+this.bodyColor+';';
            return _style;
        }
    }
};