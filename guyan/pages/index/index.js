//index.js
//获取应用实例
const App = getApp();

Page({
  data: {
    TopIndex: 0,
    img:[
      "https://wjh.augushong.com/huaxiang/0.png",  //背景图
    ],

    img1:[
      "https://wjh.augushong.com/guyan/1.jpg",  //轮播图
      "https://wjh.augushong.com/guyan/2.jpg",  
      "https://wjh.augushong.com/guyan/3.jpg",  

    ],
    yincang:false
  },
  
  sousuo:function(){
    wx.navigateTo({
      url: '../sou/sou',
 
      success: function (res) {
        console.log(res);
      }
    })
  },

  biaoji:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度。选择“gcj02”坐标更加精准。
      success(res) {
        wx.openLocation({
          name: "古堰画乡",
          address: "浙江省丽水市莲都区大港头镇古堰画乡",
          latitude: 28.29496,
          longitude:119.742946,
          scale: 15
        })
      }
    })
  },

  changstyle: function (e) {
    console.log(e);
    let index = e.currentTarget.dataset.index;
    this.setData({
      TopIndex: index
    })
  },

  yuding:function(){
    wx.navigateTo({
      url: '../zhifu/zhifu'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权
    wx.getSetting({
      success:(res)=>{
        // console.log(res);
        // console.log(res.authSetting);
        // console.log(res.authSetting['scope.userInfo']);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              // console.log(res.userInfo)
              // var userInfo = res.userInfo
              // var nickName = userInfo.nickName
              // var avatarUrl = userInfo.avatarUrl
              // var gender = userInfo.gender //性别 0：未知、1：男、2：女
              // var province = userInfo.province
              // var city = userInfo.city
              // var country = userInfo.country
              // console.log(country)
            }
          })
          
        }else{
          wx.navigateTo({
            url: '../xinxi/xinxi'
          })
        }
      }
    })
    
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
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 500
    })

    // 查看是否授权
    wx.getSetting({
      success: (res) => {
        // console.log(res);
        // console.log(res.authSetting);
        // console.log(res.authSetting['scope.userInfo']);
        if (res.authSetting['scope.userInfo']) {
          this.setData({
            yincang: true
          })
        }
      }
    })
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
