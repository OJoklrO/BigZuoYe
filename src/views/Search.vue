
<template>
  <div class="banner">
    <div class="header">
      <!-- 标题 -->
      <!-- <div class="query_title">成绩录入</div> -->
      <!-- 搜索 -->
      <form-line-cha></form-line-cha>
    </div>

    <!-- 表格 -->
    <table-cha></table-cha>
  </div>
</template>

<script>
import FormLineCha from "@/components/FormLineCha";
import TableCha from "@/components/TableCha";
export default {
components: {
    FormLineCha,
    TableCha
  }
};
</script>

<style lang="scss" scoped>

</style>
