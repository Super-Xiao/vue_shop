<template>
  <div>
    <div class="wel_title">欢迎登录电商管理系统</div>
    <el-carousel :interval="4000" type="card" height="600px">
      <el-carousel-item>
        <img src="https://img0.baidu.com/it/u=2474215791,3931095998&fm=26&fmt=auto" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://img1.baidu.com/it/u=2562655874,2945560195&fm=26&fmt=auto" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://img1.baidu.com/it/u=3021115167,2136989764&fm=26&fmt=auto" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="https://img1.baidu.com/it/u=1118554465,3287093305&fm=26&fmt=auto" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.wel_title{
  width: 100%;
  text-align: center;
  height: 90px;
  line-height: 90px;
  margin: 0 auto;
  font-size: 30px;
  margin-bottom: 30px;
  color: #fff;
  background-color: rgb(202, 188, 202);
  box-shadow: 0 0 5px rgba(0, 0, 0, .3);
  -webkit-text-stroke: 10px rgba(195, 0, 255, 0.233);
  letter-spacing: 10px;
}
img{
  width: 100%;
  height: 100%;
}
</style>