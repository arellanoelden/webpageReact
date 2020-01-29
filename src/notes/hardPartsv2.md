# `Hard Parts v2`

Javascript goes through the code line by line, 'executes' each line - know as the `thread of execution`. Saves `data` like strings and arrays so we can use that data later -  in its memory.

```js
const num = 3;
function multiplyBy2(inputNumber) {
  const result = inputNumber*2;
  return result;
}
const output = multiplyBy2(num);
```

| Memory   | Description |
| ---      | ----------- |
| num      | 3           |
| multiply | function    |
| output   | 6           |

## `Execution context`:
Created to run the code of a functions - has 2 parts. Each function call will create a new execution context
- Thread of execution
- Memory

Keeps its own memory, variables declared in the functions are scoped to just the function, has its own local memory.
- Parameter: num 
- Argument: 3

Note: Once function is finished execution context is destroyed and all variables tied to it except for return value;

## `Call Stack`:

| Call Stack        |
| ---               | 
|                   | 
|                   | 
| multiplyBy2(num)  | 


Javascript keeps track of what function is currently running(where's the thread of execution)
- Run a function - add to call stack
- Finish runnning the function - JS removes it from the call stack
- Whatever is top of the call stack is the function that we are currently running.

* Note: Local memory is often also called variable environment

## `Higher Order Functions`
Generalized functions that cam call other functions and keep you from DRY(don't repeat yourself). Ex of multiplyBy2, divideBy2, addBy3, etc.
Takes in a function or passes out a functions

```js
function copyArrayAndManipulate(array, instructions) {
  const output = [];
  for(let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return output;
}
function multiplyBy2(input) { return input * 2; } // could instead be add, divide, subtract, etc.
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```

with the above `copyArrayAndManipulate` will simply call the passed in function and apply the modifier to each element for the output. `copyArrayAndManipulate` is our `higher-order` function while `multiplyBy2` is our `callback` function while 

Functions are first class objects, co-exist and are treated like Javascript objects.
1. Assigned to variables and properties of other objects
2. Passed as arguments into functions
3. Returned as values from functions

## `Arrow functions`:

We will explore another way of writing functions with the `arrow` function.

```js
// regular function declaration
function multiplyBy2(input) { return input * 2 };

// arrow function
const multipleBy2 = input => input*2;
```

Considered the same to Javascript. Braces(`{}`) and `return` statement are injected by Javascript itself. More legible(less to read) but does provide less information. Can pass function logic itself directly if wanted to switch to arrow function.
```js
const result = copyArrayAndManipulate([1, 2, 3], input => input*2);
```
Can be harder to follow with this method as doesn't have label and can be harder to read.

## `Closures`
Enables powerful pro-level functions like `once` and `memoize`. Can help keep a function alive and keep it's own execution context alive so that the function definitions can have an associated cache/persistent memory. It all starts with `returning a function from another function`.

```js
function createFunction() {
  function multiplyBy2(num) {
    return num * 2;
  }
  return multiplyBy2;
}
const generatedFunc = createFunction();
const result = generatedFunc(3);
```

Above `generatedFunc` calls `createFunctions` which will return the `multipleBy2` function and therefore keeps it's data alive. Since a function is called, `generatedFunc` itself is a function which we call with an argument of `3` and assign to `result` which will result in the value of `6` for `result`. Once `createFunction` is called `generatedFunc` is no longer associated with `createFunction` as once it has the returned value of `createFunction` then all that is kept is the return value of `multiplyBy2` and any data that it depends on such as outer variables. Javascript does not actually go back up visually when `generatedFunc(3)` is called but rather that function is stored in `generatedFunc` and it is called from there.
Any variables that the functions rely on are stored `[[scope]]` that will store the variables that it relied on as below. It cannot be accessed anywhere else except inside of the `incrementCounter` function, so it is essentially a `private` variable.  `backpack` has `[[scope]]` on it. The `[[scope]]`part can also be called `C.O.V.E`(closed over variable environment) or `P.L.S.R.D`(Persistent Lexical Scope Referenced Data) or simply `Closure`.

```js
function outer() {
  let counter = 0;
  function incrementCounter() { counter++};
  return incrementCounter
}
const myNewFunction = outer();
myNewFunction();
myNewFunction()
```

the variable `myNewFunction` will have the `[[scope]]` property that will have the `counter` value of 0. After `myNewFunction` is called twice then the `counter` value will be 2 and still live inside of `[[scope]]`. Each instance of that returned function with the `backpack` has its own set of `[[scope]]` variables that are tied to it on each invocation.

```js
function outer() {
  let counter = 0;
  function incrementCounter() { counter++};
  return incrementCounter
}
const myNewFunction = outer();
myNewFunction();
myNewFunction()

const anotherFunction = outer();
anotherFunction();
anotherFunction();
```

In this change the counter for `myNewFunction` in `[[scope]]` will be `2` and the the counter for `anotherFunction` in `[[scope]]` will also be `2`. This is because `myNewFunction` and `anotherFunction` are seperate and have their own `backpacks` so they have their own seperate stored variables in `[[scope]]`.

## `Asynchronous Javascript`
Javascript is
  - Single threaded (one command runs at a time)
  - Synchronously executed(each line is run in the order the code appears)

Can be an issue when say you want to grab all the `tweets` that are stored to display as if we do no code can run in the meantime while those are being fetched.

```js
const tweets = getTweets("http://twitter/elden/1");
// 350 ms wait while request is sent to Twitter HQ
displayTweets(tweets);

console.log("I want to run!!!!!!!");
```

Above the log statment will not run until all tweets are found. It will block everything else from running which is bad! There is more to these types of scenarios though...

```js
function printHello() { console.log("Hello"); } 
setTimeout(printHello, 0);
console.log("Me first!");
```

In this case `Me first!` will print first and then `Hello`. For problems with Synchroninity we need new pieces of Javascript such as 
- Web Browser APIs/Node background APIs
- Promises
- Event loop, Callback/Task Queue and micro task queue

Web browser features(known as `facade` features of Javascript) such as Time, DOM Manipulation, sockets, etc. `SetTimeout` is an example from the web API that appears to be from Javascript but is in fact part of the Web Browser APIs. The reason that `setTimeout` runs later is because Javascript will run it's own features first and then run the APIs that are not happening in Javascript aka in this case the Web Browser features. So when it hits `setTimeout` it will add it to the callStack since it is part of the Web Browser api and run it after the javascript parts have finished, aka the `console.log("Me first!");`. This is because of the `Callback Queue` so after `0ms` we set the function of `printHello` onto the `Callback Queue` instead of the `Call Stack`. 

The `Event Loop` checks constantly is anything in the queue, is the `Call Stack` empty? If it is go to `Callback Queue` and then execute the `printHello` function.

## `Promises`
Using two-pronged `facade` functions that both
- Initiate background web browser work and
- Return a placeholder object (promise) immediately in Javascript

```js
function display(data) {
  console.log(data);
}

const futureData = fetch("https://twitter.com/Elden/tweets/1");
futureData.then(display);

console.log("Me first!");
```

The `fetch` function will return a Javascript object(a Promise object) that will look like 
```js
{ 
  value: "...",
  onFulfilment: []
}
```
that will be stored in `futureData`. Once the `fetch` has finished then the `value` key on the Object will be filled. How do we know when that `fetch` operation has finished? We need to be able to get that value when it is finished so we can use our data and display. 

When the `fetch` has finished and `value` has been filled then the `onFulfilment` array will trigger any functions that live within it and will use the `value` as a parameter for those functions. So we want to get our `display` method into the `onFulfilment` property so that `display` will run when the `fetch` has completed and will be passed the `value` as a parameter. Luckily, Promises have something built in to handle this which is the `.then()`. The `.then()` is placed in a different Queue than the `Callback Queue` where the `setTimeout()` is and instead is in the `MicroTask Queue.`.

* Note: the `onFulfilment` property is a hidden property.

```js
function display(data) { console.log(data); }
function printHello() { console.log("Hello"); }
function blockfor300ms() { /* blocks js thread for 300ms */ }

setTimeout(printHello, 0);

const futureData = fetch("https://twitter.com/Elden/tweets/1");
futureData.then(display);

blockFor300ms();
console.log("Me first!");
```

The timing for the above block will be as follows
- `0ms` the `setTimeout` function is hit and since it is a Web Browser Feature and not part of the Javascript engine it will be added to the `Callback Queue`.
- `1ms` the `fetch` command is run and starts the promise.
- `2ms` the `blockfor300ms` begins to run and is added to the `Call Stack`.
- `270ms` the `fetch` promise has finished and has the results ready, it is then placed in the `MicroTask Queue`.
- `302ms` the `blockfor300ms` function has finished, the `console.log("Me First!");` is added to the `Call Stack` and finishes.
- `303ms` the  `display` in the `.then()` is dequeued from the `MicroTask Queue` and added to the `Call Stack`.
- `304ms` both the `Call Stack` and `MicroTask Queue` are empty so the `Callback Queue` is checked and the `setTimeout` is added to the `CallStack` and prints `Hello`.

Any function that is passed to a promise object goes into the `MicroTask Queue`, any function passed into a `facade` function like `SetTimeout` goes into the `Callback Queue`.

## `Classes & Prototypes - Object Oriented Javascript`

- Prototype chain - the feature behind-the-scenes that enables emulation of OOP(object oriented programming) but is a compelling tool in itself. What is the difference between `__proto__` and `prototype`.

The object-oriented paradigm aims to let us acheive 3 goals, that is I want my code to be:
1. Easy to reason about
2. Easy to add features to
3. Nevertheless efficient and performant

Let's say I have two users who have some data assoicated with them

- user 1
  - name: 'Tim'
  - score: 3

- user 2
  - name: 'Stephanie'
  - score: 5

and I need some functionality to be paired with these users. How could I store my data and functionality together in one place? With an object!

```js
const user1 = {
  name: "Will",
  score: 3,
  increment: function() { user1.score++; }
}

user1.increment(); // user1.score -> 4

// We can also create this object with the dot notation
const user2 = {}

user2.name = "Tim";
user2.score = 6;
user2.increment = function() {
  user2.score++;
}

// We can also use the built in Object.create() method that will give us more control of our object later on
const user3 = Object.create(null);
user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
};
```

We can notice a lot of repetion here and we are breaking the DRY(don't repeat yourself) principle. Image we had millions of users! What could we do?? We could use a function to generate objects for use! This type of function is also called a `factory function`.

```js
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  }
  return newUser;
}

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```

This is good for creating our users but it is bad because we are repeating our functions! If we have `5000` users then we have `5000` duplicate copies of the `increment` function and would run into the same issue if we wanted to add a new feature. Each new feature would take up much more space and would then be given to every single user even if they don't need that function. Example: a regular user shouldn't have access to an `admin` function. Is there a better way? Yes we can use the prootype chain!

Store the `increment` function in just one object and have the interpreter, if it doesn't find the `increment` function on `user1`, look up to that object to check if it has the `increment` function. 

Link `user1` and `functionStore` so the interpreter, on not finding `increment` makes sure to check up in `functionStore` where it would find it! We can make this link with the `Object.create()` technique.

```js
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function() { this.score++; },
  login: function() { console.log("Logged in"); }
}

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
```

So in the above example `Object.create(userFunctionStore)` will create a object that creates a link to the `userFunctionStore` object. So that when `user1.increment()` is called, Javascript first checks to see if the `increment` function is on `user1`. Javascript does not see the `increment()` function but it doesn't give up and checks `user1's` `__proto__` property that will have that `increment()` function from the `userFunctionStore` and calls that function.

Another thing to notice is the `increment` function will increment the score from the `this` object which is this case is our `user1` since `user1` called the function `increment`. The reason for it is `this` is an `implicit parameter` and it will assign whatever is to the left of the dot `.` to be `this`. So for the call `user1.increment()`, `user1` is what is left of that `.` so it is assigned to be `this` in the function call. In that call `this.score++` then becomes `user1.score++`. Back up for the `hasOwnProperty` it sees that `user1` does not have `hasOwnProperty` so it checks the `__proto__` and goes to the `userFunctionStore`

Say we wanted to confirm that `user1` has the `score` property. We could use the `hasOwnProperty` method to check~

```js
user1.hasOwnProperty("score")
```

but where does the `hasOwnProperty` function come from? is it on `user1`? It is not! All objects in Javascript have a `__proto__` property by default which defaults to linking to a big object - Object.prototype full of functions. So when we call `hasOwnProperty` Javascript will check `user1` and doesn't see it so it goes to `__proto__` and checks `userStoreFunction` and still does not see `hasOwnProperty`. Worry not, as `userStoreFunction` also has the `__proto__` property which links to the `Object.prototype` object which is full of functions that are available to all objects and it is there that the `hasOwnProperty` function is found.

Now let's say we changed our userFunctionStore to instead be 

```js
const userFunctionStore = {
  increment: function() { 
    function add1() { this.score++; }
    add1() 
  },
}
```

we run into an issue here as when we use a `function` we create a new execution context so `this` is no longer `user1`. When `increment()` is called `user1` calls it so it is `this` but when `add1` is called now `this` is no longer `user1` so this fails. One possible solution was to use a temp or a better way is to use the `call(this)`.

```js
// with temp var
const userFunctionStore = {
  increment: function() { 
    const that = this;
    function add1() { that.score++; }
    add1() 
  },
}

// with the `call(this)` we tell the function what "this" should point to
const userFunctionStore = {
  increment: function() { 
    function add1() { this.score++; }
    add1.call(this); 
  },
}
```

The `call` function is a good way but an even better way than that is to use an arrow function that will be `lexically` scoped so the `this` will be whatever it was before in the function above.

```js
const userFunctionStore = {
  increment: function() { 
    const add1 = () => { this.score++; }
    add1() 
  },
}
```

## `New` Keyword

The `new` keyword will help us automate a ton of stuff. It will automatically create and return out an object for us, so no need to use `Object.create` or return and to assign our varibales or functions instead of the `newUser` we put it on `this`.

```js
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}
userCreator.prototype.increment = function() {
  this.score++;
}

const user1 = new userCreator("Eva", 9);
const user2 = new userCreator("Tim", 5);
```
much smaller and it does all the same work!

* Interlude - functions are both objects and functions. When a function is declared you get the function and it actually also works as a function with the `()`. Each of these objects are initialized with a `prototype` property that is an empty object where we want to add our functions like we did above with the `userCreator.prototype.increment`.

```js
function multipleBy2(num) {
  return num * 2;
}

multiplyBy2.stored = 5;
multiplyBy2(3) // 6
multiplyBy2.prototype // {}
```

Another good example of adding multiple functions via `prototype` and the power of the `new` keyword.

```js
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function() { this.score++; }
userCreator.prototype.login = function() { console.log("login"); }

const user1 = new userCreator("Eva", 9);
user1.increment();
```

so here we declare the function `userCreator` that will assign its params of `name` and `score` to whatever `this` is. By default this function/object combo will already have an empty `prototype` object as a property. Then on the function/object combo we add two functions `increment` and `login` to the `userCreator` prototype. We declare our `user1` and since we are using the `new` keyword it will automatically create an empty object and return an object for us and will assign `this` to be our empty object which will be returned and assigned to our `user1`. So after that call we will have `user1` with properties `name` and `score`. Then we call `user1.increment`, and then Javascript will look for `increment` on the `user1` object but doesn't see it, so it will check the `__proto__` property which links to the `userCreator` function/object and checks it's `prototype`, finds `increment` and calls the function with `this` being whatever called that function which in our case is `user1`.

## `Class` keyword

Some of the issues we would run into is say if we ran `userCreator` without the `new` the `this` would be referring to the global context which could be a problem. Also syntactically just by looking at the `userCreator` function on its own it isn't entirely clear that you should call it with the `new` keyword, that's where `classes` come in. This will not change anything other the hood but helps visually and syntactically as we will also follow the standard for classes of captializing the first letter as well.

```js
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() { this.score++ }
  login() { console.log("login"); }
}

const user1 = new UserCreator("Eva", 9);
user1.increment();
```

nothing under the hood has changed in terms of what is returned, the link to the `UserCreator` prototype, the variables assigned to `user1` etc. This just provides a single construct together to be able to have all of our declarations and functions.