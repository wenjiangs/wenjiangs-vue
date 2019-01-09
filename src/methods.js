import qs from 'qs';
import config from './config';

const methods = {

  // 自定义路由函数
  toRouter(op, type=1, go=1){
    if(go==0){
      this.$router.go(op);
    }else{
      if(type){
        this.$router.push(op);
      }else{
        this.$router.replace(op);
      }
    }
  },

  // 封装 post 方法
  axiosPost(obj, commandName, input, cb){
    var data = qs.stringify({
      model: commandName,
      action: JSON.stringify(input)
    });
    //obj.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    obj.$http.post(config.APIURL, data).then((res) => {
      cb(res.data);
    })
  },

  // 更新用户信息
  get_user(obj, cb){
    var userInfo = localStorage.getItem('userInfo');
    if(this.isEmpty(userInfo)) {
      cb({success: false})
    }else{
      userInfo = JSON.parse(userInfo);
    }
    this.axiosPost(obj, 'MemberService.Get', {
      MemberID: userInfo.ID,
    }, (res)=>{
      if(res.success){
        localStorage.setItem('userInfo', JSON.stringify(res.data));
      }
      cb(res);
    })
  },

  isEmpty(str) {
    if (str == "" || str == null || str == undefined || JSON.stringify(str) == '[]' || JSON.stringify(str) == '{}') {
      return true;
    }else{
      return false;
    }
  },

  logout(){
    localStorage.removeItem('MemberID');
    this.$router.push('login');
  },

  getConfig(obj, cb){
    this.axiosPost(obj, 'SettingService.Get', {}, (res)=>{
      cb(res);
    })
  },
  callPhone(Phone){
    window.location.href = 'tel://' + Phone;
  },
  removeEmptyArrayEle(arr){
    var temArr = [];
    for(var i = 0; i < arr.length; i++) {
      if(!this.isEmpty(arr[i])) {
        temArr.push(arr[i])
      }
    }
    return temArr;
  },
  getUserInfo(obj, cb){
    obj.axiosPost(obj, 'MemberService.Get', {MemberID: this.MemberID}, (res)=>{
      if(res.success){
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        cb(res);
      }
    })
  },
  in_array(search, array){
    for(var i in array){
      if(array[i] == search){
        return true;
      }
    }
    return false;
  },

  deepCopy(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
      for(var key in obj){
        if(obj.hasOwnProperty(key)){
          //判断ojb子元素是否为对象，如果是，递归复制
          if(obj[key]&&typeof obj[key] ==="object"){
            objClone[key] = this.deepCopy(obj[key]);
          }else{
            //如果不是，简单复制
            objClone[key] = obj[key];
          }
        }
      }
    }
    return objClone;
  }
}

export default methods;
