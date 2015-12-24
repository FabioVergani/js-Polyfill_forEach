//noprotect
function each(m,f,t){
 var c=f, o=m, e=Object(o), l=e.length>>>0;
 e=l>0;
 if(e===true){
	e=typeof(c)==='function';
	if(e===true){
		for(var f=c, m=o, e=t, j=l,i=0;i<j;i++){f.call(e,m[i],i,m);};
	}else{
	 throw new TypeError('each callback is not a function');
	};
 };
 return e;
}

/*
var processed=forEach([1,2,3],alert);
false|true
*/

var  Array=window.Array,
$AP=Array.prototype;


if(!$AP.forEachz){$AP.forEachz=function(f,t){each(this,f,t);};};



function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}
[2, 5, , 9].forEachz(logArrayElements);

each([2, 5, , 9],logArrayElements);
