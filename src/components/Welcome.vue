<template>
  <div>
    <h1>欢迎使用！本网站仍在开发中...</h1>
    <div>
      <button @click="totodo">开始使用</button>
    </div>
    <button @click="toinput">输入名字</button>
  </div>
</template>



<script>
export default {
  methods: {
    totodo: function() {
      this.$router.push({
        path: "/todolist"
      });
    },
    toinput: function() {
      this.$router.push({
        path: "/input"
      });
    }
  }
};
</script>