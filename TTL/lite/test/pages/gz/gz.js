//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    products: ''
  },
  // houduanButton2的网络请求
  onShow: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/gzList',
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
