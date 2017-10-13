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
        onItemClickCallBack: Function,
        onItemLastCallBack: Function,
        onItemChangeCallBack: Function
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
            if (field.hide) {
                _style += 'display:none;';
            }
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
        onItemFocus: function($event,item, key, value, index, type) {
            if (type === 'date') {
                // $event.target.innerText = '2017-09-28';
                // alert('www"');
                // item.showdatepicker = true;
            }
        },
        onItemClick: function($event,item, key, value, index, type, icontype) {
            // debugger;
            if (type === 'icon') {
                if(this.onItemClickCallBack) {
                    if(!this.onItemClickCallBack(item, key, value, index, type, icontype)) return;
                }
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
            }
            else {
                if (this.onItemClickCallBack) this.onItemClickCallBack(item, key, value, index, type, icontype);
            }
        },
        inputHandler: function (item,key,event) {
            if(event.keyCode===13)
                event.keyCode = 9;
            // alert(event.keyCode);
            // console.log(event.keyCode);
        },
        onKeyUp: function (fields,item,key,type,rowsCount,columsCount,rowIndex,columIndex,$event) {
            //value=value.replace(/[^\d]/,'')
            
            if($event.keyCode===13)
            {
                // debugger;
                var nextEle = null;
                var nextLine = true;
                if (columIndex < columsCount - 1) {
                    var curcolumIndex = columIndex;
                    for (var i=columIndex+1;i<columsCount;i++){
                        var field = fields[i];
                        if (field.edit===false || field.hide || field.type==='icon') continue;
                        curcolumIndex = i;
                        break;
                    }
                    
                    if (curcolumIndex < columsCount && curcolumIndex !== columIndex) {
                        nextLine = false;
                        nextEle = $event.target.parentElement.parentElement.children[curcolumIndex].children[0];
                    }
                }
                
                if(nextLine && rowIndex < rowsCount - 1) {
                    // debugger;
                    columIndex = 0;
                    for ( i=columIndex;i<columsCount;i++){
                        field = fields[i];
                        if (field.edit===false || field.hide || field.type==='icon') continue;
                        columIndex = i;
                        break;
                    }
                    // console.log($event.target.parentElement.parentElement.parentElement);
                    if (columIndex < columsCount) {
                        nextEle = $event.target.parentElement.parentElement.parentElement.children[rowIndex+1].children[columIndex].children[0];
                    }
                }
                if (!nextEle){
                    //alert('新增加一行了');
                    if(this.onItemLastCallBack) this.onItemLastCallBack();
                }
                // console.log(nextEle);
                if(nextEle) nextEle.focus();
                return;
            }
            if (type === 'float' || type === 'int') {
                event.target.value=event.target.value.replace(/[^0-9|^\-|^\.]/g,'');
                if (event.target.value==='00') event.target.value = '0';
                if (event.target.value.substr(0,1)==='-') {
                    if (event.target.value.length>2 && event.target.value.substr(1,1)==='0' && event.target.value.substr(2,1)!=='0' && event.target.value.substr(2,1)!=='.' ) event.target.value = '-'+event.target.value.substr(2,event.target.value.length-2);                    
                } else {
                    if (event.target.value.length>1 && event.target.value.substr(0,1)==='0' && event.target.value.substr(1,1)!=='0' && event.target.value.substr(1,1)!=='.' ) event.target.value = event.target.value.substr(1,event.target.value.length-1);
                }
                
                if (event.target.value === '') event.target.value = '0';
                var dotIndex = event.target.value.indexOf('.');
                if (dotIndex > 0) {
                    event.target.value = event.target.value.split('.')[0] + '.' + event.target.value.split('.')[1].split('.')[0];
                }
                var splitIndex = event.target.value.lastIndexOf('-');
                if (splitIndex > 0) {
                    var values = event.target.value.split('-');
                    var setvalue = event.target.value;
                    if (setvalue.substr(0,1) === '-') {
                        setvalue = '-';
                    } else setvalue = '';

                    event.target.value = setvalue;
                    for (var iv=0;iv<values.length;iv++) {
                        event.target.value += values[iv];
                    }
                }
            }
        },
        onItemChange: function (item,key,type,$event) {
            // console.log('onItemChange1:' + item[key] + '   value:'+$event.target.value);
            let innerText = $event.target.value;

            let itemvalue = item[key] + '';
            if (itemvalue === innerText) return;
            item[key] = innerText;
            // console.log('onItemChange2:' + item[key]);

            if (this.onItemChangeCallBack) this.onItemChangeCallBack(item,key);
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

            if (field.hide) {
                _style += 'display:none;';
            }
            return _style;
        }
    }
};