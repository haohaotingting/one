//小程序内置的App()全局函数的作用注册小程序
//app.js
App({
  
  globalData: {
    long: null
  },
  onLaunch: function () {
  
   
    // wx.getUserInfo({
    //   success: res=> {
    //     // console.log(res);
    
    //     this.globalData.long = res.userInfo.nickName
    //     this.globalData
        
    //     console.log(this.globalData);
    //   }
    // })
    // this.globalData
  }
})
