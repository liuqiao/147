//index.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    word: '',
    products: ''
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
      url: 'http://localhost:8080/searchWord',
      data: {
        word: that.data.word
      },
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)//打印到控制台
        var products = res.data;
        if (products == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            products: products
          })
        }
      }
    })
  }
})
