const App = getApp()
//引导页
Page({
     data: {
        indicatorDots: !1,
        autoplay: !1,
        current: 0,
        interval: 3000,
        duration: 1000,
        circular: !1,
    },
    
    onLoad() {},
    onShow() {},
    bindload(e) {
        setTimeout(App.WxService.getStorageSync('token') ? this.goIndex : this.goLogin, 3000)
    },
    goIndex() {
        App.WxService.switchTab('/pages/home/home')
    },
    goLogin() {
        App.WxService.redirectTo('/pages/login/login')
    },
    onLoad:function(options){
      wx.onNetworkStatusChange(function (res) {
        console.log("是否连接："+res.isConnected)
        console.log("网络类型：" +res.networkType)
      })
    },
    onReady:function(){
        
    },
    onShow:function(){
        
    },
    onHide:function(){
        
    },
    onUnload:function(){
        
    },
    onPullDownRefresh:function(){
        
    },
    onReachBottom:function(){
        
    }
})        