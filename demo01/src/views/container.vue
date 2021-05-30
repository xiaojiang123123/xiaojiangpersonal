<template>
  <div id="all">
    
      <div id="header">
          <div id="top">
          <div id="leftlogo">
              <div class="el-icon-s-promotion" style="line-height: 50px; margin-right: 15px"></div>
              <div>@小蒋的blog</div>
          </div>
          <div class="nav">
              <router-link to="/" :class="$route.path == '/' ? 'currentRouter' : ''" >
            网站首页
          </router-link>
                <router-link to="/project" :class=" $route.path.split('/').includes('project') ? 'currentRouter' : '' ">
                学无止境
                </router-link>
                <router-link to="/life" :class=" $route.path.split('/').includes('life') ? 'currentRouter' : ''">
                时间轴
                </router-link>
             <router-link to="/message" :class=" $route.path.split('/').includes('message') ? 'currentRouter' : ''">
            留言吧
            </router-link>
            <router-link to="/test" :class=" $route.path.split('/').includes('test') ? 'currentRouter' : ''">
            测试
            </router-link>
          </div>
          <div class="rightlogo">
            <div class="icon el-icon-user-solid"></div>
            <div>
                <el-dropdown>
      <span class="el-dropdown-link">
        管理中心<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">登录</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
            </div>

          </div>
          </div>
      </div>

    <div class="content">
      <router-view></router-view>
    </div>

      <div class="footer">
          
  <p>Design by <a href="/">小蒋的个人博客</a> <a href="/">@copy .湘 hnswxy12345195</a></p>
      </div>
      
  </div>
  
</template>

<script>
export default {
  created (){
    //本地存储
    localStorage.setItem("xiaojiang","小蒋")
    // 会话存储
    sessionStorage.setItem("sha","傻")
  }
}
</script>

<style lang = "less" scope>
 #all{
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    #header{
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: fixed;
        top: 0;
        right: 0;
        background: forestgreen;
        z-index: 22;
    }
    #top{
        width: 1200px;
        margin: 0 auto;
        display: flex;
       #leftlogo{
           width: 200px;
           font-size: 14px;
           color: #ffffff;
           display: flex;
       } 
       .nav{
           flex: 1;
      a {
        color: #ffffff;
        margin-right: 55px;
        &.currentRouter {
          color: yellow;
        }
       }
       }
      .rightlogo{
          width: 300px;
        display: flex;
        font-size: 14px;
        color: #ffffff;
       /deep/.el-dropdown-link {
        color: #fff;
        cursor: pointer;
      }  
      }
      .icon {
      line-height: 50px;
      margin-right: 6px;
    }
    }
    .content {
    flex: 1;
    height: 100%;
    width: 1200px;
    margin: 0 auto;
    background-color: #ffffff;
  }
  .footer{
      width: 100%;
      height: 60px;
      background: rgb(87, 83, 83);
      line-height: 50px;
      text-align: center;
      bottom: 0;
      right: 0;
      position: fixed;
  }
    }
</style>