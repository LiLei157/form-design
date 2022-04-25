import _ from 'lodash'

const selectObj = (options) =>{
    return _.merge({
        id:'',// id唯一标识
        'v-model':null,
        active:false,//选中标识
        label:'选择框',//仅用于显示左侧组件按钮文本
        size:'default',
        icon:'ios-arrow-dropdown-circle',
        type:'select',
        tag:'i-select',
        childTag:'i-option',//options子标签 i-option
        multiple:false,//是否多选
        disabled:false,
        placeholder:'请输入',
        prefix:'',//select内显示图标
        // 验证规则相关
        rules:{

        },
        options:[],//子项
    },options)
}
export default selectObj