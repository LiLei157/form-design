<template>
  <div class="left-container">
      <div class="classify-com-item" v-for="classifyItem in LeftComponentList" :key="classifyItem.id">
          <div class="classify-label">
              <i-icon :type="classifyItem.icon"></i-icon>
              <span style="margin-left:10px">{{classifyItem.label}}</span>
          </div>
          <vue-draggable 
            class="list" 
            v-model="classifyItem.componentList" 
            animation="1000"
            @start="drag = true"
            @end="drag = false"
            draggable=".draggable-item"
            :group="{name:'FormDesign',pull:'clone',put:false}"
            >
                <div class="draggable-item" draggable v-for="item in classifyItem.componentList" :key="item.id">
                    <i-icon class="icon" :type="item.icon"></i-icon>
                    <span class="label">{{item.label}}</span>
                </div>
          </vue-draggable>
      </div>
  </div>
</template>

<script>
import VueDraggable from 'vuedraggable'
import LeftComponentList from '../formConfig/index'
export default {
    components:{
        VueDraggable
    },
    data(){
        return {
            drag:false,
            LeftComponentList:LeftComponentList,
            customComponents2: [
                    {label:'第一项组件'}
                ]
        }
    },
    mounted(){
        console.log(this.LeftComponentList)
    }
}
</script>

<style lang="scss" scoped>
.left-container{
    box-sizing: border-box;
    width: 350px;
    height: 100%;
    background-color: #fff;
    padding: 30px 15px;
    .classify-com-item{
        width: 100%;
        .classify-label{
            font-size: 14px;
            color: #222;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        .list{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding-bottom: 20px;
            color:#000;
            .draggable-item{
                display: inline-block;
                width: 47%;
                padding: 5px 0;
                background-color: #f6f7ff;
                margin-bottom: 8px;
                font-size: 12px;
                box-sizing: border-box;
                padding-left: 12px;
                border: 1px solid #f6f7ff;
                .icon{
                    font-size: 16px;
                }
                .label{
                    margin-left: 8px;
                }
            }
            .draggable-item:hover{
                cursor: move;
                border: 1px dashed #333;
            }
        }
        
    }
}
</style>