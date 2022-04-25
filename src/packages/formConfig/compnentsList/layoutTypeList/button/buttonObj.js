import _ from 'lodash'
const buttonObj = (options) =>{
    return _.merge({
        id:'',
        label:'按钮',
        icon:'logo-youtube',
        tag:'i-button',
        type:'',
        size:'default',
        shape:'',
        disabled:false,
        'custom-icon':''
    },options)
}
export default buttonObj