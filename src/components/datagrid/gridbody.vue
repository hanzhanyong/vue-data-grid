<template>
<div>
    <div class="gridbody" v-for="(item,itemindex) in items" :style="'width:'+width">
        <div v-if="fields[0].type === 'icon' || fields[0].type === 'button'"
             :style="styleBodyClass(fields[0],itemindex)">
            <i class="icon iconfont icon-jiahao"  :style="'color:' + iconColor + ';'" @click="onItemClick(item,null,null,itemindex,fields[0].type,'add')" />
            <i class="icon iconfont icon-shanchu" :style="'color:' + iconColor + ';'" @click="onItemClick(item,null,null,itemindex,fields[0].type,'del')" />
        </div>
        <div :contenteditable="fields[index].edit?'true':'false'" 
            v-for="(value, key ,index) in item"
            @input="inputHandler(item,key,$event)"
            @click="onItemClick(item,key,value,index,fields[fieldStartIndex+index].type,null)"
            :style="styleBodyClass(fields[fieldStartIndex+index],itemindex)">
            {{ value }}
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

export default {
    props: gridjs.props,
    methods: gridjs.methods,
    computed: gridjs.computed,
    watch: gridjs.watch
}
</script>