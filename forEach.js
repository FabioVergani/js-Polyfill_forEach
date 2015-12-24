//noprotect

var  Array=window.Array,
$AP=Array.prototype;

$AP.forEach=$AP.forEach||function(f,t){
 var o=this, e=Object(o), i=e.length, l=i>>>0, c=f;
 if(i>0){
	if(typeof(c)==='function'){e=t;i=0;while(i<l){c.call(e,o[i],i,o);i++;};}else{throw new TypeError('each callback is not a function');};
 };
};

