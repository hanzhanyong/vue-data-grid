<template>
    <div  class="greadheader" :style="'width:'+width">
        <div v-for="field in firstItem"
            :style="styleClass2(field)">
            {{field.name}}
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