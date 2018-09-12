// // OBJECT LITERAL
//
// // const book1 = {
// //   title: 'Harry Potter',
// //   author: 'JKRowling',
// //   year: 2000,
// //   getSummary: function(){
// //     return `${this.title} was written by ${this.author} in ${this.year}`
// //   }
// // }
// //
// // console.log(book1);
// // console.log(book1.getSummary());
//
// // OBJECT CONSTRUCTOR.... not an object...building block for object!
//
// // function book(title,author,year){
// //   this.title = title;
// //   this.author = author;
// //   this.year = year;
// //   this.getSummary = function(){
// //      return `${this.title} was written by ${this.author} in ${this.year}`
// //    }
// // }
//
// // object initiated
// // const book1 = new book('Winter is Coming','George RR MArtin', 2020);
// // const book2 = new book('Winter is Here','George RR Martin', 2019);
// //
// // console.log(Object.values(book1));
// // console.log(book2);
//
//
// // PROTOTYPES
// function book(title,author,year){
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }
//
// function Author(Name, Nationality, DoB){
//   this.name = name;
//   this.Nationality = Nationality;
//   this.DoB = DoB;
// }
//
// //TURNING getSummary INTO A PROTOTYPE SO IT CAN BE ACCESSED ANYWHERE else
// book.prototype.getSummary = function(){
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// }
//
// Object.prototype.logSomething = function(){
//   return 'Something';
// }
//
// Array.prototype.description = function(){
//   console.log('This is an array');
//   return ('This is an array');
// }
//
// const array1 = [1,2,3,4,5];
// const array2 = ['1','2','3','4','5','6'];
// array1.description();
// array2.description();
//
// const book1 = new book('Worlds End', 'Rohl Dahl', 2000);
// const author1 = new Author('Terry Silver', 'Cold', 1990);
//
// console.log(book1.getSummary());
// console.log(author1.logSomething());


// CLASSES
class Car{
  constructor(make,model,year,colour){
    this.make = make;
    this.model = model;
    this.year = year;
    this.colour = colour;
  }
  
  getSummary(){
    return `this ${this.colour} ${this.make} ${this.model} was made in ${this.year}.`;
  }
}

const car1 = new Car('Bentley','Continental GT', 2010,'Green');
console.log(car1);
console.log(car1.getSummary());
