//云数据库的初始化
const DB =wx.cloud.database().collection("message")
let text =""
let b_times=""
let s_times=""
let cate=""
Page({
/* 用户输入想要发布的文本内容 */
input(event){
  text = event.detail.value;
  if(text.length){}
  else{
    wx.showToast({
      title: '不能为空！',
      icon: 'false',
      duration: 2000
    })
  }
},


  /* 点击组件确认开始时间*/
  bind_b_TimeChange: function (event) {
    this.setData({
      b_times: event.detail.value,
    })
  },
  bind_b_TimeChange(event){
    b_times=event.detail.value
  },

  /* 点击组件确认结束时间*/
  bind_s_TimeChange: function (event) {
    this.setData({
      s_times: event.detail.value,
    })
  },
  bind_s_TimeChange(event) {
    s_times = event.detail.value
  },
   
 /* 点击单选框按钮的实现 */
  radiochange: function (e) {
    console.log("发生点击事件-----------------", e.detail.value)

  },

  radiochange(event){
    cate=event.detail.value

  },


//发布内容到数据库

   addpush:function(option){
    wx.switchTab({
      url: '../../pages/message/message'
    })
     DB.add({
       data: {
         text: text,
         b_times: b_times,
         s_times: s_times,
         cate: cate
       },
       success(res) {
         console.log("bingo!", res)
       },
       fail(res) {
         console.log("fail!", res)
       }
     })
     
  }, 

  /**
   * 页面的初始数据
   */
  data:{
    cate:[
      { num: "0", value: '运动', checked: false },
      { num: "1", value: "兼职", checked: false },
      { num: "2", value: "学习", checked: false },
      { num: "3", value: "拼车", checked: false }
    ]
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

  }
})