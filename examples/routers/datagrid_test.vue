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
                        name: 'ID',
                        type: 'string',
                        edit: true,
                        width: '6%'
                    },
                    {
                        name: '日期',
                        type: 'date',
                        edit: true,
                        width: '16%'
                    },
                    {
                        name: '标签',
                        type: 'string',
                        edit: false,
                        width: '9%'
                    },
                    {
                        name: '摘要',
                        type: 'string',
                        edit: true
                    },
                    {
                        name: '收入',
                        type: 'float',
                        edit: true,
                        width: '10%'
                    },
                    {
                        name: '支出',
                        type: 'float',
                        edit: true,
                        width: '10%'
                    },
                    {
                        name: '余额',
                        type: 'float',
                        edit: false,
                        width: '12%'
                    },
                    {
                        name: '操作',
                        type: 'icon',
                        edit: true,
                        width: '12%',
                        button: [
                            {
                                name: '添加',
                                type: 'add'
                            },
                            {
                                name: '移除',
                                type: 'del'
                            }
                        ] 
                    },
                    {
                        name: '操作2',
                        type: 'button',
                        edit: true,
                        width: '12%',
                        button: [
                            {
                                name: '添加',
                                type: 'add_button'
                            },
                            {
                                name: '移除',
                                type: 'del_button'
                            }
                        ] 
                    }
                ],
                firstItem: [
                    {
                        name: '',
                        type: 'string',
                        edit: false,
                        width: '6%'
                    },
                    {
                        name: '',
                        type: 'string',
                        edit: false,
                        width: '10%'
                    },
                     {
                        name: '',
                        type: 'string',
                        edit: true,
                        width: '9%'
                    },
                    {
                        name: '期初余额',
                        type: 'string',
                        edit: false
                    },
                    {
                        name: '',
                        type: 'string',
                        edit: false,
                        width: '10%'
                    },
                    {
                        name: '',
                        type: 'string',
                        edit: false,
                        width: '10%'
                    },
                    {
                        name: 123,
                        type: 'string',
                        edit: false,
                        width: '12%'
                    },
                    {
                        name: '',
                        type: 'icon',
                        edit: false,
                        width: '12%'
                    },
                    {
                        name: '',
                        type: 'button',
                        edit: false,
                        width: '12%'
                    }
                ],
                excelList: [
                    {
                        id: 1,
                        date: '2017-09-25',
                        tag: 'qt',
                        desc: '描述内容',
                        income: 12.43,
                        expense: 13,
                        value: 89
                    },
                    {
                        id: 2,
                        date: '2017-09-25',
                        tag: 'qita',
                        desc: '描述内容',
                        income: 12.43,
                        expense: 13,
                        value: 89
                    }
                ]
            }
        },
        methods: {
            onItemClick: function(item, key, value, index, type, icontype) {
                console.log(' key: ' + key + '    value: ' + value + '   columnindex: ' + index +'    type: ' + type + '     icontype: ' + icontype);
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