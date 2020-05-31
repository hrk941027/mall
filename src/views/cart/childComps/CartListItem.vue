<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton :isChecked="itemInfo.checked" @click.native="checkedChange"></CheckButton>
    </div>

    <div class="rightt">
      <div class="shopInfo">
        <div class="shop-logo">
          <img :src="itemInfo.logo" alt />
        </div>
        <div class="shopname">
          <p>{{itemInfo.name}}</p>
        </div>
      </div>

      <div class="goodsInfo">
        <div class="item-img">
          <img :src="itemInfo.image" alt="商品图片" />
        </div>

        <div class="item-info">
          <div class="item-title">{{itemInfo.title}}</div>
          <div class="item-desc">商品描述: {{itemInfo.desc}}</div>
          <div class="info-bottom">
            <div class="item-price">¥{{itemInfo.price}}</div>
            <div class="item-count product-num">
              <a class="num-add num-do left" @click="add">+</a>
              <span>{{itemInfo.count}}</span>
              <a class="num-add num-do right" @click="sub">-</a>
            </div>
            <div class="dele" @click="remove">删除</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";

export default {
  name: "CartListItem",
  props: {
    itemInfo: Object
  },
  components: {
    CheckButton
  },
  methods: {
    checkedChange() {
      return (this.itemInfo.checked = !this.itemInfo.checked);
    },
    add(){
      this.$emit('add')
    },
    sub(){
       this.$emit('sub')
    },
    remove(){
       this.$emit('remove')
    }
  }
};
</script>

<style scoped>
#shop-item {
  display: flex;
  width: 100%;
  font-size: 0;
  padding: 5px;
  background: #fff;
  margin: 10px 0;
  border-radius: 20px;
  overflow: hidden;
}
.shopInfo {
  display: flex;
}
.shopInfo .shop-logo img {
  width: 30px;
  height: 30px;
}
.rightt {
  overflow: hidden;
}
.goodsInfo {
  display: flex;
}
.shopInfo {
  display: flex;
  margin-bottom: 10px;
}
.shopname {
  font-size: 16px;
  line-height: 30px;
  color: #333;
  margin-left: 10px;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
  /*border: 1px solid #ccc;*/
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  /* position: absolute; */
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .dele {
  position: absolute;
  color: #333;
  font-size: 14px;
  right: 30px;
  bottom: 10px;
}
.info-bottom .item-price {
  color: orangered;
}

.product-num {
  border: 1px solid #e3e3e3;
  display: inline-block;
  text-align: center;
  line-height: 28px;
}
.product-num .num-do {
  width: 24px;
  height: 28px;
  display: block;
  background: #f7f7f7;
}
.product-num span {
  width: 42px;
  height: 28px;
  line-height: 28px;
  border: none;
  text-align: center;
}
</style>
