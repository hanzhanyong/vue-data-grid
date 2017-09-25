export default {
    props: {
        width: {
            type: [String, Number],
            default: 600
        },
        height: {
            type: [String, Number],
            default: 300
        },
        rowsHeight: {
            type: [String, Number],
            default: 300
        },
        items: { type: Array, required: true },
        fields: { type: Array, required: true },
        onItemClickCallBack: Function
    }
};
