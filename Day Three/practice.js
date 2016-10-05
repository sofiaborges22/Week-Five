function sayHello(){
	console.log('in da function style');
	console.log(this);
}

var Animal = function(){
	console.log('in da constructor style');
	console.log(this);
	this.type = type;
	this.name = name;
}

Animal.prototype.start = function() {
	console.log('in da method style');
	console.log(this);
}

Animal.prototype.saySomething = function() {
	console.log(this.name + ' says something');
	console.log('I am a ' + this.type)
}
var animal = new Animal();
animal.start();

var cat = new Animal('cat', 'Markov');
car.saySomething
<!--Markov says something -->
<!-- I am a cat -->