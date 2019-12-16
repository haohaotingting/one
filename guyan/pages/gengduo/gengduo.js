// pages/gengduo/gengduo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: [
      "https://wjh.augushong.com/huaxiang/minsu1.png",  //民宿图片
      "https://wjh.augushong.com/huaxiang/minsu2.png",
      "https://wjh.augushong.com/huaxiang/jiudian1.png",
      "https://wjh.augushong.com/huaxiang/jiudian2.png",
      "https://wjh.augushong.com/huaxiang/nongjiale1.png",
      "https://wjh.augushong.com/huaxiang/nongjiale2.png"
    ]
  },


  handlerGobackClick:function(){
    wx.navigateBack({//关闭当前页面，返回上一页面或多级页面。
      delta: 1
    })
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