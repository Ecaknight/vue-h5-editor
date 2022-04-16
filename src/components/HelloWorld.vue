<template>
  <div class="hello">测试less是否生效</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style lang="less" scoped>
.hello {
  width: 100%;
  height: 700px;
  background: #fcc;
}
</style>
