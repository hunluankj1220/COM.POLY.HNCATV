Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'\n',
    //顶部标题
    title0: '优惠活动', title1: '电视回看', title2: '高清频道', title3: '标清频道', title4: '视频点播', title5: '快递专区',
    //
    type:'',
    products:[
      {
        title:'标清付费基本包',
        desc:'全国统一单频道,全',
        money:'￥ 4元/月',
        src:'',
        proid:'1',
      },
      {
        title: '标清付费基本包',
        desc: '',
        money: '￥ 4元/月',
        src: '',
        proid: '2',
      },
      {
        title: '标清付费基本包',
        desc: '全国统一单频道',
        money: '￥ 4元/月',
        src: '',
        proid: '3',
      },
      {
        title: '标清付费基本包',
        desc: '全国统一单频道',
        money: '￥ 4元/月',
        src: '',
        proid: '4',
      },
    ],
  },
  //进入详情
  detail:function(e){
    //商品id
    var id = e.currentTarget.id;
    console.log(id+"商品列表")
    wx.navigateTo({
      url: '../products/detail/detail?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.id
    console.log("名称：" + title)
    this.setData({
      id:options.id
    })
    if (title == this.data.title0){
      wx.setNavigationBarTitle({
        title: this.data.title0,
      })
    }else if(title==this.data.title1){
      wx.setNavigationBarTitle({
        title: this.data.title1,
      })
    }else if (title == this.data.title2) {
      wx.setNavigationBarTitle({
        title: this.data.title2,
      })
    }else if (title == this.data.title3) {
      wx.setNavigationBarTitle({
        title: this.data.title3,
      })
    }else if (title == this.data.title4) {
      wx.setNavigationBarTitle({
        title: this.data.title4,
      })
    }else if (title == this.data.title5) {
      wx.setNavigationBarTitle({
        title: this.data.title5,
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