//noprotect
function each(m,f,t){
 var c=f, o=m, e=Object(o), l=e.length>>>0, i=l>0;
 if(i){
	i=typeof(c)==='function';
	if(i){
		e=t;
		i=0;
		while(i<l){
			c.call(e,o[i],i,o);i++;
		};
		i=true;
	}else{
		throw new TypeError('each callback is not a function');
	};
 };
 return i;
}
