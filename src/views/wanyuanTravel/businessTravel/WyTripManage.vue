<template>
  <div class="wyTripManageContainer">
    <header class="header-box">
      <i class="iconfont iconfanhui1 iconReturn" @click="returnPrev"></i>
      <div class="headerTitle">行程管理</div>
    </header>
    <div class="content">
      <div class="basic">
        <div class="basicItem">
          <div class="label">出行时间</div>
          <div class="txt">
            <DatePicker @on-selectDate="onSelectDate"></DatePicker>
          </div>
        </div>
        <div class="basicItem">
          <div class="label">出差原因</div>
          <div class="txt">
            <mu-text-field v-model="tripForm.reason" :solo="solo" placeholder="必填"></mu-text-field>
          </div>
        </div>
        <div class="basicItem">
          <div class="label">目的地</div>
          <div class="txt">
            <mu-text-field v-model="tripForm.destination" :solo="solo" placeholder="必填"></mu-text-field>
          </div>
        </div>
      </div>
      <div class="basic">
        <div class="basicItem">
          <div class="label">事项单号</div>
          <div class="txt">
            <mu-text-field v-model="tripForm.sheetNumber" :solo="solo" placeholder="请填写出差事项单号"></mu-text-field>
          </div>
        </div>
      </div>
      <div class="basic">
        <div class="basicItem">
          <div class="label">出差人</div>
          <div class="txt">李白 200**********000</div>
        </div>
        <div class="basicItem">
          <div class="add">
            <i class="iconfont iconjiahao"></i>&nbsp;&nbsp;
            <span>添加同行人</span>
          </div>
        </div>
      </div>
      <div class="ticket">
        <div class="ticketItem">
          <div class="label">飞机票</div>
          <i class="iconfont iconjiahao"></i>
        </div>
      </div>
      <div class="ticket">
        <div class="ticketItem">
          <div class="label">火车票</div>
          <i class="iconfont iconjiahao"></i>
        </div>
      </div>
      <div class="ticket">
        <div class="ticketItem">
          <div class="label">酒店</div>
          <i class="iconfont iconjiahao"></i>
        </div>
      </div>
      <div class="approvalRules">
        <div class="approvalRulesItem" @click="openBotttomSheet">
          <div class="label">审批规则</div>
          <div class="list-text">
            <span class="txt">请选择</span>&nbsp;&nbsp;
            <!-- <i class="iconfont icongantanhao"></i> -->
          </div>
          <i class="iconfont iconjinru list-skip"></i>
        </div>
      </div>
      <div class="approvalRules">
        <div class="approvalRulesItem">
          <div class="label">预算费用</div>
          <div class="list-text">
            <mu-text-field v-model="tripForm.budget" :solo="solo" placeholder="请填写预算金额"></mu-text-field>
          </div>
          <div class="yuan">元</div>
        </div>
      </div>
      <div class="basic">
        <div class="basicItem">
          <div class="label">备注</div>
          <div class="txt">
            <mu-text-field v-model="tripForm.remarks" :solo="solo" placeholder="请填写备注"></mu-text-field>
          </div>
        </div>
      </div>
      <div class="submitBtn">提交</div>
    </div>
    <!-- 审批规则底部弹出 -->
    <mu-bottom-sheet :open.sync="open">
      <mu-list @item-click="closeBottomSheet">
        <mu-sub-header>
          审批流程：
          <span @click="closeBottomSheet">
            <i class="iconfont iconchahao"></i>
          </span>
        </mu-sub-header>
        <mu-list-item button>
          <mu-list-item-action>
            <mu-icon value="grade" color="orange"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Star</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-action>
            <mu-icon value="inbox" color="blue"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Inbox</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-action>
            <mu-icon value="chat" color="green"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Chat</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-action>
            <mu-icon value="email" color="cyan"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Email</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-bottom-sheet>
  </div>
</template>
<script>
import DatePicker from "../../../components/picker/DatePicker";
export default {
  name: "wyTripManage",
  components: {
    DatePicker
  },
  data() {
    return {
      solo: true,
      open: false,
      tripForm: {
        tripDate: "",
        reason: "",
        destination: "",
        sheetNumber: "",
        budget: "",
        remarks: ""
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    returnPrev() {
      this.$router.go(-1);
    },
    onSelectDate(val) {
      this.tripForm.tripDate = val;
    },
    closeBottomSheet() {
      this.open = false;
    },
    openBotttomSheet() {
      this.open = true;
    }
  }
};
</script>
<style lang="less">
@import "../../../assets/iconfont/iconfont.css";
@import "../../../assets/common/common.css";
.wyTripManageContainer {
  width: 100%;
  background: #f8f8f8;
  .content {
    width: 100%;
    margin-top: 112px;
    padding: 20px 0;
    ::-webkit-input-placeholder {
      color: #c7c7c7;
      font-size: 32px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
    }
    .mu-input {
      width: 100%;
    }
    .basic {
      width: calc(100% - 40px);
      height: auto;
      margin: 0 auto 10px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      .basicItem {
        width: calc(100% - 60px);
        height: 120px;
        border-bottom: 1px solid #ebebeb;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .label {
          width: 200px;
          color: #999999;
          font-size: 32px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
        }
        .txt {
          flex: 1;
          color: #333333;
          font-size: 32px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
        }
        .add {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #68b6ff;
          font-size: 32px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          i.iconjiahao {
            font-size: 40px;
          }
        }
      }
      .basicItem:last-child {
        border-bottom: none;
      }
    }
    .ticket {
      width: calc(100% - 40px);
      height: auto;
      margin: 0 auto 10px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      .ticketItem {
        width: calc(100% - 60px);
        height: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .label {
          width: 200px;
          color: #999999;
          font-size: 32px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
        }
        i.iconjiahao {
          display: flex;
          justify-content: right;
          align-items: center;
          font-size: 40px;
          color: #68b6ff;
          font-family: PingFangSC-Medium;
          font-weight: 500;
        }
      }
    }
    .approvalRules {
      width: calc(100% - 40px);
      height: auto;
      margin: 0 auto 10px;
      background: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      .approvalRulesItem {
        width: calc(100% - 60px);
        height: 120px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .label {
          width: 200px;
          color: #999999;
          font-size: 32px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
        }
        .list-text {
          flex: 1;
          color: #c7c7c7;
          font-size: 32px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          i.icongantanhao {
            font-size: 40px;
            color: #ff6d6d;
            font-family: PingFangSC-Medium;
            font-weight: 500;
          }
        }
        .list-skip {
          width: 40px;
          height: 100%;
          font-size: 32px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #d5d5d5;
          display: flex;
          justify-content: right;
          align-items: center;
        }
        .yuan {
          font-size: 32px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
    .submitBtn {
      width: calc(100% - 60px);
      height: 90px;
      line-height: 90px;
      text-align: center;
      margin: 20px auto;
      background: #68b6ff;
      border-radius: 12px;
      font-size: 32px;
      font-family: PingFangSC-Medium;
      font-weight: 500;
      color: #fff;
    }
  }
}
.mu-sub-header {
  margin-top: -8px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 14px;
  line-height: 48px;
  padding: 0 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .iconchahao{
    font-size: 34px;
  }
}
</style>


