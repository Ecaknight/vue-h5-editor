<template>
  <div class="hello">
    <p>测试less是否生效</p>
    <el-button type="primary">按钮</el-button>
    <el-button type="text">文字按钮</el-button>
  </div>
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
  padding-left: 10px;
}
</style>
