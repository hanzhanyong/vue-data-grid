<style lang="less">
    @import "../src/styles/index.less";
</style>
<style scoped>
nav { margin-bottom: 40px; }
ul { display: flex; flex-wrap: wrap; }
li { display: inline-block; }
li + li { border-left: solid 1px #bbb; padding-left: 10px; margin-left: 10px; }
.container{ padding: 10px 40px; }
.routerview{ background: #FFFFFF; padding: 20px; }
.v-link-active { color: #bbb; }
</style>
<template>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/datagridtest">datagrid(excel)</router-link></li>
            </ul>
        </nav>
         <div class="routerview">
        <router-view></router-view>
    </div>
     </div>
</template>
