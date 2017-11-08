<template>
<div>
    <div class="gridbody" v-for="(item,itemindex) in items" :style="'width:'+width">
        <div v-for="(field, fieldIndex) in fields" v-if="(fields[0].type === 'icon' || fields[0].type === 'button') && (field.type === 'icon' || field.type === 'button')"
            :style="styleBodyClass(field,itemindex)">
            <div v-if="field.type === 'icon'">
                <i  v-for="(btn, btnIndex) in field.button" :class="'icon iconfont icon-'+btn.type"  :style="'color:' + iconColor + ';margin:0px 6px;'" 
                @click="onItemClick($event,item,null,null,itemindex,field.type,btn.type)" />
            </div>
            <div v-else-if="field.type === 'button'">
                <a class="linkbutton" v-for="(btn, btnIndex) in field.button" 
                @click="onItemClick($event,item,null,null,itemindex,field.type,btn.type)" href="javascript:void(0);">{{ btn.name }}</a>
            </div>
        </div>
        <div v-for="(value, key ,index) in item"
            :style="styleBodyClass(fields[fieldStartIndex+index],itemindex)">

            <input v-if="fields[fieldStartIndex+index].type === 'date'"
            type="date" class="inputtext"
            @keyup="onKeyUp(fields,item,key,fields[fieldStartIndex+index].type,items.length,fields.length,itemindex,fieldStartIndex+index,$event)"
            @blur="onItemChange(item,key,itemindex,fields[fieldStartIndex+index].type,$event)"
            @click="onItemClick($event, item,key,value,index,fields[fieldStartIndex+index].type,null)"
            :value="value" />

            <input v-else-if="fields[fieldStartIndex+index].edit" type="text" class="inputtext" 
            @keyup="onKeyUp(fields,item,key,fields[fieldStartIndex+index].type,items.length,fields.length,itemindex,fieldStartIndex+index,$event)"
            @blur="onItemChange(item,key,itemindex,fields[fieldStartIndex+index].type,$event)"
            @click="onItemClick($event, item,key,value,index,fields[fieldStartIndex+index].type,null)"
            :value="value" />    

            <input v-else type="text" class="inputtext" readonly="true"
            @keyup="onKeyUp(fields,item,key,fields[fieldStartIndex+index].type,items.length,fields.length,itemindex,fieldStartIndex+index,$event)"
            @blur="onItemChange(item,key,itemindex,fields[fieldStartIndex+index].type,$event)"
            @click="onItemClick($event, item,key,value,index,fields[fieldStartIndex+index].type,null)"
            :value="value" />     
        </div>
        <div v-for="(field, fieldIndex) in fields" v-if="(fields[fieldLength-1].type === 'icon' || fields[fieldLength-1].type === 'button') && (field.type === 'icon' || field.type === 'button')"
            :style="styleBodyClass(field,itemindex)">
            <div v-if="field.type === 'icon'">
                <i  v-for="(btn, btnIndex) in field.button" :class="'icon iconfont icon-'+btn.type"  :style="'color:' + iconColor + ';margin:0px 6px;'" 
                @click="onItemClick($event,item,null,null,itemindex,field.type,btn.type)" />
            </div>
            <div v-else-if="field.type === 'button'">
                <a class="linkbutton" v-for="(btn, btnIndex) in field.button" 
                @click="onItemClick($event,item,null,null,itemindex,field.type,btn.type)" href="javascript:void(0);">{{ btn.name }}</a>
            </div>
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
            date: '2016-10-16',
        }
    },
    props: gridjs.props,
    methods: gridjs.methods,
    computed: gridjs.computed,
    watch: gridjs.watch,
    // components: { datepicker }
}
</script>