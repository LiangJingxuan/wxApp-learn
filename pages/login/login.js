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
    this.setDate({ loginname: e.detail.value });

  },
  passwordInput(e){
    this.setDate({ loginpwd: e.detail.value });
    
  },
  signIn(){
    
  }
})