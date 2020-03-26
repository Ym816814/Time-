// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    b_times:"06:00",
    s_times:"08:00",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /* 点击组件确认开始时间*/
  bind_b_TimeChange: function (t) {
    this.setData({
      b_times: t.detail.value
    })
  },

  /* 点击组件确认结束时间*/
   bind_s_TimeChange: function (t) {
    this.setData({
      s_times: t.detail.value
    })
  } 
})