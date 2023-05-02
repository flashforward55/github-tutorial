Додайте все необхідне кодування так, щоб об’єкт Dog успадковував від Animal, а конструктор Dog prototype був встановлений для Dog.Потім використайте метод bark() Dog щодо об'єкта, щоб beagle міг водночас eat() й bark(). Метод bark() треба вводити Woof! на консоль.
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Змініть код лише під цим рядком

// Змініть код лише над цим рядком

let beagle = new Dog();