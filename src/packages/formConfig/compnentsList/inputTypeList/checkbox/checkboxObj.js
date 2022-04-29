import _ from 'lodash'

const checkboxObj = (options) => {
    return _.merge({
        id: '',//双向绑定时的字段名，即标签中的 v-model="id"
        defaultVal:[],
        active:false,
        label: '多选框',
        type: 'checkbox',
        labelWidth:120,
        required:true,
        span:24,
        tag:'i-checkbox-group',
        childTag:'i-checkbox',//子标签
        icon: 'ios-checkbox',
        disabled:false,
        size:'default',
        border:false,
        // 验证规则相关
        rules:{

        },
        options:[]
    }, options)
}
export default checkboxObj