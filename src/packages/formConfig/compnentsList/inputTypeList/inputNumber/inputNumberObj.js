import _ from 'lodash'

const inputNumberObj = (options) =>{
    return _.merge({
        id:'',// 唯一标识，也为v-model字段名
        defaultVal:0,
        active:false,
        label:'数字框',
        icon:'ios-calculator',
        tag:'input-number',
        labelWidth:120,
        required:true,
        max:0,
        min:0,
        span:24,// i-col span栅格属性
        controlsOutside:false,//按钮位置是否位于两侧
        step:1,//步频
        size:'default',
        disabled:false,//是否禁用
        placeholder:'请输入',
        editable:true,//是否可编辑
        rules:{}
    },options)
}
export default inputNumberObj