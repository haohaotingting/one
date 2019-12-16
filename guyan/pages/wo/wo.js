// pages/wo/wo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    touxiang:null,
    xinming:'',
    img:[
      'https://wjh.augushong.com/huaxiang/daohanglan.png'
    ]
  },

  denglu:function(){
    // 查看是否授权
    wx.getSetting({
      success: (res) => {
        // console.log(res);
        // console.log(res.authSetting);
        // console.log(res.authSetting['scope.userInfo']);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              console.log(res.userInfo)
              // var userInfo = res.userInfo;
              // var nickName = userInfo.nickName;
              // var avatarUrl = userInfo.avatarUrl;
              // var gender = userInfo.gender //性别 0：未知、1：男、2：女
              // var province = userInfo.province
              // var city = userInfo.city
              // var country = userInfo.country
              // console.log(country)

            }
          })

        } else {
          wx.navigateTo({
            url: '../xinxi/xinxi'
          })
        }
      }
    })
  },

  dingdan1:function(){
    wx.showToast({
      title: '暂时还未开通支付功能！',
      icon: 'none',
      duration: 2000
    })
  },

  dingdan2:function(){

    // 查看是否授权
    wx.getSetting({
      success: (res) => {
        // console.log(res);
        // console.log(res.authSetting);
        // console.log(res.authSetting['scope.userInfo']);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              console.log(res.userInfo)
              // var userInfo = res.userInfo;
              // var nickName = userInfo.nickName;
              // var avatarUrl = userInfo.avatarUrl;
              // var gender = userInfo.gender //性别 0：未知、1：男、2：女
              // var province = userInfo.province
              // var city = userInfo.city
              // var country = userInfo.country
              // console.log(country)
              wx.navigateTo({
                url: '../ziliao/ziliao',

                success: function (res) {
                  // console.log(res);
                }
              })

            }
          })

        } else {
          wx.navigateTo({
            url: '../xinxi/xinxi'
          })
        }
      }
    })

  },


  dingdan3:function(){
    wx.makePhoneCall({
      phoneNumber: '13575398059', //仅为示例，并非真实的电话号码
      success(res) {
        console.log(res);
      }
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
    wx.getSetting({
      success: (res) => {
        // console.log(res);
        // console.log(res.authSetting);
        // console.log(res.authSetting['scope.userInfo']);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: (res) => {
              // console.log(res.userInfo)
              var userInfo = res.userInfo;
              var nickName = userInfo.nickName;
              var avatarUrl = userInfo.avatarUrl;
              // var gender = userInfo.gender //性别 0：未知、1：男、2：女
              // var province = userInfo.province
              // var city = userInfo.city
              // var country = userInfo.country
              // console.log(country)
              this.setData({
                touxiang: avatarUrl,
                xinming: nickName
              })
            }
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