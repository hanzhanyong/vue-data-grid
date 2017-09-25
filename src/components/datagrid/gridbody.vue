<template>
<div>
    <div class="gridbody" v-for="(item,itemindex) in items" :style="'width:'+width">
        <div v-if="fields[0].type === 'icon' || fields[0].type === 'button'"
             :style="styleClass(fields[0],itemindex)">
            <i class="icon iconfont icon-jiahao iconcolor" @click="onItemClick(item,null,null,itemindex,fields[0].type,'add')" />
            <i class="icon iconfont icon-shanchu iconcolor" @click="onItemClick(item,null,null,itemindex,fields[0].type,'del')" />
        </div>
        <div :contenteditable="fields[index].edit?'true':'false'" 
            v-for="(value, key ,index) in item"
            @input="inputHandler(item,key,$event)"
            @click="onItemClick(item,key,value,index,fields[fieldStartIndex+index].type,null)"
            :style="styleClass(fields[fieldStartIndex+index],itemindex)">
            {{ value }}
        </div>
        <div v-if="fields[fieldLength-1].type === 'icon' || fields[fieldLength-1].type === 'button'"
            :style="styleClass(fields[fieldLength-1],itemindex)">
            <i class="icon iconfont icon-jiahao iconcolor" @click="onItemClick(item,null,null,itemindex,fields[0].type,'add')"></i>
            <i class="icon iconfont icon-shanchu iconcolor" @click="onItemClick(item,null,null,itemindex,fields[0].type,'del')"></i>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        width: {
            type: [String, Number],
            default: 600
        },
        height: {
            type: [String, Number],
            default: 30
        },
        rowsHeight: {
            type: [String, Number],
            default: 30
        },
        items: { type: Array, required: true }, //data
        fields: { type: Array, required: true }, //fields
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
    methods: {
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
        styleClass: function(field,itemindex) {
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
            let _style = _width+ 'height:' + this.rowsHeight + 'px;line-height:' + this.rowsHeight + 'px;';
            if (itemindex % 2===0) _style = _style + 'background-color: #F2F2F2;';

            return _style;
        }
    }
}
</script>
<style> 
    .gridbody{
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: row;
    }
    .gridbody div{
        font-size: 12px;
        text-align: center;
        border:1px solid black;
        z-index: 0;
        margin-top:-1px;
        margin-right:-1px;
    }
    .gridbody div:focus{
        z-index: 9999;
    }
    .gridbody div p{
        border:0px;
        margin: 0px;
    }
    .gridbody div i {
        font-size: 20px;
    }
    .gridbody div i:hover {
        font-size: 28px;
    }
    .iconcolor {
        color: #1E90FF;
    }
    
</style>