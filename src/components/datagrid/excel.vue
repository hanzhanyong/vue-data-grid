<template>
    <div>
        <table cellspacing="0" border="1" style="border-color:#00FF00">
            <thead>
            <tr>
                <td>姓名</td>
                <td>年龄</td>
                <td>职位</td>
            </tr>
            </thead>
            
            <tbody @keyup="show($event)">
            <tr v-for="(item,index) in excelList">
                <td contenteditable="true" v-text="item.name" @input="inputHandler(index,$event,'name')"></td>
                <td contenteditable="true" v-text="item.age" @input="inputHandler(index,$event,'age')"></td>
                <td contenteditable="true" v-text="item.position" @input="inputHandler(index,$event,'position')"></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'excel',
        data:function () {
            return {
                sortName: 'age',
                sortTyle: 'stl',
                excelList: [
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
        mounted: function () {
        },
        methods: {
            inputHandler: function (index,$event,type) {
                // console.log($event);
                this.excelList[index][type] = $event.target.innerText;
            },
            show:function(ev){  
                if(ev.keyCode == 13){  
                    //alert('你按回车键了');
                    // console.log(ev);
                    // console.log(ev.srcElement.cellIndex +
                    //  ','+ ev.srcElement.parentElement.rowIndex+
                    //   ','+ ev.srcElement.parentElement.childElementCount);
                    var cellIndex = ev.srcElement.cellIndex;
                    var rowIndex = ev.srcElement.parentElement.rowIndex;
                    var cellCount = ev.srcElement.parentElement.childElementCount;
                    var rowCount = ev.srcElement.parentElement.parentElement.childElementCount;
                console.log('cellIndex:'+cellIndex+'   rowIndex:'+rowIndex
                +'   cellCount:' + cellCount+
                     '    rowCount'+ rowCount);
                    var selObj = null;
                    if (cellIndex === cellCount-1) {
                        if (rowIndex === rowCount) rowIndex = 0;
                        selObj = ev.srcElement.parentElement.parentElement.children[rowIndex];
                        cellIndex = -1;
                    } else {
                        selObj = ev.srcElement.parentElement.parentElement.children[rowIndex - 1];
                    }
                    selObj = selObj.children[cellIndex+1];
                    if(selObj) selObj.focus();
                }  
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped type="text/css">
    table {
        width: 100%;
    }
</style>
