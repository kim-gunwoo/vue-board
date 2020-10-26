<template>
  <nav>
    <div>
      <ul>
        <li>
          <h2>
            <router-link to="/"> {{ msg }}/ > Home</router-link>
          </h2>
        </li>
        <li><router-link to="/board">Borad</router-link></li>
        <li><router-link to="/">sample router link</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      msg: "Navbar"
    };
  }
};
</script>
<style scoped>
a {
  display: block;
  height: 30px;
  line-height: 30px;
  text-decoration: none;
}
a:hover,
a:focus {
  color: chartreuse;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 30px;
}
a {
  color: #42b983;
}
</style>
