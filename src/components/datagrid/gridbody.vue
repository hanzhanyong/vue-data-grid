<template>
<div>
    <div class="gridbody" v-for="(item,itemindex) in items" :style="'width:'+width">
        <div v-if="fields[0].type === 'icon' || fields[0].type === 'button'"
             :style="styleBodyClass(fields[0],itemindex)">
            <i class="icon iconfont icon-jiahao"  :style="'color:' + iconColor + ';'" @click="onItemClick(item,null,null,itemindex,fields[0].type,'add')" />
            <i class="icon iconfont icon-shanchu" :style="'color:' + iconColor + ';'" @click="onItemClick(item,null,null,itemindex,fields[0].type,'del')" />
        </div>
        <div
            v-for="(value, key ,index) in item"
            :style="styleBodyClass(fields[fieldStartIndex+index],itemindex)">

            <input v-if="fields[fieldStartIndex+index].type === 'date'"
            type="date" class="inputtext"
            @keyup="onKeyUp(fields,item,key,fields[fieldStartIndex+index].type,items.length,fields.length,itemindex,fieldStartIndex+index,$event)"
            @blur="onItemChange(item,key,fields[fieldStartIndex+index].type,$event)"
            @click="onItemClick($event, item,key,value,index,fields[fieldStartIndex+index].type,null)"
            :value="value" />

            <input v-else-if="fields[fieldStartIndex+index].edit" type="text" class="inputtext" 
            @keyup="onKeyUp(fields,item,key,fields[fieldStartIndex+index].type,items.length,fields.length,itemindex,fieldStartIndex+index,$event)"
            @blur="onItemChange(item,key,fields[fieldStartIndex+index].type,$event)"
            @click="onItemClick($event, item,key,value,index,fields[fieldStartIndex+index].type,null)"
            :value="value" />    

            <input v-else type="text" class="inputtext" readonly="true"
            @keyup="onKeyUp(fields,item,key,fields[fieldStartIndex+index].type,items.length,fields.length,itemindex,fieldStartIndex+index,$event)"
            @blur="onItemChange(item,key,fields[fieldStartIndex+index].type,$event)"
            @click="onItemClick($event, item,key,value,index,fields[fieldStartIndex+index].type,null)"
            :value="value" />     
        </div>
        <div v-if="fields[fieldLength-1].type === 'icon' || fields[fieldLength-1].type === 'button'"
            :style="styleBodyClass(fields[fieldLength-1],itemindex)">
            <i class="icon iconfont icon-jiahao" :style="'color:' + iconColor + ';'" @click="onItemClick(item,null,null,itemindex,fields[0].type,'add')"></i>
            <i class="icon iconfont icon-shanchu" :style="'color:' + iconColor + ';'" @click="onItemClick(item,null,null,itemindex,fields[0].type,'del')"></i>
        </div>
    </div>
</div>
</template>
<script>
import gridjs from './grid.js';
// import datepicker from '../datepicker/datepicker.vue';

export default {
    data() {
        return {
            date: '2016-10-16'
        }
    },
    props: gridjs.props,
    methods: gridjs.methods,
    computed: gridjs.computed,
    watch: gridjs.watch,
    // components: { datepicker }
}
</script>