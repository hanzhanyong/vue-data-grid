<template>
<div>
    <div class="gridbody" v-for="(item,itemindex) in items" :style="'width:'+width">
        <div v-if="fields[0].type === 'icon' || fields[0].type === 'button'"
             :style="styleBodyClass(fields[0],itemindex)">
            <i class="icon iconfont icon-jiahao"  :style="'color:' + iconColor + ';'" @click="onItemClick(item,null,null,itemindex,fields[0].type,'add')" />
            <i class="icon iconfont icon-shanchu" :style="'color:' + iconColor + ';'" @click="onItemClick(item,null,null,itemindex,fields[0].type,'del')" />
        </div>
        <div :contenteditable="fields[fieldStartIndex + index].edit?'true':'false'" 
            v-for="(value, key ,index) in item"
            @input="inputHandler(item,key,$event)"
            @blur="onItemChange(item,key,fields[fieldStartIndex+index].type,$event)"
            @focus="onItemFocus($event, item,key,value,index,fields[fieldStartIndex+index].type)"
            @click="onItemClick($event, item,key,value,index,fields[fieldStartIndex+index].type,null)"
            :style="styleBodyClass(fields[fieldStartIndex+index],itemindex)">
            <datepicker contenteditable="true" v-if="fields[fieldStartIndex+index].type === 'date'" v-model="item[key]"></datepicker>
            <div class="display_inline_block" v-else>{{ value }}</div>     
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
import datepicker from '../datepicker/datepicker.vue';

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
    components: { datepicker }
}
</script>