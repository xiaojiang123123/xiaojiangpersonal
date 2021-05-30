<template>
    <div class="app">
    <div class="head">
    <h2 class="litle"><span>凡是过往，皆为序章。凡是未来，皆有所盼。</span></h2>
    </div>
    <div class="box">
        <textarea placeholder="留下你想说的，让我们开始对话吧..."></textarea>
    </div>
    <div class="mark">
        <el-row>
            <el-button round style="background:skyblue;color:#fff">发布</el-button>
        </el-row>
    </div>
    <div class="message">
       <h4 class="cooment"> <span>0</span>人参与，<span>10</span>条评论</h4>
       <div class="other">
           <p>快来参与吧....</p>
       <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><span>风吹过的夏天</span>
        <h3>
           00000000000000000000000000000000000000000000000000000000000000000000000000000
       </h3>
       <el-divider></el-divider>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><span>@小蒋同学</span>
        <h3>
           111111111111111111111111111111111111111111111111111
           从未走远
       </h3>
        <el-divider></el-divider>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><span>从未走远</span>
        <h3>
         <p>  。1111可能，你觉得自己没有足够得优秀，但我始终相信你仍然在努力坚持着!</p>
       </h3>
       
       </div>
    </div>
    <div class="last">
        <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    </div>
    </div>
</template>

<script>
export default {
 
}
</script>

<style lang="less" scoped>
.app{
    width: 100%;
    height: 100%;
    background: #eee;
    h2{
    color: rgb(47, 255, 92);
    float: right;
    line-height: 50px;
}
textarea{
    width: 100%;
    height: 150px;
    margin-top: 20px;
}
.mark{
    width: 110px;
    float: right;
}
.last{
    bottom: 90px;
    position: fixed;
    
}
}

</style>