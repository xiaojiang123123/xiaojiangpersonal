<template>
 <div class="block">
  <div class="newsblog">
 <div class="mysql">
     <ul>
         <li>
             <h3 class="blogtitle"><span><a href="/learn/experience/" title="心得笔记" target="_blank"  class="classname">心得笔记</a></span><a href="/learn/experience/12.html" target="_blank" >【匆匆那些年】总结个人博客经历的这四年…</a></h3>
        <div class="bloginfo">
            <span class="blogpic"><a href="/learn/experience/12.html" title="【匆匆那些年】总结个人博客经历的这四年…">
            <img src="https://www.yangqq.net/d/file/jstt/bj/2014-01-09/731bf0dc9f9fe45c11cc2a94fce759f7.jpg" alt="【匆匆那些年】总结个人博客经历的这四年…" />
            </a></span>
          <p>话说这四年，并不是很专注于它，起初的建立是因为“面子”，一个网页设计师怎能没有一个属于自己的博客网站，
              域名几番斟酌选(唯一用心的选了域名)，选好后，草草的用了两天时间...</p>
        </div>
        <div class="autor"><span class="dtime f_l">2020-12-26</span><span class="viewnum f_l">浏览（
            <a href="/learn/experience/12.html">2</a>）</span><span class="f_r"><a href="/learn/experience/12.html" class="more">阅读原文>>
            </a></span></div>
        <div class="line"></div>
         </li>
          <li>
        <h3 class="blogtitle"><span><a href="/learn/experience/" title="心得笔记" target="_blank"  class="classname">心得笔记</a></span>
        <a href="/learn/experience/11.html" target="_blank" >从摄影作品中获取网页颜色搭配技巧</a></h3>
        <div class="bloginfo"><span class="blogpic"><a href="/learn/experience/11.html" title="从摄影作品中获取网页颜色搭配技巧">
        <img src="https://www.yangqq.net/d/file/jstt/bj/2014-01-09/403bfe9908a157a1d3f7a4c2ba24a998.jpg" alt="从摄影作品中获取网页颜色搭配技巧" />
        </a></span>
          <p>作为一个优秀、专业的网页设计师，首先要了解各种颜色的象征，以及不同类型网站常用的色彩搭配。色彩搭配看似复杂,
              但并不神秘。一般来说,网页的背景色应该柔和一些、素一些、淡...</p>
        </div>
        <div class="autor"><span class="dtime f_l"  @click="Print">2019-08-03</span><span class="viewnum f_l">浏览（<a href="/learn/experience/11.html">0</a>）</span><span class="f_r"><a href="/learn/experience/11.html" class="more">阅读原文>></a></span></div>
        <div class="line"></div>
      </li>

     </ul>
 <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="【MySQL】mysql数据库" name="1">
    <div>数据库（Database）是按照数据结构来组织、存储和管理数据的仓库。
每个数据库都有一个或多个不同的 API 用于创建，访问，管理，搜索和复制所保存的数据。；
</div>
    <div>
        MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，目前属于 Oracle 公司。
        MySQL 是一种关联数据库管理系统，关联数据库将数据保存在不同的表中，
        而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。
        </div>
        <div>
            <img src="../assets/src/mysql.png"/>
        </div>
  </el-collapse-item>
  <el-collapse-item title="【java web】javaweb技术" name="2">
    <div>WWW 是 WorldWide Web（环球信息网）的缩写，也可以简称为 Web，中文名字为“万维网”。它起源于 1989年 3 月，
        由欧洲量子物理实验室 CERN（the European Laboratory for Particle Physics）所发展出来的主从结构分布式超媒体系统。</div>
    <div>过万维网，人们只 需要使用简单的方法（如 Web 搜索等），
        就可以方便快捷地获取丰富的信息资料。由于用户在通过
         Web浏览器访问信息资源的过程中无需再关心一些技术性的细节，</div>
  </el-collapse-item>
  <el-collapse-item title="【Android】 listview 自定义" name="3">
    <div>Android listview 自定义 adapter getView()方法重复调用多次，
        解决方式就是把listview的android:layout_width 和 android:layout_height 
        布局的高度都改成 fill_parent 或者 match_parent</div>
    <div>View在Draw的时候分成两个阶段：measure和layout，在measure阶段时主要就是为了计算两个参数：height和width。而且要注意的是，这是个递归的过程，
        从顶向下，DecorView开始依次调用自己子元素的measure。计算完成这两个参数后就开始layout，最后再是draw的调用。
</div>
    <div>对于ListView，当然每一个Item都会被调用measure方法，
        而在这个过程中getView和getCount会被调用，而且看用户的需求，可能会有很多次调用。</div>
  </el-collapse-item>
  <el-collapse-item title=" 【maven】 详谈" name="4">
    <div>Maven是Apache软件基金会唯一维护的一款自动化构建工具，专注于服务Java平台的项目构建和依赖管理。
        Maven是基于项目对象模型（POM），可以通过一小段描述信息来管理项目的构建、报告和文档的软件项目管理工具。

</div>
    <div>Maven 能够实现自动化构建是和它的内部原理分不开的，这里我们从 Maven 的九个核心概念入手， 看看 Maven 是如何实现自动化构建的</div>
  </el-collapse-item>
</el-collapse>
  </div>
  </div>
</div>
</template>

<script>
export default {
    data(){
        return{
             activeNames:"",
        }
    },
    destroyed(){
        localStorage.removeItem("xiaojiang")
    },
    methods:{
        handleChange(data){
            
        },
        Print(){
            console.log(localStorage.getItem('xiaojiang'),"0000");
        }
    }
    

}
</script>

<style lang = "less" scope>
.mysql{
    width: 100%;
    height: 100%;
    ul{
        display: flex;
        p{
            color: black;
        }
    }
}
</style>