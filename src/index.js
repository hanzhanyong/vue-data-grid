import VueDataGrid from './components/datagrid/index.vue';


import locale from './locale';

const vuedatagrid = {
    VueDataGrid,
};

const install = function (Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    Object.keys(vuedatagrid).forEach((key) => {
        Vue.component(key, vuedatagrid[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = Object.assign(vuedatagrid, {install});   // eslint-disable-line no-undef
