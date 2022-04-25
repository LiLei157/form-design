import _ from 'lodash'

const checkboxObj = (options) => {
    return _.merge({
        id: '',
        'v-model': [],//双向绑定
        active:false,
        label: '多选框',
        type: 'checkbox',
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