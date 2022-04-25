<template>
    <div class="main">
        <header-container></header-container>
        <div class="main__wrap">
            <left-container></left-container>
            <mid-container></mid-container>
            <right-container></right-container>
        </div>
    </div>
</template>

<script>
    import HeaderContainer from '../../components/HeaderComponent.vue'
    import LeftContainer from '../../components/LeftContainer.vue';
    import MidContainer from '../../components/MiddleContainer.vue';
    import RightContainer from '../../components/RightContainer.vue';
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
        components:{
            HeaderContainer,
            LeftContainer,
            MidContainer,
            RightContainer
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
        }
    }
</style>