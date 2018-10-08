const utils=require('./utils');
const expect=require('expect');
it('should add two numbers',()=>{
	var res=utils.add(5,4);
    expect(res).toBeA('number').toBe(9);
});
it('Do squaring of a number',(a)=>{
	utils.square(5,(square)=>{
	expect(square).toBe(25).toBeA('number');	
	a();
	});
	
});
it('verify first and last name is set',()=>{
	var user={};
	var name=utils.setName(user,'Shefali Udia')
	expect(name).toInclude({
		firstname:'Shefali',
		lastname: 'Udia'
	});
})
it('Ásync function calling',(d)=>{
utils.asyncAdd(5,4,(sum)=>{
	expect(sum).toBe(9).toBeA('number');
	d();
});
});