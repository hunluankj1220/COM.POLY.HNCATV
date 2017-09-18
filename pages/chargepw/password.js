Page({

  /**
   * 页面的初始数据
   */
  data: {
    //选中值
    radiovalue: '',
    array: ['主卡8512010264533087平江', '副卡8512010264533088望城', '副卡8512010264533089平江'],
    oldpw:'',
    newpw:'',
    index: 0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //旧密码
  cardInput: function (e) {
    this.setData({
      oldpw: e.detail.value
    })
  },
  //新密码
  cardPasswordInput: function (e) {
    console.log(e.detail.value)
    this.setData({
      newpw: e.detail.value
    })
  },
  showTopTips: function () {
    var that = this;
    wx.navigateBack({
      delta: 1
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