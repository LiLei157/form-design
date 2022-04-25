import _ from 'lodash'
const uploadObj = (options) =>{
    return _.merge({
        id:'',
        active:false,
        label:'上传',
        type:'upload',
        icon:'md-cloud-upload',
        tag:'i-upload',
        action:'',
        multiple:false,//是否多选
        disabled:false,//是否禁用
        'show-upload-list':true,
        showType:'',//控件类型
        'max-size':1024
    },options)
}
export default uploadObj