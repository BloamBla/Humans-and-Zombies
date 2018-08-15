function Person(name) {
	this.name = name;
}

Person.prototype.getName = function() {
	return this.name;
}

Person.prototype.setName = function(newName) {
	this.name = newName;
}

Person.prototype.getHealth = function() {
	return this.health = Math.floor(Math.random * 100 + 1);
}

Person.prototype.changeHealth = function(newHealth) {
	this.health = newHealth;
}

Person.prototype.isAlive = function() {
	if (this.health <= 0) {
		return false;
	} else true;
}

function Human(name, health) {
	Person.apply(this, arguments);
	this.health = Math.floor((health * 31) + 10);
}

Human.prototype = Object.create(Person.prototype);
Human.prototype.constructor = Human;

function Zombie(name, health) {
	Person.apply(this, arguments);
	this.health = Math.floor((health * 101) + 100);
}

Human.prototype.getName = function() {
	return this.name + " - Human";
}

Zombie.prototype = Object.create(Person.prototype);
Zombie.prototype.constructor = Zombie;

Zombie.prototype = Object.create(Person.prototype);
Zombie.prototype.constructor = Zombie;

Zombie.prototype.getName = function() {
	return this.name + " - Zombie";
}

var man1 = new Human('Игорь', Math.random());
var man2 = new Human('Борис', Math.random());
var man3 = new Human('Игнатий', Math.random());

var zomb1 = new Zombie('Uarhg', Math.random());
var zomb2 = new Zombie('Uiigh', Math.random());
var zomb3 = new Zombie('Argh', Math.random());
