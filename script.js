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
	if (this.health <= 0) {
		try {
			throw new Error('Здоровье ниже нуля! Его нельзя изменить!');
		} catch (e) {
			console.log(e.name + ': ' + e.message);
		}
	} else return this.health = newHealth;
}

Person.prototype.isAlive = function() {
	return this.health > 0;
}

function Human(name) {
	Person.apply(this, arguments);
	this.health = Math.floor((Math.random() * 31) + 10);
}

Human.prototype = Object.create(Person.prototype);
Human.prototype.constructor = Human;

Human.prototype.getName = function() {
	return Person.prototype.getName.apply(this, arguments) + " - Human";
}

function Zombie(name) {
	Person.apply(this, arguments);
	this.health = Math.floor((Math.random() * 101) + 100);
}

Zombie.prototype = Object.create(Person.prototype);
Zombie.prototype.constructor = Zombie;

Zombie.prototype.getName = function() {
	return Person.prototype.getName.apply(this, arguments) + " - Zombie";
}
