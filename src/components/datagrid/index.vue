<template>
    <div class="grid">
        <GridHeader :fields="fields" :width="width" :height="rowsHeight"/>
        <GridBody :items="items" :fields="fields" :width="width" :height="height" :rowsHeight="rowsHeight" :onItemClickCallBack="onItemClickCallBack" />
    </div>
</template>
<script>
import GridHeader from './gridheader.vue';
import GridBody from './gridbody.vue';

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
        items: { type: Array, required: true },
        fields: { type: Array, required: true },
        onItemClickCallBack: Function
    },
    components: { GridHeader, GridBody },
    // watch: {  
    //     'items': 'initChange',
    // },
    // methods: {
    //     initChange: function() {
    //         debugger;
    //         // if (this.items.length > 0 && this.fields.length === 0) {
    //         //     let item = this.items[0];
    //         //     let fields = [];
    //         //     for (let key in item) {
    //         //         let field = { fieldname: key, fieldvalue: item[key], fieldtype: 'string' };
    //         //         fields.push(field);
    //         //     }
    //         // }
    //     },
    //     onChange: function() {
    //     }
    // }
}
</script>
<style>
    .grid{
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: column;
    }
</style>
