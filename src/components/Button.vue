<script>
export default {
  props: {
    type: {
      type: String,
      default: "normal"
    },
    text: {
      type: String,
      default: "normal"
    }
  },
  render(le) {
    return le("button", {
      //v-bind:class
      class: {
        btn: true,
        "btn-normal": !this.type,
        "btn-success": this.type === "success",
        "btn-danger": this.type === "danger",
        "btn-warning": this.type === "warning"
      },
      //dom属性
      domProps: {
        innerText: this.text
      },
      on: {
        click: this.handleClick
      }
    });
  },
  methods: {
    handleClick() {
      this.$emit("myEvent");
    }
  }
};
</script>

<style scoped>
.btn {
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
}
.btn-success {
  background: green;
}
.btn-danger {
  background: red;
}
.btn-warning {
  background: orange;
}
.btn-normal {
  background: grey;
}
</style>