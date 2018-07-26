import apiRequest from './apiRequest';

export async function get(url) {
 
  const opt = {
    method: 'get',
    url: url,
  };

  const response = await apiRequest(opt);
  return new Promise(function (resolve, reject) {
    console.log('response');
    
    console.log(response);
    
    if(response.data.ok){
      resolve(response.data.data);
    }else{
      reject(response.data.message);
    }
  })
}
export async function post(url,data) {
 
  const opt = {
    method: 'post',
    url: url,
    data
  };

  const response = await apiRequest(opt);
  return new Promise(function (resolve, reject) {
    if(response.data.ok){
      resolve(response.data.data);
    }else{
      reject(response.data.message);
    }
  })
}
export async function put(url,data) {
 
  const opt = {
    method: 'put',
    url: url,
    data
  };

  const response = await apiRequest(opt);
  return new Promise(function (resolve, reject) {
    if(response.data.ok){
      resolve(response.data.data);
    }else{
      reject(response.data.message);
    }
  })
}