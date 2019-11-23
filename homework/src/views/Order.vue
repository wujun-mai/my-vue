<template>
  <div class="order">
    <ordertitle></ordertitle>
    <div class="content">
      <router-view></router-view>
    </div>

    <tabbar></tabbar>
  </div>
</template>

<script>
import ordertitle from "@/components/orderTitle.vue";
import tabbar from "@/components/tabbar.vue";

export default {
  components: {
    ordertitle,
    tabbar
  },
  data() {
    return {
      show: true
    };
  }
};
</script>


<style  scoped>
.order {
  background: #eee;
}

#order_content {
  margin: 3px 6px;
}
.content {
  height: calc(100vh - 128px);
  overflow: auto;
  background: #fff;
}
</style>
