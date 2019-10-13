<template>
  <div class="hello">
    <Child1></Child1>
    <Child2></Child2>
    <Button :type="type" @myEvent="par"></Button>

    <div v-display-key="10">
      <button>权限1</button>
    </div>
    <!--   <div v-display-key="2">
      <button>权限2</button>
    </div>
    <div v-display-key="3">
      <button>权限3</button>
    </div>-->
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "HelloWorld",
  component: {
    Button
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      value: 3,
      type: "danger",
      text: "成功"
    };
  },
  methods: {
    par() {
      console.log("点击了按钮");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
