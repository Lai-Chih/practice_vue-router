<template>
  <div id="app">
    <img class="tltImg" src="./assets/Chih.svg">
    <br>
    <br>
    <div class="flexBox">
      <router-link class="btn" to="/test">Testing Page</router-link>
      <router-link class="btn" to="/user/Frank">user Frank</router-link>
      <router-link class="btn" to="/user/Lisa">user Lisa</router-link>
      <router-link class="btn" to="/user/id/2">userId 2</router-link>
    </div>
    <br>
    <transition name="page" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
    <router-link class="homeImg" to="/"><img src="./assets/icon_house.svg"></router-link>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, '微軟正黑體', Microsoft JhengHei, Apple LiGothic, '蘋果儷中黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  line-height: 1.5;
  img.tltImg{
    width: 60%;
    max-width: 250px;
  }
  .flexBox{
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    .btn{
      width: 23%;
      box-sizing: border-box;
      border-radius: 50px;
      border: 1px solid rgba(255,255,255,0.5);
      text-decoration: none;
      font-size: 16px;
      line-height: 2.5;
      font-weight: 600;
      background-color: rgba(245,182,65,0.8);
      color: #ffffff;
      transition: 0.2s;
      &:hover{
        background-color: rgba(245,182,65,1);
        transform: translate(5px, 5px);
        color: #000000;
      }
    }
  }
  .page-enter-active, .page-leave-active{
    transition: 0.3s;
  }
  .page-enter, .page-leave-to{
    opacity: 0;
  }
  .homeImg{
    width: 40px;
  }
  h1{
      color: #faf7be;
      margin-bottom: 0;
  }
  h3{
      color: #ffffff;
      font-weight: normal;
      font-size: 18px;
      letter-spacing: 0.08em;
  }
  h4{
      color: rgba(255,255,255,0.5);
      font-weight: normal;
      font-size: 15px;
      letter-spacing: 0.08em;
      margin-top: 0;
  }
}

@media screen and (max-width: 540px) {
  #app{
    .flexBox{
      flex-wrap: wrap;
      .btn{
        width: 46%;
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
  }
}

</style>
