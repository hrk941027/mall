import axios from 'axios'

export function request(config){
	//1创建实例
	const instance = axios.create({
		baseURL: 'http://152.136.185.210:8000/api/n3',
		timeout: 5000,
		// headers: {'X-Custom-Header': 'foobar'}
	});
	//拦截器
	instance.interceptors.request.use(config => {  //请求拦截
		// console.log(config);
		//1，比如cofig中的一些信息不符合服务器要求
		//2比如某些网络请求时，都希望在界面中显示一个请求的图标
		//3比如网络请求，必须携带特殊信息
		return config
	},err => {
		// console.log(err);
		
	});
	instance.interceptors.response.use(res =>{  //拦截响应请求
		// console.log(res);
		return res.data
	},err=>{
		// console.log(err);
	});


	//3发送真正请求
	return instance(config)  //本身返回一个promise
}


// Promise方法

// export function request(config){
// 	return new Promise((resolve,reject) =>{
// 		//1创建实例
// 		const instance = axios.create({
// 			baseURL: 'http://152.136.185.210:8000/api/n3',
// 			timeout: 5000,
// 			// headers: {'X-Custom-Header': 'foobar'}
// 		});
// 		//发送真正的网络请求
// 		instance(config)
// 		.then(res =>{
// 			resolve(res)
// 		})
// 		.catch(err =>{
// 			reject(err)
// 		})
// 	})
// }


// export function instance1(config,success,failure){
// 	//1创建实例
// 	const instance = axios.create({
// 	  baseURL: 'http://152.136.185.210:8000/api/n3',
// 	  timeout: 5000,
// 	  // headers: {'X-Custom-Header': 'foobar'}
// 	});
// 	//发送真正的网络请求
// 	instance(config)
// 	.then(res =>{
// 		// console.log(res);
// 		success(res)
// 	})
// 	.catch(err =>{
// 		// console.log(err);
// 		failure(err)
// 	})
// }


// export function instance1(config){
// 	//1创建实例
// 	const instance = axios.create({
// 	  baseURL: 'http://152.136.185.210:8000/api/n3',
// 	  timeout: 5000,
// 	  // headers: {'X-Custom-Header': 'foobar'}
// 	});
// 	//发送真正的网络请求
// 	instance(config.baseConfig)
// 	.then(res =>{
// 		// console.log(res);
// 		config.success(res)
// 	})
// 	.catch(err =>{
// 		// console.log(err);
// 		config.failure(err)
// 	})
// }



// 拦截器