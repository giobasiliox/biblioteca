// class User{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce(){
//         return `Olá, meu nome é ${this.name} e tenho ${this.age} anos.`;
//     }
//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }
// }

// const user1= new User ('Giovana', 16);
// console.log(user1.introduce());
// const user2= new User ('Felipe', 31);
// console.log(user2.introduce());
// console.log(user2.getName())

// class Pizza {
//     constructor(base, sauce, toppings, cheese) {
//         this.base = base;
//         this.sauce = sauce;
//         this.toppings = toppings;
//         this.cheese = cheese;
//     }
//     getDesc() {
//         return `Uma deliciosa pizza ${this.base}, com molho de ${this.sauce}, com cobertura de ${this.toppings} e com o queijo do tipo: ${this.cheese}`
//     }
//     getMesg(){
//         return `O valor total da sua pizza é ${this.getTotalPricePizza()}`
//     }

//     getPriceBase() {
//         if (this.base.toLowerCase() == 'traditional') {
//             return 5;
//         } else if (this.base.toLowerCase() == 'integral') {
//             return 7;
//         } else {
//             return `Não trabalhamos com essa base: ${this.base}`;
//         }

//     }
//     getPriceSauce() {
//         if (this.sauce.toLowerCase() == 'tomato') {
//             return 3;
//         } else if (this.sauce.toLowerCase() == 'pezzo') {
//             return 6;
//         } else {
//             return `Não trabalhamos com essa base: ${this.sauce}`;
//         }
//     }
//     getPriceTopping() {
//         if (this.toppings.toLowerCase() == 'pepperoni') {
//             return 10;
//         } else if (this.toppings.toLowerCase() == 'chicken') {
//             return 9;
//         } else {
//             return `Não trabalhamos com essa base: ${this.toppings}`;
//         }
//     }
//     getPriceCheese() {
//         if (this.cheese == 'cheedar') {
//             return 20;
//         } else if (this.cheese == 'mozzarella') {
//             return 7;
//         } else {
//             return `Não trabalhamos com essa base: ${this.cheese}`;
//         }
//     }
//     getTotalPricePizza() {
//         return this.getPriceBase() + this.getPriceSauce() + this.getPriceCheese() + this.getPriceTopping();
//     }

// }

// const pizza1 = new Pizza('traditional', 'tomato', 'pepperoni', 'cheedar');
// console.log(pizza1.getDesc());
// console.log(pizza1.getTotalPricePizza());
// console.log(pizza1.getMesg());

// const pizza2 = new Pizza('integral', 'pezzo', 'chicken', 'mozzarella');
// console.log(pizza2.getDesc());
// console.log(pizza2.getMesg());

// class Calculator{
//     add(a,b){
//         return a+b;
//     }
//     multiply(a,b){
//         return a*b;
//     }
//     divide(a,b){
//         return a/b;
//     }

// }
// const calculator= new Calculator();
// console.log(calculator.add(2,3));

// const multiply= calculator.multiply(2,3);
// console.log(multiply);

// class Wicth {
//     constructor(name, patron, house, wand) {
//         this.name = name
//         this.patron = patron
//         this.house = house
//         this.wand = wand
//         this.spellLearned = []
//     }

//     getFullDescription() {
//         return `O nome do(a) bruxo(a) é: ${this.name}, o patrono é ${this.patron}, a sua casa é ${this.house} e a varinha é do tipo ${this.wand}.`
//     }

//     getName() {
//         return `O nome do(a) bruxo(a) é: ${this.name}`
//     }
//     getPatron() {
//         return `O patrono do(a) bruxo(a) é: ${this.patron}`
//     }
//     getHouse() {
//         return `O casa do(a) bruxo(a) é: ${this.house}`
//     }
//     getWand() {
//         return `O varinha do(a) bruxo(a) é: ${this.wand}`
//     }
//     learneaSpells(spell){
//         this.spellLearned.push(spell);
//         console.log(`O(a) bruxo(a) ${this.name}, aprendeu o fetiço ${spell}`);
//     }
// }

// const Wicth1 = new Wicth('Hermione Granger', 'Otter', 'Gryffindor', 'Vine wood and dragon heartstring');

// console.log(Wicth1);
// console.log(Wicth1.getName());

// Wicth1.learneaSpells("Accio");
// Wicth1.learneaSpells("Aguamenti");
// Wicth1.learneaSpells("Aparatação");
// Wicth1.learneaSpells("AcAqua Eructocio");


// class TypeWitch extends Wicth{
//     constructor (name, patron, house, wand,typeWitch){
//         super(name, patron, house, wand );
//         this.typeWitch= typeWitch.toUpperCase();
//     }
//     getTypeWitch(){
//         if(this.typeWitch == 'M'){
//             return `O tipo de bruxo(a) é: ${this.typeWitch} - Meio Sangue`;
//         } else if(this.typeWitch == 'P'){
//             return  `O tipo de bruxo(a) é: ${this.typeWitch} - Puro`;
//         } else{
//             return `Não é um bruxo(a)`
//         }
//     }
// }

// class ChamberOfSecret{
//     constructor(name, pwd){
//         this.name = name;
//         let _pwd= pwd;
//         //metodo privado
//         this.checkPwd=(pwdInput) =>{
//             if(_pwd == pwdInput){
//                 return true;
//             }else{
//                 return false;
//             }
//         }

//     }
//     //metodo publico

//     acessChamber(pwdInput){
//         if(this.checkPwd(pwdInput) ){
//             return `Bem Vindo(a) ${this.name} a camara secreta!`;
//         }else{
//             return `Senha incorreta!`;
//         }
//     }

//     showName(){
//      return this.name;
//     }
// }

// const user1 = new ChamberOfSecret ('Harry Potter', '1234');
// console.log(user1.acessChamber('1234'));

// const Wicth1 = new TypeWitch('Hermione Granger', 'Otter', 'Gryffindor', 'Vine wood and dragon heartstring','m');
// console.log(Wicth1)
// console.log(Wicth1.getTypeWitch());


class Book{
 constructor(title,autor,pages){
    this.title= title;
    this.autor= autor;
    this.pages= pages;
 }
}
class User{
    constructor (name,age){
        this.name= name
        this.age= age
        this.booksBorroewd= []
    }

getBookBorrowed(book){
    this.booksBorroewd.push(book);
}
}


class Library{
    constructor(){
        this.books= [];
        this.users=[];
    }

addBook(book){
    this.book.push(book);
}
addBook(user){
    this.users.push(user);
}

}

const book1= new Book ('Harry POtter', 'J.K Rowling', 300.)
const user1= new User ('Giovana')

const library= new Library();
library.addBook(book1);
library.addBook(user1)

user1.getBookBorrowed(book1);
console.log(book1);
console.log(user1);
