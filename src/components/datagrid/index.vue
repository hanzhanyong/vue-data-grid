<template>
    <div class="grid">
        <GridHeader :fields="fields" :width="width" :height="rowsHeight"/>
        <GridHeader2 v-if="firstItem && firstItem.length>0" :fields="firstItem" :width="width" :height="rowsHeight"/>
        <GridBody :items="items" :fields="fields" :width="width" :height="height" :rowsHeight="rowsHeight" :onItemClickCallBack="onItemClickCallBack" />
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
