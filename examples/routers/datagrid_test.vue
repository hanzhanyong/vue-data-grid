<template>
    <div>
        Date: <input type="date" style="width:120px;height:30px;" />
        <VueDataGrid :fields="fields" :firstItem="firstItem" :items="excelList" 
        :onItemClickCallBack="onItemClick"
        :onItemChangeCallBack="onItemChange"
        :onItemLastCallBack="onItemLast"
        :rowsHeight="rowsHeight" width="80%" height="320px"> </VueDataGrid>

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
                        type: 'float',
                        hide: false,
                        edit: true,
                        width: 100
                    },
                    {
                        name: '出生日期',
                        type: 'date',
                        edit: true,
                        width: 150
                    },
                    {
                        name: '年龄',
                        type: 'string',
                        hide: true,
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
                        width: 150
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
                        name: 123.5,
                        birthday: '2010-09-25',
                        age: 1,
                        position: '2017-09-25'
                    },
                    {
                        name: 56,
                        birthday: '2010-09-25',
                        age: 8,
                        position: '哈哈哈'
                    },
                    {
                        name: 434,
                        birthday: '2010-09-25',
                        age: 6,
                        position: '2017-09-25'
                    },
                    {
                        name: 565,
                        birthday: '2010-09-25',
                        age: 3,
                        position: '呲呲呲'
                    },
                    {
                        name: 53,
                        birthday: '2010-09-25',
                        age: 7,
                        position: '哥哥哥'
                    },
                    {
                        name: 67,
                        birthday: '2010-09-25',
                        age: 5,
                        position: '额额额'
                    },
                    {
                        name: 78,
                        birthday: '2010-09-25',
                        age: 1,
                        position: '阿阿阿'
                    },
                    {
                        name: 77,
                        birthday: '2010-09-25',
                        age: 8,
                        position: '哈哈哈'
                    },
                    {
                        name: 864,
                        birthday: '2010-09-25',
                        age: 6,
                        position: '发发发'
                    },
                    {
                        name: 2343,
                        birthday: '2010-09-25',
                        age: 3,
                        position: '呲呲呲'
                    },
                    {
                        name: 444,
                        birthday: '2010-09-25',
                        age: 7,
                        position: '哥哥哥'
                    },
                    {
                        name: 5544,
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
            onItemLast: function() {
                alert('已经是最后一个数据了！');
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