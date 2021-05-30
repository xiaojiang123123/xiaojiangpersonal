<template>
  <div class="test">
    <p v-for="(item,val) in arr" :key="val" >
        <span v-show="item.name!='二傻'">{{`我i叫${item.name},今年${item.age}`}}</span>
    </p>
    <input type="text" :v-model="name">
    <p>{{name}}</p>
    <p v-show="show">平平无奇干饭人</p>
  </div>
</template>

<script>
/***
 *  v-show  控制显示
 * v-for   循环   注意key值
 * v-model  数据绑定
 * v-if 控制显示   和v-show不同的   v-if  相当于整个Dom都没了
 * v-show控制的dom还在    只是相当于css的display:none
 * 
 * 
 * 
 * 
 * ***** */
export default {
    data(){
        return{
            show:false,
            arr:[
                {name:"小蒋",age:"18"},
                {name:"二傻",age:"22"}
            ],
            name:"小蒋"
        }
    }
 
};
</script>

<style lang="less" scoped>
</style>