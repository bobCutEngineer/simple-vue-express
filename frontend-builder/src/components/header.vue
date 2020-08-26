<template>
  <header>
    <nav>
      <div class = "nav-item-box">
        <div class = "nav-item">item</div>
      </div>
      <div class = "nav-item-box">
        <div class = "nav-item">item</div>
      </div>
      <div class = "nav-item-box">
        <a href="">
          <div class = "nav-item">login</div>
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {

    }
  }
}
</script>

<style>
nav{
    height: 50px;
    background-color: rgb(10, 0, 27);
}

nav .nav-item-box{
    width: 120px;
    height: 50px;
    float: right;
}
nav .nav-item{
    color:white;
    font-size: 14px;
    height: 30px;
    width: 100px;
    margin-top: 10px;
    border-radius: 5px;
    border:1px solid rgb(175, 167, 241);
    text-align: center;
    line-height: 25px;
}
</style>
