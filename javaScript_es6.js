// f6s.com/cordachallengeindia

// https://www.corda.net/eventbrite-event/corda-bootcamp-webinar-april-9-2020

// http://slack.corda.net

// 1
var number = 50;

number/20;
number/50;

'your number is: ' + number;

var greetings = {abc: "jhdkljd:l"}
greetings

//2 
ECMAScript(ES6) is 2016 standard of javaScript and javaScript is an implementation

//3
//Array Helper Methods
//forEach, map, filter, find, every, some, reduce

///4 (forEach Array Helper)
var colors = [ 'red', 'blue', 'green' ];

//classic for loop
for(var i=0; i<colors.length; i++){
  console.log(colors[i])
}

// forEach Array Helper
colors.forEach(function(color){
  console.log(color)
});

//5(forEach Array Helper Continued...)
// First approach with iterator function inside forEach Array Helper
// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
var sum = 0;

//Loop over the array, incrementing the sum variable
numbers.forEach(function(number){
  sum += number;
});

// print the sum variable
sum

// Second approach with iterator function outside forEach Array Helper
// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
var sum = 0;

function adder(number){
  sum += number;
}
//Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// print the sum variable
sum

// 6. Why use forEach Array Helper
emails.forEach(function(email){
  deleteEmail(email);
});

//When you want to call particular method multiple times, consider passing using forEach Helper 


//Coding Exercise - 1
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    posts.forEach(function(post){
        savePost(post);
    });
}

// Coding Exercise - 2
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

// var array = [ 
//  { color: 'red' },
//  { color: 'blue' }, 
//  { color: 'yellow' }
// ];

// array.forEach(function(arr){

// });

var areas = [];
var area;

images.forEach(function(image){
      area = image.height * image.width;
      areaList(area);
});

function areaList(area){
    areas.push(area)
}



// 7 - map Array Helper
// map array helper - most vital used array helper around
var numbers = [1, 2, 3];
var doubledNumbers = [];

// Classical for loop
for(var i=0; i<numbers.length; i++){
  doubledNumbers.push(numbers[i]*2);
}

// map array helper
//Important: Always place a return keyword inside a map helper
var doubled = numbers.map(function(number){
  return number*2;
});

doubled
doubledNumbers

// 8 - map array helper continued...

var cars = [
  {model: 'Buick', price: 'Cheap'},
  {model: 'Camaro', price: 'expensive'}
];

var prices = cars.map(function(car){
  return car.price;
});

prices


// Coding Exercise - 3 (Plucking Values)
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image){
    return image.height;
});

heights;

// Coding Exercise - 4 (Calculating values with map array helper)k
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds;
speeds = trips.map(function(trip){
    return calculateSpeed(trip.distance, trip.time);
});

var speed;
function calculateSpeed(distance, time){
    speed = distance/time;
    return speed;
}

speeds;



var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

function pluck(array, property) {
   return array.map( obj => {
        return obj[ property ]
    })
}

// Coding Exercise - 5 (Implementing Pluck)

// TIPS
// function(arr){ } is equivalent to arr => { }

//Remember that you can access a property on an object by using square bracket notation
// eg. var person = { name: 'Bill' };
// person['name'] //returns 'Bill'

var array = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, color) {
    return array.map(arr => { 
        return (arr['color']);
    });
}
colors

// 10 - Selecting Needed Data with Filter
var products = [
  {name: "cucumber", type: "vegetable"},
  {name: "banana", type: "fruit"},
  {name: "celery", type: "vegetable"},
  {name: "orange", type: "fruit"}
];

var filteredProducts = [];

for(var i=0; i<products.length; i++){
  if(products[i].type === "fruit"){
    filteredProducts.push(products[i]);
  }
}

filteredProducts

// Don't forget return statement
// don't write unnecessary if statements
products.filter(function(product){
  return product.type === 'vegetable';
});

// 11 - More on filtering
products.filter(function(product){
	return product.type === 'vegetable' 
  && product.quantity > 0
  && product.price < 10
});

// 12 - Choose when to filter
var post = {id: 4, title: 'New Post'};
var comments = [
  {postId: 4, content: 'awesome post'},
  {postId: 3, content: 'it was ok'},
  {postId: 4, content: 'neat'}
];

function commentsForPost(post, comments){
	return comments.filter(function(comment){
    return comment.postId == post.id;
  });
}

commentsForPost(post, comments);

// Coding Exercise - 6 - Filetring Values
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = [];

filteredNumbers = numbers.filter(function(number){
   return number > 50
});

// Coding Exercise - 7 - Handling permissions with filters
var users = [
  { id: 1, admin: true },  
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true },
 ];
 
 var filteredUsers;
 
 filteredUsers = users.filter(function(user){
     return user.admin === true;
 })

 // Coding Exercise - 8 - Implementing Reject
 // Both return statements are correct
 function reject(array, iteratorFunction) {
  return array.filter(function(arr){
      return arr > 15 === true ? false : true;
    //   return !(arr > 15);
  })
}

// 13 - Querying for Records with Find
// Returns or find only the first element
var users = [
  {name: 'Jill', id: 4},
  {name: 'Alex'},
  {name: 'Bill'},
  {name: 'Jill'}
];

users.find(function(user){
  return user.name === 'Jill';
});

// 14 - Find Continued
// 15 - Using Find to search for Users

function Car(model){
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car){
  return car.model === 'Focus'
});


var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

var comments = { postId: 1, content: 'Great Post' }

function postForComment(posts, comment){
  return posts.find(function(post){
    return post.id === comment.postId
  });
}

postForComment(posts, comments)



// Coding Exercise 9: Finding Admin Users
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user){
    return user.admin === true;
});  

// Coding Exercise 10: What's your Balance?
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account){
    return account.balance === 12;
});

// Coding Exercise 11: Really Challenging: Custom findWhere Helper
function findWhere(array, criteria) {
  return array.find(function(arr){
      return arr.height === criteria.height;
  });
}