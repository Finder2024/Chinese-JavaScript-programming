const { default: axios } = require("axios");
function 控制台打印(log) {
    console.log(log)
}
function 定义变量(name, value) {
    // 定义一个变量
    global[name] = value;
}
  function sendRequest(methods, urls, headerses,datas) {
    const method = methods; // 请求方法
    const url = urls // 请求URL
    const headers = headerses; // 请求头
    const data = datas; // 请求参数
    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data
    })
    .then(response => {
        return response.data; // 返回数据
    })
    .catch(error => {
        console.error(error); // 输出错误信息
        throw error; // 抛出错误
    });
}

async function 发起网络请求(methods, urls, headerses,datas) {
    try {
        const result = await sendRequest(methods, urls, headerses,datas);
        console.log(result); // 输出结果
        return result; // 返回结果
    } catch (error) {
        console.error(error);
        throw error; // 抛出错误
    }
}
function 如果(条件) {
    let result = { value: 条件 };
    result.否则 = function(条件2) { result.value = result.value || 条件2; return this; }
    result.最终 = function() {
      return result;
    };
    return result;
  }
  module.exports = {
    控制台打印,
    定义变量,
    发起网络请求,
    如果
   }
