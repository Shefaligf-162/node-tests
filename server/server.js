const express =require('express');
var app =express();
app.get('/',(req,res)=>{
res.send('Hello Wjhhkorld');
});
app.listen(3000);
module.exports={
	app
}