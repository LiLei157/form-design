import _ from 'lodash'

const radioObj = (options) =>{
    return _.merge({
        id:'',
        'v-model':[],
        active:false,
        label:'单选框',
        icon:'md-radio-button-on',
        tag:'i-radio-group',
        childTag:'i-radio',//子标签名
        size:'default',
        type:'radio',
        border:false,
        vertical:false,//是否垂直排列
        options:[],//radio-group下的 radio子项
        // 验证规则相关
        rules:{

        },
        showType:'',//单选框显示样式 button按钮 或 不填
    },options)
}
export default radioObj