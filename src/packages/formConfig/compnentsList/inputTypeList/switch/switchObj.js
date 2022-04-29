import _ from 'lodash'

const switchObj = (options) =>{
    return _.merge({
        id:'',
        active:false,
        defaultVal:false,
        size:'default',
        tag:'i-switch',
        type:"switch",
        label:'开关',
        icon:'ios-switch',
        disabled:false,
        'true-color':'',
        'false-color':'',
        loading:false,
        _slot_:{
            open:'open',
            close:'close'
        }
    },options)
}
export default switchObj