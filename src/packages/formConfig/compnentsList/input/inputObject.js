import _ from 'lodash'

const inputObj = (options) =>{
    return _.merge({
        id:'',//唯一标识
        type:'', // 输入框类型
        label:'',
        icon:'',
        vModel:'',//v-model绑定值
        size:'default',//尺寸
        placeholder:'请输入',//默认值
        clearable:false,//是否显示清空按钮
        disabled:false,//是否禁用
        maxLenth:'',//最大输入长度
        showWordLimit:false,//是否显示输入字数统计
        prefix:'',//头部图标
        suffix:'',//尾部图标
        // 验证规则相关
        rules:{

        },
        // 输入类型插槽
        _slot:{},  
        // 不同类型输入框的独有属性
        customOptions:{}
    },options)
}
export default inputObj