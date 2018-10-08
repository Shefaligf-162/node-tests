var add =(a,b) => a+b ;
var square =(x,callback)=>{
	setTimeout(()=>{
		callback(x*x);
	},1000);
};
var setName =(user,fullname)=>{
var name=fullname.split(' ');
user.firstname=name[0];
user.lastname=name[1];
return user;
};
var asyncAdd=(a,b,callback)=>{
setTimeout(()=>{
	callback(a+b);
},1000);
}
module.exports={
	add,
	square,
	setName,
	asyncAdd
}
