function Surrogate() {};

Surrogate.prototype = SuperClass.prototype

Subclass.prototype = new Surrogate();
// new instance of the Surrogate class -> Surrogate's prototype = the Superclass' prototype

Subclass.prototype.constructor = Subclass;
// makes the constrctor its own class rather than the parent class' constructor

Function.prototype.inherits