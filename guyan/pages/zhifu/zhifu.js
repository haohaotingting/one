// pages/zhifu/zhifu.js
var util = require('../../utils/util.js');
var util1 = require('../../utils/hao.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day:'',
    hh:'',
    kk:'',
    num: 1,
    shou: 0,
    shengming:'',
    duoshaoqian1:50,
    qianqian:50,
    jiajian1: 50,
    haoma:''
  },

  bindDate:function(event){
    console.log(event);
    console.log(this.data.hh);
    // console.log(this.data.day);
    // hh < day ? 45 : 50
    var duoshaoqian = this.data.hh < event.detail.value ? 45 : 50;
    console.log(duoshaoqian);
    // this.setData({
    //   duoshaoqian1: duoshaoqian,
    // })
    var hh=event.detail.value;
    this.setData({
      day:hh,
      duoshaoqian1: duoshaoqian,
      qianqian: duoshaoqian
    })

    var jiajian = this.data.num * this.data.qianqian;
    console.log(jiajian);
    this.setData({
      duoshaoqian1: jiajian
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var Day = util.formatTime(new Date());  //formatTime - 时间戳格式转换以及计算
    var ss = util1.formatTime(new Date());
    
    // console.log(ss);
    this.setData({
      day:Day,
      hh:Day,
      kk:ss,
      num: 1
    })

    
  },

  /*点击减号*/
  bindMinus: function () {
    
    var num = this.data.num;
    if (num > 1) {
      num--;
    }else{
      wx.showToast({
        title: '选择不了小于1的数量',
        icon: 'none',
        duration: 2000
      })
    }
    this.setData({
      num: num
    })
    console.log(this.data.num);
    var jiajian = this.data.num * this.data.qianqian;
    console.log(jiajian);
    this.setData({
      duoshaoqian1: jiajian
    })
  },

  /*点击加号*/
  bindPlus: function () {
   
    var num = this.data.num;
    num++;
    this.setData({
      num: num
    })
    var jiajian = this.data.num * this.data.qianqian;
    console.log(jiajian);
    console.log(this.data.num);
    this.setData({
      duoshaoqian1: jiajian
    })
  },
  /*输入框事件*/
  bindManual: function (e) {
    var num = e.detail.value;
    console.log(typeof num);
    console.log()
    if (num === '0') {
      wx.showToast({
        title: '选择不了小于1的数量',
        icon: 'none',
        duration: 2000
      })
      this.setData({
        num: 1
      })
    }else{
      this.setData({
        num: num
      })
    }
    
    var jiajian = this.data.num * this.data.qianqian;
    console.log(jiajian);
    console.log(this.data.num);
    this.setData({
      duoshaoqian1: jiajian
    })
    
  },

  bindManual1:function(e){
    console.log('ok');
    var num = e.detail.value;
    console.log(e);
  
    if (num=="") {
      wx.showToast({
        title: '选择不了小于1的数量',
        icon: 'none',
        duration: 2000
      })
      this.setData({
        num: 1
      })
    } else {
      this.setData({
        num: num
      })
    }
    
    var jiajian = this.data.num * this.data.qianqian;
    console.log(jiajian);
    console.log(this.data.num);
    this.setData({
      duoshaoqian1: jiajian
    })
  },


  // 验证电话号码规则
  shouji: function (event) {
    console.log(event);
    
      this.setData({
        shou: event.detail.value,
      })
    
  },

  // 填写联系人
  lianxiwo:function(event){
    var lianxi = event.detail.value;
    this.setData({
      shengming: lianxi,
    })
  },


  // 提交订单
  dingdan:function(){
    // console.log("ok");
    var jiji = this.data.shou;
    var len = jiji.length;
    
    var ss = this.data.shengming;
    var php = ss.length;
    console.log(php);
     if(php=== 0) {
        wx.showToast({
          title: '请填写真实姓名',
          icon: 'none',
          duration: 2000
        })
      } else if(len === undefined) {
      wx.showToast({
        title: '请输入手机号码',
        icon: 'none',
        duration: 2000
      })
    } else if (len != 11 || jiji.charAt(0) != 1) {
      wx.showToast({
        title: '请输入正确的手机号码',
        icon: 'none',
        duration: 2000
      })
    }else{
       wx.showToast({
         title: '暂时还未开通支付功能',
         icon: 'none',
         duration: 2000
       })
    } 
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
    wx.getStorage({
      key: 'key',
      success: (res) => {
        console.log(res.data);
        this.setData({
          haoma: res.data
        })
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