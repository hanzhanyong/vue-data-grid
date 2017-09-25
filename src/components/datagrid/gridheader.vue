<template>
<div class="greadheader" :style="'width:'+width">
        <div v-for="field in fields"
        :style="styleClass(field)">
            {{field.name}}
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
        fields: { type: Array, required: true },
    },
    computed: {
        fieldLength: function() {
            return this.fields.length;
        }
    },
    methods: {
        onChange: function() {
        },
        styleClass: function(field) {
            // debugger;
            let _width = '';
            if (field.width) {
                let strwidth = (field.width+'');
                if (strwidth.indexOf('%') > 0 || strwidth.indexOf('px') > 0) _width = 'width:' +field.width +';';
                else _width = 'width:' +field.width +'px;';
            }
            else {
                _width = 'flex:1;';
            }
            let _style = _width+ 'height:' + this.height + 'px;line-height:' + this.height + 'px;';
            return _style;
        }
    }
}
</script>
<style> 
    .greadheader{
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-direction: row;
    }
    .greadheader div{
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        border:1px solid black;
        background-color: #6B6B6B;
        margin-right:-1px;
    }
</style>