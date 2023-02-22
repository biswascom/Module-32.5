const mobilePhone = [
    {id: 01, name: 'iPhone', price: 80000},
    {id: 02, name: 'Nokia', price: 60000},
    {id: 03, name: 'Symphony', price: 8000},
    {id: 04, name: 'Walton', price: 5000},
    {id: 05, name: 'HTC', price: 76000},
];

// Both are correct below. The one is "Bracket Notation" and the other is "Dot Notation"
// const lowestPrice = mobilePhone.find(arr => arr['price'] === 5000);
const lowestPrice = mobilePhone.find(mobile => mobile.price === 5000);
const productName = lowestPrice.name;
console.log(productName, lowestPrice);

// forEach loop for array without return, that could be for any operation or console.log
mobilePhone.forEach(number => console.log(number));

// array map for looping the whole arrays and return a new brand new array of elements
const newArr = mobilePhone.map(x => x);
console.log(newArr);

// Filter looping in an array is filter the elements of matching condition
const newarrOfFilter = mobilePhone.filter(n => n.name.length % 2 === 0);
console.log(newarrOfFilter);
