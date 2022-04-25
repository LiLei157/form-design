import _ from 'lodash'

const inputNumberObj = (options) =>{
    return _.merge({
        id:'',
        active:false,
        label:'数字框',
        icon:'ios-calculator',
        tag:'input-number',
        max:0,
        min:0,
        'v-model':0,
        'controls-outside':false,//按钮位置是否位于两侧
        step:1,//步频
        size:'default',
        disabled:false,//是否禁用
        placeholder:'请输入',
        editable:true,//是否可编辑
        rules:{}
    },options)
}
export default inputNumberObj