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
	return this.health;
}

Person.prototype.changeHealth = function(newHealth) {
	this.health = newHealth;
}

Person.prototype.isAlive = function(health) {
	if (this.health <= 0) {
		return false;
	} else return true;
}

function Human(name) {
	Person.apply(this, arguments);
	this.health = Math.floor((Math.random() * 31) + 10);
}

Human.prototype = Object.create(Person.prototype);
Human.prototype.constructor = Human;

Human.prototype.getName = function() {
	Person.prototype.getName.apply(this, arguments);
	return this.name = this.name + " - Human";
}

function Zombie(name) {
	Person.apply(this, arguments);
	this.health = Math.floor((Math.random() * 101) + 100);
}

Zombie.prototype = Object.create(Person.prototype);
Zombie.prototype.constructor = Zombie;

Zombie.prototype.getName = function() {
	Person.prototype.getName.apply(this, arguments);
	return this.name = this.name + " - Zombie";
}

var man1 = new Human('Игорь');
var man2 = new Human('Борис');
var man3 = new Human('Игнатий');

var zomb1 = new Zombie('Uarhg');
var zomb2 = new Zombie('Uiigh');
var zomb3 = new Zombie('Argh');
