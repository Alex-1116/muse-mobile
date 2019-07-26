<template>
  <div class="datePickerContainer">
    <mu-date-input v-model="selectDate" :solo="solo" container="dialog" label-float full-width></mu-date-input>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  name: "datePicker",
  components: {},
  data() {
    return {
      solo: true,
      selectDate: undefined
    };
  },
  watch: {
    //主要是通过$emit方法来实现传参的方式，第一个参数是自定义事件名称，第二个则是要传的数据
    selectDate: function() {
      this.$emit("on-selectDate", this.selectDate);
    }
  },
  computed: {},
  created() {},
  mounted() {
    $(".datePickerContainer .mu-text-field-input").attr("placeholder","请选择");
  },
  methods: {}
};
</script>
<style lang="less">
.datePickerContainer {
  width: 100%;
  ::-webkit-input-placeholder {
    color: #c7c7c7;
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
  }
}
</style>


