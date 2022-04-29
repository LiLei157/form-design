<template>
    <div class="middle-container">
        <div class="mid-view">
            <vue-draggable class="drag-style" group="FormDesign" v-model="customComponents" animation="300">
                <div v-show="customComponents.length > 0">
                    <Form >
                        <FormItem class="choose-item" v-for="(item,idx) in customComponents" :key="item.field" @click.native="handleClickItem(idx)">
                            {{item.label}}
                            <Icon v-show="item.active" class="copy-icon" type="logo-buffer" />
                            <Icon v-show="item.active" class="delete-icon" type="ios-trash" @click="handleDelete(idx)"/>
                        </FormItem>
                    </Form>
                    <!-- <div class="choose-item" v-for="(item,idx) in customComponents" :key="item.field" @click="handleClickItem(idx)">
                        
                    </div> -->
                   
                </div>
                <div class="drag-title" v-show="customComponents.length === 0">
                    从左侧组件拖拽生成表单
                </div>
            </vue-draggable>
        </div>
    </div>
</template>

<script>
    import VueDraggable from 'vuedraggable'
    // import FormContainer from './Form/FormContainer.vue'
    export default {
        inject: ['componentModel'],
        components: {
            VueDraggable,
            // FormContainer
        },
        data() {
            return {
                customComponents: [],
                customComponents2: [
                    {label:'第一项组件'}
                ]
            }
        },
        watch:{
            customComponents(newArr){
                console.log('watch..',newArr)
                this.$emit('changeComponents',newArr)
            }
        },
        mounted() {
            console.log('middle.....', this.componentModel)
        },
        methods:{
            handleDelete(idx){
                console.log(idx)
                this.customComponents.splice(idx,1)
            },
            /**
             * @description:点击组件项
             */
            handleClickItem(idx){
                console.log('.......')
                this.customComponents.map((item,index) =>{
                    if(idx === index){
                        this.$set(item,'active',true)
                    }else{
                        this.$set(item,'active',false)
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .middle-container {
        width: 100%;
        height: 100%;
        padding: 20px;
        overflow: auto;
        .mid-view {
            box-sizing: border-box;
            background-color: #fff;
            height: 100%;
            padding: 30px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
            display: flex;
            justify-content: space-between;
            overflow: scroll;
            .drag-style{
                width: 100%;
                height: 100%;
                .choose-item{
                    position:relative;
                    padding: 12px 10px;
                    margin-bottom: 30px;
                    transition: all .3s;
                    .copy-icon,.delete-icon{
                        width: 24px;
                        height: 24px;
                        font-size: 16px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        cursor: pointer;
                        transition: all .3s;
                    }
                    .copy-icon{
                        color: #2d8cf0;
                        border: 1px solid #2d8cf0;
                        right: 40px;
                        top: -14px;
                    }
                    .delete-icon{
                        right: 10px;
                        top: -14px;
                        color: #ed4014;
                        border: 1px solid #ed4014;
                    }
                    .copy-icon:hover{
                        color: #fff;
                        background-color: #2d8cf0;
                    }
                    .delete-icon:hover{
                        color: #fff;
                        background-color: #ed4014;
                    }
                }
                .choose-item:hover,.choose-item_active{
                    background-color: #f6f7ff;
                    border-radius: 6px;
                }
                .drag-title{
                    color: #2d8cf0;
                    font-size: 18px;
                    display: flex;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
</style>