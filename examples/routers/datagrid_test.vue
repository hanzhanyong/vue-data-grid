<template>
    <div>
        <VueDataGrid :fields="fields" :items="excelList" :onItemClickCallBack="onItemClick" :rowsHeight="rowsHeight" width="60%" height="320px"> </VueDataGrid>
    </div>
</template>
<script>
     export default {
        name: 'test',
        data: function () {
            return {
                rowsHeight: 35,
                fields: [
                    {
                        name: '操作',
                        type: 'icon',
                        edit: true,
                        width: 100
                    },
                    {
                        name: '名称',
                        type: 'string',
                        edit: true,
                        width: 100
                    },
                    {
                        name: '年龄',
                        type: 'string',
                        edit: true,
                        width: 100
                    },
                    {
                        name: '位置',
                        type: 'string',
                        edit: false
                    }
                ],
                excelList: [
                    {
                        name: 'a',
                        age: 1,
                        position: '2017-09-25'
                    },
                    {
                        name: 'h',
                        age: 8,
                        position: '哈哈哈'
                    },
                    {
                        name: 'f',
                        age: 6,
                        position: '2017-09-25'
                    },
                    {
                        name: 'c',
                        age: 3,
                        position: '呲呲呲'
                    },
                    {
                        name: 'g',
                        age: 7,
                        position: '哥哥哥'
                    },
                    {
                        name: 'e',
                        age: 5,
                        position: '额额额'
                    },
                    {
                        name: 'a',
                        age: 1,
                        position: '阿阿阿'
                    },
                    {
                        name: 'h',
                        age: 8,
                        position: '哈哈哈'
                    },
                    {
                        name: 'f',
                        age: 6,
                        position: '发发发'
                    },
                    {
                        name: 'c',
                        age: 3,
                        position: '呲呲呲'
                    },
                    {
                        name: 'g',
                        age: 7,
                        position: '哥哥哥'
                    },
                    {
                        name: 'e',
                        age: 5,
                        position: '额额额'
                    },
                ]
            }
        },
        methods: {
            onItemClick: function(item, key, value, index, type, icontype) {
                console.log(' key: ' + key + '    value: ' + value + '   columnindex: ' + index +'    type: ' + type + '     icontype: ' + icontype);
            },
            onReplace1: function() {
                let _data = [];
                for (var i = 0; i < dashboaddata.length; i++) {
                    if (i % 2 === 1) continue;
                    if (i > 1500) continue;
                    _data.push(dashboaddata[i]);
                }
                this.dataItems = _data;
            },
            onReplace2: function() {
                this.dataItems = dashboaddata;
            }
        }
    }
</script>