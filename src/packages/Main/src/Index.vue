<template>
    <div class="main">
        <header-container></header-container>
        <div class="main__wrap">
            <left-container></left-container>
            <mid-container @changeComponents="changeComponents"></mid-container>
            <right-container></right-container>
        </div>
    </div>
</template>

<script>
    import HeaderContainer from '../../components/HeaderComponent.vue'
    import LeftContainer from '../../components/LeftContainer.vue';
    import MidContainer from '../../components/MiddleContainer.vue';
    import RightContainer from '../../components/RightContainer.vue';
    import axios from 'axios'
    export default {
        data(){
            return {
                componentModel:{
                    componentsList:[],
                    model:{}
                }
            }
        },
        provide(){
            return {
                componentModel:this.componentModel
            }
        },
        mounted(){
            // this.test()
        },
        components:{
            HeaderContainer,
            LeftContainer,
            MidContainer,
            RightContainer
        },
        methods:{
            changeComponents(list){
                this.componentModel.componentsList = list
            },
            test(){
                axios.get('/prod-api/system/dict/data/type/sys_normal_disable').then(res =>{
                    console.log(res)
                })
                axios({
                    method:'post',
                    url:'/prod-api/login',
                    headers:{
                        'content-type':'application/json;charset=UTF-8',
                        'cookie':'Hm_lvt_bb4f5da057f22a0134fd46d78ef35bae=1651126513; sidebarStatus=0'
                    },
                    data:{
                        code:'2',
                        password:'admin123',
                        username:'admin',
                        uuid:'2e607b585c464d5da0cc3164c6d3400a'
                    }
                }).then(res =>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #f5f7f9;  
        .main__wrap{
            flex: 1;
            display: flex;
            overflow: auto;
        }
    }
</style>