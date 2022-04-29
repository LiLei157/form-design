import _ from 'lodash'

const sliderObj = (options) =>{
    return _.merge({
        id:'',
        defaultVal:'',
        min:0,
        max:100,
        label:'滑块',
        tag:'i-slider',
        icon:'md-git-commit',
        step:1,
        span:24,// i-col span栅格属性
        disabled:false,
        range:false,//是否开启双滑块
        'show-input':false,//是否显示数字输入框
        'show-stops':false,//是否显示间断点
        'show-tip':'',
        'input-size':'default',
        
    },options)
}
export default sliderObj