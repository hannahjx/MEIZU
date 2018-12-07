function sendAjax(url,obj){
	const xhr=new XMLHttpRequest();
	const _default={
		method:'GET',
		data:null,
	}
	if(obj){
		for(var i in _default){
			if(i in obj){
				_default[i]=obj[i];
			}
		}
	}
	_default.method=_default.method.toUpperCase();
	if(_default.method=='GET'){
		var flag=url.indexOf('?')==-1? "?":"&";
		url+=flag;
		for(var j in _default.data){
			var aa=`${j}=${_default.data[j]}`;
			url+=aa+"&";
		}
		url=url+'_='+Date.now();
		_default.data=null;
	}else if(_default.method=='POST'){
		_default.data=JSON.stringify(_default.data);
	}else{
		return;
	}
	xhr.open(_default.method,url,true);
	xhr.send(_default.data);
	return new Promise((resolve,reject) => {
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
				let data=xhr.responseText;
				resolve(data);
				}else{
					let data=xhr.response;
					reject(data);
				}
			}
		}
	})
}
