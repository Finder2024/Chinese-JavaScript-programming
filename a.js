/*
 * @Author: lxl 118715366+lxl2021@users.noreply.github.com
 * @Date: 2023-05-11 21:28:50
 * @LastEditors: lxl 118715366+lxl2021@users.noreply.github.com
 * @LastEditTime: 2023-05-16 10:11:21
 * @FilePath: /undefined/Users/lvxuanlin/Documents/a.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { default: axios } = require("axios");
const e = require("express");

function 控制台打印(log) {
    console.log(log)
}
function 定义变量(name, value) {
    // 定义一个变量
    global[name] = value;
  }
  // 使用示例
  function 发起网络请求(methods, urls, headerses,datas){
    return sendRequest(methods, urls, headerses,datas).then(result => {
        console.log(result); // 打印返回结果
        datas = JSON.stringify(result);
        return datas
      }).catch(error => {
        console.error(error); // 输出错误信息
        return error
      });
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
发起网络请求('GET', 'https://v.api.aa1.cn/api/api-wenan-anwei/index.php?type=json').then(result => {
    控制台打印(result.anwei)
}).catch(error => {
    控制台打印(error);
});
定义变量('myVar',[0,0,0,1,0,1,0,1]);
console.log(myVar); // 输出 10
// console.log(发起网络请求('GET', 'https://v.api.aa1.cn/api/api-wenan-anwei/index.php?type=json'));
// 控制台打印("HHH")