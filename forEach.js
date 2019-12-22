//Polyfill:
//#[].forEach
(function(){
	var o=[];
	if('function' !== typeof o.forEach){
		o.constructor.prototype.forEach=function(callback,thisArg){
			if('function' !== typeof callback){
				throw new TypeError(callback+' is not a function!')
			}else{
				if('undefined' !== typeof thisArg){
					for(var e=thisArg,f=callback,i=0,m=this;i<m.length;++i){
						f.call(e,m[i],i,m)
					}
				}else{
					for(var f=callback,i=0,m=this;i<m.length;++i){
						f(m[i],i,m)
					}
				}
			}
		}
	}
})();

/*
//#A

	[1,2,3].forEach(function(v,i,m){
		console.log(v,i,m)
	});

	//1,0,[1, 2, 3]
	//2,1,[1, 2, 3]
	//3,2,[1, 2, 3]


//#B
	[1,2,3].forEach2(function(v,i,m){
		this[i]=v;
		console.log(v,i,m,this)
	},{});

	//1,0,[1, 2, 3],{0:1}
	//2,1,[1, 2, 3],{0:1,1:2}
	//3,2,[1, 2, 3],{0:1,1:2,2:3}

*/
