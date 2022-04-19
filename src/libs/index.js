import Vue from 'vue'
import {Header,Layout,Content,Sider} from 'view-design'

const ViewUIComponents = [
    {
        name:'i-header',
        component:Header
    },
    {
        name:'i-layout',
        component:Layout
    },
    {
        name:'i-sider',
        component:Sider
    },
    {
        name:'i-content',
        component:Content
    }
]

export default function(){
    ViewUIComponents.map(item =>{
        Vue.component(item.name,item.component)
    })
}