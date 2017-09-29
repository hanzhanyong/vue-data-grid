<template>
    <div  class="greadheader" :style="'width:'+width">
        <div v-for="(field,index) in fields"
            :style="styleClass2(field)">
            {{firstItem[index].name}}
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