<template>
    <div class="left-container">
        <div class="classify-com-item" v-for="classifyItem in LeftComponentList" :key="classifyItem.id">
            <div class="classify-label">
                <Icon :type="classifyItem.icon"></Icon>
                <span style="margin-left:10px">{{classifyItem.label}}</span>
            </div>
            
            <vue-draggable class="list" 
                :sort="false" 
                v-model="classifyItem.componentList" 
                animation="300" 
                :clone="handleClone"
                draggable=".draggable-item" 
                :group="{name:'FormDesign',pull:'clone',put:false}">
                <div class="draggable-item" v-for="item in classifyItem.componentList" :key="item.id">
                    <Icon class="icon" :type="item.icon"></Icon>
                    <span class="label">{{item.label}}</span>
                </div>
            </vue-draggable>
        </div>
    </div>
</template>

<script>
    import VueDraggable from 'vuedraggable'
    import LeftComponentList from '../formConfig/index'
    import _ from 'lodash'
    export default {
        components: {
            VueDraggable
        },
        data() {
            return {
                drag: false,
                LeftComponentList: LeftComponentList
            }
        },
        mounted() {
            console.log(this.LeftComponentList)
        },
        methods:{
            handleClone(obj){
                console.log('clone...',obj)
                let field = 'field_'+Date.now()
                // 深拷贝当前拖拽对象属性，防止后期修改属性互相干扰，因为对象是对象引用
                let newObj = _.assign(_.cloneDeep(obj),{field:field,'_formConfig_':{
                    labelPosition:'right'
                }})
                console.log('field: ',newObj.field)
                return newObj
            }
        }
    }
</script>

<style lang="scss" scoped>
    .left-container {
        box-sizing: border-box;
        width: 350px;
        height: 100%;
        background-color: #fff;
        padding: 30px 15px;

        .classify-com-item {
            width: 100%;

            .classify-label {
                font-size: 14px;
                color: #222;
                display: flex;
                align-items: center;
                margin-bottom: 10px;
            }

            .list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding-bottom: 20px;
                color: #000;

                .draggable-item {
                    display: inline-block;
                    width: 47%;
                    padding: 5px 0;
                    background-color: #f6f7ff;
                    margin-bottom: 8px;
                    font-size: 12px;
                    box-sizing: border-box;
                    padding-left: 12px;
                    border: 1px solid #f6f7ff;

                    .icon {
                        font-size: 16px;
                    }

                    .label {
                        margin-left: 8px;
                    }
                }

                .draggable-item:hover {
                    cursor: move;
                    border: 1px dashed #333;
                }
            }

        }
    }
</style>