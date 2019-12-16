// pages/nongjiale2/nongjiale2.js
const app = getApp();  //开发者可以通过 getApp 方法获取到全局唯一的 App 示例，获取App上的数据或调用开发者注册在 App 上的函数。
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: [
      "https://wjh.augushong.com/huaxiang/nongjiale2a.png",  //民宿图片
      "https://wjh.augushong.com/huaxiang/nongjiale2b.png",
      "https://wjh.augushong.com/huaxiang/nongjiale2c.png"
    ],
    current: 0,

    // pinglun:'',
    xinming:'',
    shishi:'',
    pingjia1:[],
    long:[],
    shuru:''
   
  },

  swiperChange: function (event) {
    // console.log(event);
   
      this.setData({
        current: event.detail.current
      })
    
  },

  weizhi:function(){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度。选择“gcj02”坐标更加精准。
      success(res) {
        wx.openLocation({
          name: "诗画利山农家乐",
          address: "浙江省丽水市莲都区大港头镇利山村27号",
          latitude: 28.279287,
          longitude: 119.787099,
          scale: 10
        })
      }
    })
  },

  dianhua:function(){
    wx.makePhoneCall({
      phoneNumber: '13575398059', //仅为示例，并非真实的电话号码
      success(res) {
        console.log(res);
      }
    })
  },

  pingjia:function(event){
    console.log(event);
    var day2 = new Date();
    console.log(day2);
    var s2 = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate() + ":" + 
      day2.getHours() + ":" + day2.getMinutes() + ":" + day2.getSeconds();
    console.log(s2);
    console.log(event.detail.value['username']);
    var ping = event.detail.value['username'];
    
    var kk = this.data.xinming;
    // var ss = this.data.shishi;
    var pingjia11 = this.data.pingjia1;
    var zuhe={
      kk,s2,ping
    }
    pingjia11.unshift(zuhe);
    console.log(pingjia11);
    console.log(this.data.pingjia1);
    ping=""
    console.log(ping);
    this.setData({
      pingjia1: pingjia11,
      shuru:ping
    })
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.pingjia1);
    
    wx.getUserInfo({
      success:(res)=> {
        console.log(res.userInfo)
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        console.log(nickName)
        this.setData({
          xinming: nickName
        })
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
    this.current;
    
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
    if (this.data.pingjia1.length==0){
      wx.showToast({
        title: '暂无评论已下拉到底',
        icon: 'none',
        duration: 2000
      })
    }else{
      wx.showToast({
        title: '评论信息已下拉到底',
        icon: 'none',
        duration: 2000
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log(res)
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res)
    }
    return {
      title: '看你长的这么好看一定经常去酒店，这里分享给你绝佳的好住处',
      path: 'pages/nongjiale2/nongjiale2',
      imageUrl:'https://wjh.augushong.com/huaxiang/nongjiale2b.png'
    }
  }
})