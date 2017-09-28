<template>
    <div>
        Date: <input type="date" style="width:120px;height:30px;" />
        <VueDataGrid :fields="fields" :firstItem="firstItem" :items="excelList" 
        :onItemClickCallBack="onItemClick"
        :onItemChangeCallBack="onItemChange"
        :rowsHeight="rowsHeight" width="60%" height="320px"> </VueDataGrid>

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
                        name: '出生日期',
                        type: 'date',
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
                        edit: true
                    }
                ],
                firstItem: [
                    {
                        name: '',
                        type: 'string',
                        edit: false,
                        width: 100
                    },
                    {
                        name: '',
                        type: 'string',
                        edit: false,
                        width: 100
                    },
                    {
                        name: '',
                        type: 'string',
                        edit: false,
                        width: 100
                    },
                    {
                        name: '年龄',
                        type: 'string',
                        edit: false,
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
                        birthday: '2010-09-25',
                        age: 1,
                        position: '2017-09-25'
                    },
                    {
                        name: 'h',
                        birthday: '2010-09-25',
                        age: 8,
                        position: '哈哈哈'
                    },
                    {
                        name: 'f',
                        birthday: '2010-09-25',
                        age: 6,
                        position: '2017-09-25'
                    },
                    {
                        name: 'c',
                        birthday: '2010-09-25',
                        age: 3,
                        position: '呲呲呲'
                    },
                    {
                        name: 'g',
                        birthday: '2010-09-25',
                        age: 7,
                        position: '哥哥哥'
                    },
                    {
                        name: 'e',
                        birthday: '2010-09-25',
                        age: 5,
                        position: '额额额'
                    },
                    {
                        name: 'a',
                        birthday: '2010-09-25',
                        age: 1,
                        position: '阿阿阿'
                    },
                    {
                        name: 'h',
                        birthday: '2010-09-25',
                        age: 8,
                        position: '哈哈哈'
                    },
                    {
                        name: 'f',
                        birthday: '2010-09-25',
                        age: 6,
                        position: '发发发'
                    },
                    {
                        name: 'c',
                        birthday: '2010-09-25',
                        age: 3,
                        position: '呲呲呲'
                    },
                    {
                        name: 'g',
                        birthday: '2010-09-25',
                        age: 7,
                        position: '哥哥哥'
                    },
                    {
                        name: 'e',
                        birthday: '2010-09-25',
                        age: 5,
                        position: '额额额'
                    },
                ]
            }
        },
        methods: {
            onItemClick: function(item, key, value, index, type, icontype) {
                // console.log(' key: ' + key + '    value: ' + value + '   columnindex: ' + index +'    type: ' + type + '     icontype: ' + icontype);
                // true 执行内部操作   false 不执行
                return true;
            },
            onItemChange: function(item,key) {
                console.log('item.name:' + item.name + '     key:' + key);
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