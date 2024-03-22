<template>
    <div class="Result">
        <p>反馈的结果</p>
        <p>{{ queryData }}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      queryData: ''
    };
  },
  created() {
    // 在组件创建时，获取查询参数中的数据并存储在queryData中
    console.log(this.$route.query.data);
    this.queryData = this.$route.query.data;
  }
};
</script>