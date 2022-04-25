<template>
    <div class="middle-container">
        <div class="mid-view">
            <vue-draggable class="drag-style" :group="{name:'FormDesign',pull:'clone',put:false}" v-model="customComponents" animation="300">
                <div class="choose-list" style="height:200px" v-for="item in customComponents" :key="item.id">
                    <div class="choose-item">
                        {{item.label}}
                    </div>
                </div>
            </vue-draggable>

            <!-- <vue-draggable class="drag-style" :group="{name:'FormDesign',pull:'clone',put:false}" v-model="customComponents1" animation="300">
                <div class="choose-list" style="height:200px" v-for="item in customComponents1" :key="item.id">
                    <div class="choose-item">
                        {{item.label}}
                    </div>
                </div>
            </vue-draggable> -->
            <!-- <vue-draggable class="drag-style" group="FormDesign" v-model="customComponents2" animation="300">
                <div class="choose-list" style="height:200px" v-for="item in customComponents2" :key="item.id">
                    <div class="choose-item">
                        {{item.label}}
                    </div>
                </div>
            </vue-draggable> -->
        </div>
    </div>
</template>

<script>
    import VueDraggable from 'vuedraggable'
    export default {
        inject: ['componentModel'],
        components: {
            VueDraggable
        },
        data() {
            return {
                drag: false,
                customComponents: [
                    {label:'第一项组件'}
                ],
                customComponents2: [
                    {label:'第一项组件'}
                ]
            }
        },
        mounted() {
            console.log('middle.....', this.componentModel)
        }
    }
</script>

<style lang="scss" scoped>
    .middle-container {
        width: 100%;
        height: 100%;
        padding: 20px;

        .mid-view {
            box-sizing: border-box;
            background-color: #fff;
            height: 100%;
            padding: 30px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
            display: flex;
            justify-content: space-between;

            .drag-style{
                width: 100%;
                height: 100%;
                overflow: auto;
                .choose-item{
                    height: 50px;
                    width: 100%;
                    margin-bottom: 10px;
                    border: 1px dashed #333;
                }
            }
        }
    }
</style>