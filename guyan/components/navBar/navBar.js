Component({  //自定义组件的构造器，是使用小程序中 Component 构造器生成的
  options: {   //定义一些组件选项
    multipleSlots: true,  // 在组件定义时的选项中启用多 slot 支持。
    //Component的slot（slot意思是插槽），主要是让你在外部的wxml可以自由的在你的Component的wxml里插入模块。默认情况下，一个组件的wxml只可能有一个slot。需要使用多个时，可以在组件js中声明启用。
    addGlobalClass: true   //使组件接受全局样式。
  },
  //组件的对外属性，属性设置中可包含三个字段,type 表示属性类型、 value 表示属性初始值、 observer 表示属性值被更改时的响应函数。
  properties: {
    background: {
      type: String,
      value: 'rgba(255, 255, 255, 1)'
    },
    // searchText: {
    //   type: String,
    //   value: '点我搜索'
    // },
    searchBar: {
      type: Boolean,
      value: false
    }
  },
  created: function () {  //组件生命周期函数-在组件实例刚刚被创建时执行，注意此时不能调用 setData )
    this.getSystemInfo();
  },
  // attached: function () {  //组件生命周期函数-在组件实例进入页面节点树时执行)
  //   this.setStyle(); //设置样式
  // },
  // data: {},
  pageLifetimes: {  //组件所在页面的生命周期
    show: function () {  //组件所在的页面被展示时执行
     
        // this.getSystemInfo();
        this.setStyle(); //设置样式1
      
    }
  },
  //组件的方法，包括事件响应函数和任意的自定义方法 
  methods: {
    setStyle: function(life) {

      //ES6语法写法
      const {
        statusBarHeight,
        navBarHeight,
        capsulePosition,
        navBarExtendHeight,
        ios,
        windowWidth
      } = getApp().globalSystemInfo;
      // console.log(getApp());
      // console.log(life);
      // console.log(this.data);
      let rightDistance = windowWidth - capsulePosition.right; //胶囊按钮右侧到屏幕右侧的边距
      let leftWidth = windowWidth - capsulePosition.left; //胶囊按钮左侧到屏幕右侧的边距

      let navigationbarinnerStyle = [
        `background: ${this.data.background}`,
        `height:${navBarHeight + navBarExtendHeight}px`,
        `padding-top:${statusBarHeight}px`,
        `padding-right:${leftWidth}px`,
        `padding-bottom:${navBarExtendHeight}px`
      ].join(';');   //join() 方法用于把数组中的所有元素转换一个字符串。
      // console.log(navigationbarinnerStyle);
      let navBarLeft = [];
     
   
        this.setData({
          navigationbarinnerStyle,
          navBarLeft,
          navBarHeight,
          capsulePosition,
          navBarExtendHeight,
          ios
        });
      
    },
    // 返回事件
  
    getSystemInfo() {
      var app = getApp();
      // console.log(app);
      if (app.globalSystemInfo && app.globalSystemInfo.ios) {
        return app.globalSystemInfo;
      } else {
        let systemInfo = wx.getSystemInfoSync();
        // console.log(systemInfo);
        let ios = !!(systemInfo.system.toLowerCase().search('ios') + 1);
        // console.log(ios);
        let rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
        wx.getMenuButtonBoundingClientRect();

        let navBarHeight = '';
        if (!systemInfo.statusBarHeight) {
          systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20;
          navBarHeight = (function() {
            let gap = rect.top - systemInfo.statusBarHeight;
            return 2 * gap + rect.height;
          })();

          systemInfo.statusBarHeight = 0;
          systemInfo.navBarExtendHeight = 0; //下方扩展4像素高度 防止下方边距太小
        } else {
          navBarHeight = (function() {
            let gap = rect.top - systemInfo.statusBarHeight;
            return systemInfo.statusBarHeight + 2 * gap + rect.height;
          })();
          if (ios) {
            systemInfo.navBarExtendHeight = 4; //下方扩展4像素高度 防止下方边距太小
          } else {
            systemInfo.navBarExtendHeight = 0;
          }
        }
        systemInfo.navBarHeight = navBarHeight; //导航栏高度不包括statusBarHeight
        systemInfo.capsulePosition = rect; //右上角胶囊按钮信息bottom: 58 height: 32 left: 317 right: 404 top: 26 width: 87 目前发现在大多机型都是固定值 为防止不一样所以会使用动态值来计算nav元素大小
        systemInfo.ios = ios; //是否ios

        app.globalSystemInfo = systemInfo; //将信息保存到全局变量中,后边再用就不用重新异步获取了

        // console.log('systemInfo', systemInfo);
        return systemInfo;
      }
    }
  }
});
