//index.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    isAdd: '',
    pId:'',
    skuId:''
  },
  houduanButton1: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/getSflDetail',
      method: 'GET',
      data:{
        pId:that.data.pId,
        skuId:that.data.skuId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)//打印到控制台
        var isAdd = res.data.isAdd;
        if (isAdd == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            isAdd: isAdd
          })
        }
      }
    })
  },
  //获取输入框的内容
  pId_input: function (e) {
    this.setData({
      pId: e.detail.value
    })
  },
  //获取输入框的内容
  skuId_input: function (e) {
    this.setData({
      skuId: e.detail.value
    })
  },
  //获取输入框的内容
  word_input: function (e) {
    this.setData({
      word: e.detail.value
    })
  },
  // houduanButton2的网络请求
  houduanButton2: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/getWord',
      data: {
        word: that.data.word
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)//打印到控制台
        var message = res.data.message;
        if (message == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            message: message
          })
        }
      }
    })
  }
})
