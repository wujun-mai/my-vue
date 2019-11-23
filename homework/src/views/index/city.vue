<template>
  <div>
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="B" />

      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="C" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="S" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
import { city } from "@/http/api";

export default {
  name: "city",
  data() {
    return {
      indexList: ["B", "C", "S", "X", "Y", "Z"],
      list: [
        {
          title: "重庆"
        }
      ]
    };
  },

  created() {
    this.btainCity();
  },

  methods: {
    btainCity() {
      city().then(res => {
        this.list = res.data;
        window.console.log(this.list);
      });
    },

    textSort(){
      this.text=this.list.title


    }

  }
};
</script>

<style>
</style>