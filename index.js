new TypeIt('#type1',{
	speed : 120,
	loop: true,
	waitUntilVisible: true,

})
.type("Dsigner", { delay: 400})
.pause(500)
.delete(9)
.type("developer", { delay: 400})
.pause(500)
.delete(9)
.go();