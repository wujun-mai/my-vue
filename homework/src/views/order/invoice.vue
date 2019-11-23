<template>
  <div id="invoice">
    <div id="invoice_title">
      <span>
        <img src="@/assets/personal/houtui.png" alt="图片加载失败" />
      </span>
      <div>我的消息</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "invoice"
};
</script>

<style>
#invoice_title {
  background: #3fe4c7;
  width: 100%;
  position: fixed;
  height: 40px;
}

#invoice_title > span {
  position: absolute;
  top: 10px;
  left: 8px;
}

#invoice_title > div {
  text-align: center;
  line-height: calc(100vh - 115px);
}
</style>