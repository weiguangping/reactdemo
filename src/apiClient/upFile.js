import cookies from 'js-cookie';
import configs from '../config';
import axios from 'axios'
class Upfile{
  static upFile3(url,params,type){
    var name=type==='video'?'video.mp4':'image.png';
    var uri=params.path;
    var formData = new FormData();
    return new Promise(function (resolve, reject) {
            for (var key in params){
                formData.append(key, params[key]);
            }
            // for(var i = 0;i<params.imgpath.length;i++){
              let file = {uri: uri, type: 'multipart/form-data', name: name};   //这里的key(uri和type和name)不能改变,
              formData.append("upload",file);   //这里的files就是后台需要的key
            // }
            console.log(JSON.stringify(formData.get('upload')));
            console.log(formData.get('fileType'));
            console.log(formData.get('directoryName'));
            
            fetch(configs.apiBaseUrl+url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data;boundary=----WebKitFormBoundary6MpBYmnBP1WJ2h61',
                    "X-AUTH-TOKEN": cookies.get('token'),
                },
                body: formData,
            }).then((responseData)=> {
                    console.log(configs.apiBaseUrl+url);
                    console.log(cookies.get('token'));
                    console.log(formData);
                    console.log(responseData);
                    
                    resolve(responseData);
                    // alert('1'+JSON.stringify(responseData))
                })
                .catch((err)=> {
                    reject(err);
                    // alert('2'+err)
                    // alert(JSON.stringify(formData))
                });
      })
  }
  static upFile(url,params,type) {   // 上传照片
      var name=type==='video'?'video.mp4':'image.png';
      var newtype=type=='video'?'mp4':'png';
        var uri=params.path;
        var formData = new FormData();
      for (var key in params){
        formData.append(key, params[key]);
        }
        var file = {"uri": uri, "type": "multipart/form-data", "name": name};   //这里的key(uri和type和name)不能改变,
        formData.append("upload",uri);   //这里的files就是后台需要的key
        formData.append("type",newtype);   //这里的files就是后台需要的key
            // }
            console.log(typeof(formData.get('upload')));
      var config = {
        headers: {"X-AUTH-TOKEN": cookies.get('token')}
      }
     // 添加请求头
    return axios.post(configs.apiBaseUrl+url, formData, config)
        
    }
}
export default Upfile;