// pages/ziliao/ziliao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    touxiang: '',
    xinming: '',
      img: [
        "https://wjh.augushong.com/huaxiang/geren.png",  //背景图
      ],
    haoma:''
  },

  handlerGobackClick: function () {
    wx.navigateBack({//关闭当前页面，返回上一页面或多级页面。
      delta: 1
    })
  },

  shoujihaoma:function(event){
    // console.log(event);
    var jiji=event.detail.value.username;
    var len = jiji.length;  
    // console.log(typeof jiji);
    if (len != 11 || jiji.charAt(0) != 1) {
      wx.showToast({
        title: '请输入正确的手机号码',
        icon: 'none',
        duration: 2000
      })
    }else{
      

      wx.showModal({
        title: '温馨提示',
        content: '是否重新更新',
        success:(res)=> {
          if (res.confirm) {
            
            wx.setStorage({
              key: "key",
              data: jiji
            })

            
            
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    wx.getStorage({
      key: 'key',
      success: (res) => {
        console.log(res.data);
        this.setData({
          haoma: res.data
        })
        console.log(this.data.haoma);
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