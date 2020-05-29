<template>
  <div id="list">
    <div class="order-list">
      <div class="item">
        <span class="icon">
          <img src="~assets/img/profile/xx.png" alt />
        </span>
        <div class="info">我的消息</div>
      </div>

      <div class="item">
        <span class="icon">
          <img src="~assets/img/profile/jf.png" alt />
        </span>
        <div class="info">积分商城</div>
      </div>
      <div class="item">
        <span class="icon">
          <img src="~assets/img/profile/hyk.png" alt />
        </span>
        <div class="info">会员卡</div>
      </div>
    </div>

    <div class="service-list">
      <div class="item">
        <span class="icon">
          <img src="~assets/img/profile/gwc.png" alt />
        </span>
        <div class="info">我的购物车</div>
      </div>
      <div class="item">
        <span class="icon">
          <img src="~assets/img/profile/gw.png" alt />
        </span>
        <div class="info">下载购物App</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView"
};
</script>

<style scoped>
.order-list,
.service-list {
  margin-top: 12px;
  background-color: #fff;
}

#list {
  font-size: 15px;
  color: #333;
}

#list .item {
  height: 44px;
  line-height: 44px;
  position: relative;
}

.icon img {
  width: 15px;
  height: 15px;
}

.item .icon {
  margin-top: 10px;
  position: absolute;
  left: 16px;
  top: -7px;
}

.item .info {
  margin-left: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding-left: 5px;
}

.item:last-of-type .info {
  border-bottom: none;
}
</style>
