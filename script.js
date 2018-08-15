function Person(name, health) {
	this.name = name;
	this.health = health;
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

Person.prototype.isAlive = function() {
	if (this.health <= 0) {
		alert("is dead");
	}
}

function Human() {
	Person.apply(this, arguments);
}

Human.prototype = Object.create(Person.prototype);
Human.prototype.constructor = Human;

var man1 = new Human('Игорь', (Math.random()*40));
var man2 = new Human('Игорь', (Math.random()*40));
var man3 = new Human('Игорь', (Math.random()*40));

man1.changeHealth(-20);
man1.isAlive();
