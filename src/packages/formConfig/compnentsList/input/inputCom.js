import inputObj from './inputObject'
export default [
    //文本输入
    inputObj({
        id:'field_'+Date.now(),
        label:'文本框',
        icon:'md-text',
        type:'text',
        vModel:'model_'+Date.now(),
        _slot:{
            prepend:'prepend',
            append:'append' 
        }
    }),
    // 密码输入
    inputObj({
        id:'field_'+Date.now(),
        label:'密码框',
        icon:'md-eye',
        type:'password',
        vModel:'model_'+Date.now(),
        customOptions:{
            password:false
        }
    }),
    // 多行文本
    inputObj({
        id:'field_'+Date.now(),
        type:'textarea',
        label:'多行文本',
        icon:'md-reorder',
        vModel:'model_'+Date.now(),
        customOptions:{
            rows:2,
            autoSize:false
        }
    })
]