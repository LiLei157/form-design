import inputObj from './inputObject'
export default [
    //文本输入
    inputObj({
        id:'text_',
        label:'文本框',
        icon:'md-text',
        type:'text',
        'v-model':'model_'+Date.now(),
        _slot_:{
            prepend:'prepend',
            append:'append' 
        }
    }),
    // 密码输入
    inputObj({
        id:'pwd_',
        label:'密码框',
        icon:'md-eye',
        type:'password',
        'v-model':'model_'+Date.now(),
        customOptions:{
            password:false
        }
    }),
    // 多行文本
    inputObj({
        id:'textarea_',
        type:'textarea',
        label:'多行文本',
        icon:'md-reorder',
        'v-model':'model_'+Date.now(),
        customOptions:{
            rows:2,
            autoSize:false
        }
    })
]