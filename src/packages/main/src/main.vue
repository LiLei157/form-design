<template>
    <div class="main">
      <m-header></m-header>
      <div class="content">
        <div class="left"></div>
        <div class="mid">
          <div class="main-view">

          </div>
        </div>
        <div class="rig"></div>
      </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.main{
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f5f7f9;
  .content{
    flex: 1;
    display:flex;
    .left,.rig{
      width: 20%;
      background-color: #fff;
    }
    .left{
      width: 15%;
    }
    .mid{
      width: 65%;
      padding: 20px;
      .main-view{
        height: 100%;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 1px 1px 0 rgba(255,255,255,.2);
      }
    }
  }
}
</style>