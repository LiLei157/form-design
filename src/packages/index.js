import Vue from 'vue'
import FormDesign from './Main/index'

const components = [
    FormDesign,
]

export default {
    install(){
        components.map(component =>{
            Vue.use(component)
        })
    }
}
