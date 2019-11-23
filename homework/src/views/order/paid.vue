<template>
  <div class="paid">
    <div v-if="show">
      <div class="paid_bill" v-for="item in list" :key="item.id">
        <div class="paid_bill_amount">
          <p>付款金额</p>
          <a>￥{{ item.money }}</a>
          <p>{{ item.address }}</p>
        </div>

        <div class="paid_bill_date">
          <span class="paid_bill_date_left">{{ item.date }}</span>
          <span class="paid_bill_date_right">东道客财务部</span>
        </div>
      </div>
    </div>
    <div v-else>
      <img src="@/assets/none.png" alt="图片加载失败" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      list: [
        {
          id: 1,
          money: "132",
          address: "博纳酒店收银处",
          date: "2008.7.15"
        },
        {
          id: 2,
          money: "155",
          address: "博纳酒店收银处",
          date: "2008.7.20"
        },
        {
          id: 3,
          money: "172",
          address: "博纳酒店收银处",
          date: "2008.8.18"
        }
      ]
    };
  }
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
.paid {
  padding: 10px 15px;
  box-sizing: border-box;
  width: 100%;
}

.paid_bill {
  border: 1px solid #eee;
  background: #e6e9eb;
  padding: 5px 8px;
  margin-bottom: 5px;
}

.paid_bill_amount {
  text-align: center;
}

.paid_bill_amount > a {
  font-size: 40px;
}

.paid_bill_amount > p {
  font-size: 14px;
  font-family: cursive;
}

.paid_bill_date {
  line-height: 25px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 0 5px;
  border-top: 1px solid #b3b3b3;
}

.paid_bill_date_right {
  font-family: sans-serif;
}
</style>