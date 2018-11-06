const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginname: '',
    loginpwd: ''
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  // 登录功能
  usernameInput(e){
   this.setData({ loginname: e.detail.value });

  },
  passwordInput(e){
    this.setData({ loginpwd: e.detail.value });
    
  },
  signIn(){
    app.globalData.login = { username: this.data.loginname, password: this.data.loginpwd}
    wx.switchTab({
      url: '../logs/logs',
    })
  }
})