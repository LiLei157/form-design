import _ from 'lodash'

const inputObj = (options) =>{
    return _.merge({
        id:'',//唯一标识,也作为 v-model制定的字段名
        defaultVal:'', // 字段名的默认值
        active:false,//是否选中标识
        type:'', // 输入框类型
        tag:'i-input',
        label:'',//仅用于显示左侧组件按钮文本
        labelWidth:120,
        required:true,
        icon:'',
        size:'default',//尺寸
        span:24,// i-col span栅格属性
        placeholder:'请输入',//默认值
        clearable:false,//是否显示清空按钮
        disabled:false,//是否禁用
        maxLenth:'',//最大输入长度
        'show-word-limit':false,//是否显示输入字数统计
        prefix:'',//头部图标
        suffix:'',//尾部图标
        // 验证规则相关
        rules:{

        },
        // 输入类型插槽
        _slot_:{},  
        // 不同类型输入框的独有属性
        customOptions:{}
    },options)
}
export default inputObj