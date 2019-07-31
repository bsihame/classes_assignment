// # Class Exercises
//--------------------
// (1 - 6 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)
//
// ## Question 1
//
// a. Write a class called `Person` that has 3 properties:
//           ----------------------
//a first name, a last name and a middle name.
//Create 2 instances of a `Person`.
//Print one of their first names.
//                   ------------

// b. Write a method in `Person` called `fullName` that will
//return a formatted string of an instance's full name.
//Call this method on both the instances you created in part a.
//
class Person {
  constructor(firstName, lastName, middleName){
         this.firstName = firstName;
         this.lastName = lastName;
         this.middleName = middleName;
  }

fullName () {
  return `${this.firstName} ${this.lastName}`;
}
}
let nephew = new Person ('Faysal', 'jehhar', 'Sherif');
let son = new Person ('Faris', 'jehharBazi', ' ');
let brother = new Person ('Mohamed', 'Bazi', ' ');
//console.log
console.log(`My son's first Name is : `, son.firstName);
console.log(`My son's name is : `, son.fullName());
console.log(`My nephew's name is : `, nephew.fullName());
console.log(`My brother's name is : `, brother.fullName());
//---------------------------------------------------------
// // ## Question 2
// //
// // a. Create a class called `Book` that has
// // properties `title`, `author` and `rating`.
// //Create some instances of `Book`.


class Book {
  constructor(title, author, rating) {
  this.title = title;
  this.author = author;
  this.rating = rating;
    }
    isGood () {
      return this.rating >= 7;
        }
      }

let book1 = new Book("The Silent Patient", "Alex Michaelides", 9.5);
let book2 = new Book("The Wicked King (The Folk of the Air, #2)", "Holly Black", 9);
let book3 = new Book("Ask Again, Yes", "Mary Beth Keane", 8);
let book4 = new Book("Dianetics: The Modern Science of Mental Health ", "L. Ron Hubbard", 5);


//----------------------------------------------------------
// // b. Add a method to `Book` called `isGood` that
//returns `true` if its rating is greater than or equal to 7


console.log(`${book1.title} is a good book : ${book1.isGood()}`);
console.log(`${book2.title} is a good book : ${book2.isGood()}`);
console.log(`${book3.title} is a good book : ${book3.isGood()}`);
console.log(`${book4.title} is a good book : ${book4.isGood()}`)

//============================================================
//# Question 3

// a. Create a `Dog` class with four properties:
//`name (string), breed (string),
// mood (string), and hungry (boolean)`.
//
// b. Add a method called `playFetch`.
// It should set the dog's `hungry` property
//to `true`, set its mood property to `playful`,
//and log "Ruff!"
//
// c. Add a method called `feed`. If the dog is hungry,
//it should set `hungry` to `false`
//and print "Woof!" If the dog is not hungry,
//it should log "The dog doesn't look hungry"
//
// d. Add a method called `toString` that returns
//a description of the dog:
//       console.log(`Question 3 (a)`)
class Dog{
  constructor (name, breed, mood, hungry) {
          this.name = name;
          this.breed = breed;
          this.mood = mood;
          this.hungry = hungry;
            }
      playFetch() {
          this.mood = "playful";
          this.hungry = true;
            console.log(this.name,`: Ruff!`);
           }

           feed () {
             if (this.hungry) {
               this.hungry = false;
               console.log(this.name, `: Woof!!`);
             } else {
               console.log(this.name, `: doesn't look hungry`);
             }
           }

           toString () {
             let feeding = " not hungry";
             if( this.hungry){
               feeding = "hungry";
           }
return(`${this.name} is a ${this.mood} and ${feeding} ${this.breed}`);
         }
       }
 let dog1 = new Dog('Molly', 'Bolognese', 'Cheeful', false);
 let dog2 = new Dog('Coco', 'Chug', 'Affectionate', true);
 let dog3 = new Dog('Max', 'Cockapoo', 'playful', false);
//a)
  console.log(dog1);
  console.log(dog2);
  console.log(dog3);
  //b)
  dog2.playFetch();
  dog3.playFetch();
  console.log(dog2);
  console.log(dog3);
  //c)
  dog1.feed();
  dog2.feed();
  console.log(dog1);
  console.log(dog2);
  //d)
  console.log(dog1.toString());
  console.log(dog2.toString());
  console.log(dog3.toString());

//-------------------------------------------------
// ## Question 4
//
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that
//has three properties: `celsius`, `fahrenheit`,
//and `kelvin`. Give them all values equal to the
//freezing point of water.
//
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  Kelvin: 273
};
//a)
 console.log(`The water's freezing temperature :`, freezingPoint, '\n');

// b. Make a class called `Celsius` that has one property:
// `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js
// let outsideTempt = new Celsius(10.0)
// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
class Celsius {
  constructor(celsius) {
    this.celsius = celsius;
  }

  getFahrenheitTemp() {
    return 1.8 * this.celsius + 32;
  }

  getKelvinTemp(){
    return 1.8 * this.celsius + 273;
  }
  isBelowFreezing(){
    return (this.celsius < freezingPoint.celsius)
  }
  }

let outsideTempt = new Celsius(10.0);
console.log(`Outside temperature : `, outsideTempt.celsius, `C`);
console.log(`Outside temperature :` , outsideTempt.getFahrenheitTemp(), `F`);
console.log(`Outside temperature :` , outsideTempt.getKelvinTemp(), `K`);

// c. Give `Celsius` a method called `isBelowFreezing`
//that returns a `Bool` (true if the temperature
//is below freezing).

let temp1 = new Celsius(0);
let temp2 = new Celsius(36);
let temp3 = new Celsius(-10);
 console.log(temp1.celsius, `C is bellow the freezing temperature :`, temp1.isBelowFreezing());
 console.log(temp2.celsius, `C is bellow the freezing temperature :`, temp2.isBelowFreezing());
 console.log(temp3.celsius, `C is bellow the freezing temperature :`, temp3.isBelowFreezing());


// ## Question 5
//
// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
//
// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.
//
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
//
//
// ## Question 6
//
// Write a constructor Vector that represents
//a vector in two-dimensional space.
// It takes two number arguments: `x` and `y`
//parameters, which it should be saved to
//properties of the same name.
//
// Give the Vector prototype two methods,
// `plus` and `minus`, that take another vector
//as an argument and
// returns a new vector that has the sum
//or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
//
// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)
//
// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```
class Vector{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
plus(v){
  let vec = new Vector;
  vect.x = this.x + v.x;
  vect.y = this.y + v.y
  return vect;
}
  minus(v){
    let vect = new Vector;
    vect.x = this.x - v.x
    vect.y = this.y - v.y;
    return vect;
  }
  getLength
}
}
//
// ## Question 7
//
// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
//
// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
//
// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?
//
// ## Question 8
//
// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console
//
// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.
//
// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
//
// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
