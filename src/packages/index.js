import Vue from 'vue'
import MyHeader from './header/index'
import FormDesign from './main/index'

const components = [
    MyHeader,
    FormDesign
]

export default {
    install(){
        components.map(component =>{
            Vue.use(component)
        })
    }
}
