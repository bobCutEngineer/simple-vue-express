<template>
  <div class="login-menu">
    <div class="input-box">
      <form v-on:submit.prevent="login">
        <ul class="login-input-list">
          <li>
            <input type="text" v-model="username" placeholder="USERNAME" />
          </li>
          <li>
            <input type="password" v-model="password" placeholder="PASSWORD" />
          </li>
          <li>
            <button type="submit">login</button>
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios
        .post('/api/login', {
          username: this.username,
          password: this.password
        })
        .then(function (message) {
          if (message.data === 'isExist') {
            alert('isExist')
          }
          if (message.data === 'success') {
            window.location.href = '/'
          }
        })
    }
  }
}
</script>

<style>
.login-menu {
  position: absolute;
  right: 150px;
  top: 200px;
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.08);
}
.login-menu .input-box {
  height: 400px;
  margin: 50px 25px 50px 25px;
  width: 350px;
  display: flex;
  justify-content: center;
}
.login-input-list input {
  font-size: 20px;
  width: 300px;
  height: 50px;
  border-radius: 5px;
  padding-left: 40px;
  margin-top: 20px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.08);
}
.login-input-list button {
  font-size: 20px;
  width: 345px;
  height: 50px;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.08);
}
.login-input-list button:hover {
  cursor: pointer;
}
</style>
