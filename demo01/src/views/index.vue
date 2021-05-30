<template>
<div class="bg">
   <div class="block">
    <el-carousel height="350px">
      <!-- arr=["1","2"] -->
      <el-carousel-item v-for="item in 3" :key="item">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="article">
   <ul>
     <li>
       <a href="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner&city=%E6%B2%B3%E5%8D%97-%E6%B2%B3%E5%8D%97">
       <span>【推荐】</span>【心系河南】疫情实时数据</a>
      <a href="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner"> <img src="../assets/src/two.png"/></a>
       <p>
         ##心系武汉，关注疫情&amp;
       </p>
     </li>
     <li>
       <a href="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_aladin_banner&city=%E6%B2%B3%E5%8D%97-%E6%B2%B3%E5%8D%97">
       <span>【推荐】</span>pycharm,webstorm 破解激活</a>

      <a href="https://www.heanny.cn/post-334.html"> <img src="../assets/src/one.jpg" /></a>
       <p>
         破解补丁激活破解补丁激活
       </p>
       <p>
          优点：到期时间为2099年，基本为永久啦
          缺点：相对服务器激活麻烦些，但是一共只需要3个步骤，其实并不麻烦破解补丁激活
       </p>
     </li>
     
   </ul>
  </div>
  
  </div>

</template>

<script>
export default {
 
}
</script>

<style lang = "less" scope>

.block{
  margin-top:20px ;
  .el-carousel__item:nth-child(2n+1) {
   background: url(../assets/src/siye.png) no-repeat;
}
.el-carousel__item:nth-child(2n) {
   background: url(../assets/src/leave.png) no-repeat;
}
}
.article{
 margin-top: 25px;
 margin-left: 110px;
 ul{
  display: flex;
}
}



</style>