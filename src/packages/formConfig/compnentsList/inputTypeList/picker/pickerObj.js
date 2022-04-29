import _ from 'lodash'

/**
 * @description:日期选择器
 * @param {*} options 
 * @returns 
 */
const datePickerObj = (options)=>{
    return _.merge({
        id:'',
        active:false,
        type:'',//日期选择器的类型
        tag:'date-picker',
        label:'日期选择器',
        icon:'ios-calendar',
        span:24,// i-col span栅格属性
        'v-model':null,
        format:'',
        placeholder:'请输入',
        disabled:false,
        clearable:false,
        size:'default',
        transfer:true,
        options:{},
        nultiple:false,//是否多选
        'start-date':null,//起始时间
        confirm:false,//是否显示底部控制栏
        rules:{},//规则
    },options)
}
/**
 * @description:时间选择器
 * @param {*} options 
 * @returns 
 */
const timePickerObj = (options) =>{
    return _.merge({
        id:'',//唯一标识,也可v-model属性
        defaultVal:null,
        type:'',
        active:false,
        span:24,// i-col span栅格属性
        format:'',
        labelWidth:120,
        required:true,
        label:'时间选择器',
        icon:'md-alarm',
        steps:[],
        placeholder:'请选择',
        confirm:false,
        disabled:false,
        clearable:false,
        rules:{},
        size:'default',
    },options)
}

export {
    datePickerObj,
    timePickerObj
}