//logs.js
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权
    // wx.getSetting({
    //   success(res) {
    //     console.log(res);
    //     console.log(res.authSetting);
    //     console.log(res.authSetting['scope.userInfo']);
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success: function (res) {
    //           console.log(res.userInfo)
    //         }
    //       })
    //     } else {
    //       wx.navigateTo({
    //         url: '../xinxi/xinxi'
    //       })
    //     }
    //   }
    // })
  },
  changstyle: function (e) {
    // console.log(e);
    let index = e.currentTarget.dataset.index;   
    this.setData({
      TopIndex: index      
    })
  },

  nongjiale2:function(){
    // 查看是否授权
    wx.getSetting({
      success(res) {
        // console.log(res);
        // console.log(res.authSetting);
        // console.log(res.authSetting['scope.userInfo']);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.navigateTo({
            url: "../nongjiale2/nongjiale2",
            success: function (res) {
              // console.log(res);
            }
          })
        }else{
          wx.navigateTo({
            url: "../xinxi/xinxi",
            success: function (res) {
              // console.log(res);
            }
          })
        }
      }
    })
  },


  chakan:function(){
    wx.navigateTo({
      url: "../gengduo/gengduo",
      success: function (res) {
        // console.log(res);
      }
    })
  }
})