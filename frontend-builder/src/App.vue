<template>
<div id="app">
  <siteHeader></siteHeader>
  <div class = "body">
    <loginMenu></loginMenu>
  </div>
</div>
</template>

<script>
import siteHeader from './components/header'
import loginMenu from './components/loginMenu'

export default {
  name: 'App',
  components: {
    'siteHeader': siteHeader,
    'loginMenu': loginMenu
  }
}
</script>

<style>
body{
    margin: 0;
}
a{
    text-decoration: none;
    color: inherit;
}
li{
    list-style: none;
}
input{
    border: none;
}
button{
    border:none;
}
ul{
    padding:0;
}
</style>
