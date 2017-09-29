<template>
    <div class="grid">
        <GridHeader :items="items" :fields="fields" :firstItem="firstItem" :width="width" :height="height" :rowsHeight="rowsHeight"/>
        <GridHeader2 v-if="firstItem && firstItem.length>0" :items="items" :fields="fields" :firstItem="firstItem" :width="width" :height="height" :rowsHeight="rowsHeight"/>
        <GridBody :items="items" :fields="fields" :firstItem="firstItem" :width="width" :height="height" :rowsHeight="rowsHeight" :onItemClickCallBack="onItemClickCallBack" :onItemLastCallBack="onItemLastCallBack" :onItemChangeCallBack="onItemChangeCallBack" />
    </div>
</template>
<script>
import gridjs from './grid.js';
import GridHeader from './gridheader.vue';
import GridHeader2 from './gridheader2.vue';
import GridBody from './gridbody.vue';

export default {
    props: gridjs.props,
    methods: gridjs.methods,
    computed: gridjs.computed,
    watch: gridjs.watch,
    components: { GridHeader, GridHeader2, GridBody }
}
</script>
<style>
    @import './grid.styl';
</style>
