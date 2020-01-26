# `Python(Python 3)`

Python is 30 years old! Python is open source and isn't just for scripting. Can be used for

- AI/ Machine Learning
- Hardware and Micro-controllers
- Web Development
- Scripting

It also has a huge standard library and the 3rd party packages are also large in quantity.For style guide often [pep8](https://pep8.org/) is followed.

`REPL`: Read, Evaluate, Print, Loop. This is what mainly interacts with the python iterpreter, you can run single commands here and instantly see the output printed out.

- type("Elden") prints out `<class 'str'>`
- help(str) prints out all the methods for that type or specific method to get documentation on that method.
- dir(str) will print out just all the method names

You can override the type in Python!

```py
list = 1
list(1)
```

The second line causes an error as we have overridden the list type to just be the number 1.

## `Data Types`

There are some types that are mutable(can be changed) and others that are not. The list for types and containers is as follows

- Mutable

  - list
  - set
  - dict

- Immutable

  - int, float, decimal
  - str
  - bool
  - tuple

### `Variables`

Like many other languages a variable will let you store information such as a string or a number. Since python is dynamic setting a type before the declaration is not needed.

```py
x = 42
```

Something of no type is `None` will return `NoneType`.

### `Numbers`

There are integers such as 4,21,-5 and there are floats as well such as 5.0, 0.0, -2.54. There are additionally complex numbers like 43j.

```py
x = 3 # an integer
x = 3.0 # now a float
x = 32j # now a complex number
```

### `Strings`

Can use single or double quotes for strings.

```py
'Hello'
"Hello"
```

Can make a long string with `"""`.

```py
long string = """
... 12345
... abc
... """
```

Also have the `f` string where you can place a variable in the string with brackets`{}`.

```py
f"Hello {name}"
```

## `Functions`

Make reusable pieces of code and works much like other languages just with different syntax. There are no `{}` like other languages but instead will check nesting based off of indentation.

```py
def foo():
  print("Hello")

# This can also be used to call functions
print(f"Elden says {foo()}") # Elden says Hello
```

to invoke the function just call it likeso `foo()` and `"Hello"` will be printed! You can also add arguments for you functions

```py
def add_numbers(x,y):
  return x + y

add_numbers(3,5) # result will be 8
```

you can also set a default for values if they are not included in the function call.

```py
def add_numbers(x,y = 5)
  return x + y

add_numbers(3) # will also result to 8
```

with the above `y` will default to `5` since no value was passed in for the argument. Default arguments should be at the end of the arguments following the non-default arguments. Can also change the order of the arguments you pass by naming them

```py
def divide_numbers(x,y = 2)
  return x / y
add_numbers(y = 4, x = 4) # result will be 1
```

Default values get created on the first call of the function and are stored. If they change on the next function call it will not reinstantiate!

```py
def foo(a, b = [])
  b.append(a)
  print("B is: ", b)

foo(5) # B is: [5]
foo(6) # B is [5,6] as the empty array is not reinitialzied, it grabs the array from the previous call that had [5]
```

To fix this what you could do is

```py
def foo(a, b=None):
  if b is None:
    b = []
  b.append(a)
  print(b)

foo(1) # [1]
foo(5) # [5]
```

### `Function Scope`

- Python has access to variables outside of the function and variables delcared in the function are only accessible to that function.

```py
def twitter_info():
  account = "Elden"
  print(f"Acount inside the function is: {account})

twitter_info() # prints "Account inside the function is: Elden
account # will error out as "account" is not defined outside the function
```

However, Python cannot change the value of outside variables.

```py
name = "Elden"
def name_change():
  name = "Max"
  print(f"name is: {name}")

name_change() # Name is: Max
name # Elden
```

### `Equality`

```py
5 == 5 # are these two equal
5 is 5 # checks if these two point to the same thing in memory
```

## `Containers`

There are container objects in python such `list`, `tuple`, `dist`, and `set`.

### `Lists`

Here we are gonna start with a list.

```py
[] # creates an empty list
list() # also creates an empty list

names = ["Elden", "Max", "Rose"] # elements seperated by ","

# Note: len() can be used for more than lists, can also be used on strings for example
len(names) # returns the length of the list
len("Elden") # 5

# Like other languages the list starts with index 0
names[0] # Elden
names[1] # Max
names[2] # Rose
names[3] # throws "index out of range" error

# to get slice of list past start_index:end_index. start_index is inclusive, end_index is exclusive
names[0:2] # ['Elden', 'Max']

# negative index will start from the end
names[-1] # Rose, last element of the list
names[-2:] # [Max, Rose] everything from that negative index onwrd
```

#### `Sorting`

With lists we can also sort and change the order of them. We can sort two different ways, by modifying the list itself in place or by returning a sorted instance of that list. For the built in `sorted` method you can pass in arguments as well.

```py
lottery_numbers = [1, 4, 34242, 78, 11]

sorted(lottery_numbers) # [1, 4, 11, 78, 34242]
sorted(lottery_numbers, reverse=True) # [34242, 78, 11, 4, 1]
lottery_numbers # [1, 4, 34242, 78, 11]

# Sorting in place
lottery_number.sort() # returns nothing just sorts it in place
lotter_numbers # [1, 4, 11, 78, 34242]
lottery_numbers.reverse() # reverses in place
lottery_numbers # [34242, 78, 11, 4, 1]
```

#### `Add items`

If we want to add items to our list we can use the `.append()` method or the `.insert(position, value)`

```py
names = ["Elden"]
names.append("David") # ["Elden", "David"]
names.insert(0, "Ritchie") # ["Ritchie", "Elden", "David"]
```

we can also combine two lists with the `.extend(list)` method

```py
names = ["Elden", "David"]
colors = ["Red", "Blue"]
names.extend(colors)
names # ["Elden", "David", "Red", "Blue"]
```

#### `List lookups`

We can use some built in checks such as `item in list` that will return a `True` or `False` if the element exists in the list. There is additionally the `.index(item)` that will return the first index where that item is found and throe an error if it is not found. To find the number of times an item is in the list you can use `.count(item)` that will return the number of times that item was found in the list. You can also manually update a position in the list by reassigning it.

```py
names = ["Elden", "David", "Ritchie", "Elden"]

"Elden" in names # true
names.index("David") # 1
names.index("Elden") # return the first instance so 0
names.count("Elden") # 2

# Reassigning the first index
names[0] = "Jeffrey"
names # ['Jeffrey', 'David', 'Ritchie', 'Elden']
```

#### `Remove items`

You can use the `.remove(item)` to remove an item with that value in a list, if there are multiples it will only remove the first instance and if the item is not found it will thow an error `item not in list`. There are additonally other methods for removing such as `pop()` that will remove and return the last item in the list. You can optionally pop with a specific index `.pop(index)`

```py
names = ["Elden", "David", "Jeffrey", "Elden"]

names.remove("Elden")
names # ["David", "Jeffrey", "Elden"]

names.pop() # Returns "Elden"
names # ["David", "Jeffrey"]

names.pop(0) # "David"

# del is also available
del name[0] # deletes item at index 0
```

- Note: items of a list do not need to be of the same type

### `Tuples`

Tuples are a light-weight collections used to keep track of related, but different items. Tuples are `immutable` so once an item is created it cannot be changed. Often `tuples` are used over `lists` when someone wants to contain a snapshot of data since they cannot be continually changed, added, or removed like a list.

```py
a = () # Creates a tuple
type(a) # <class 'tuple'>

# A tuple needs two elements else the parenthesis mean nothing
b = (1)
type(b) # <class 'int'>

c = (1, 2, 3)
type(c) # <class 'tuple'>
```

`Tuple` are great for matching information together such as having information on a student available. `Tuples` can also be unpacked to grab the neccessary information you need and assign it to variabels that make sense.

```py
student = ("Elden", 23, "Math", 3.5)
student[0] # Elden
student[0] = "David" # Error as cannot mutate objects in a tuple

name, age, subject, gpa = student
name # Elden
age # 23
subject # "History"
gpa # 3.5

# To ignore a value we can use "_"
name, age, subject, _ = student # ignored the gpa section

# can also declare a tuple without ()
x = 1, 2, 3 # a valid tuple
```

For searching just like with lists you can use `my_tuple.index(item)` or `item in tuple`

### `Sets`

Sets are a datatype that allow you to store other `immutable` types in an unsorted way, but an item can only be contained in a set once so there are no duplicates. A set is very fast and has powerful operations such as `union`, `difference`, and `intersection`. Sets have no order and does not support indexing `set[0]`.

```py
set() # creates empty set
{1} # creates set with item 1

names = {"Elden", "David", "Elden"}
names # {"Elden", "David"} since duplicates will be removed
```

With sets we can get the unique values from a list easily by convertering that list to a set.

```py
names = ["Elden", "David", "Jeffrey", "Elden"]
set(names) # { "Elden", "David", "Jeffret" }
```

#### `Adding and removing from a set`

You can add and remove from a set with the build in `add(item)` and `discard(item)` methods. `discard` doen not error even if the item is not in the set. You can also use `remove` but `remove` will throw an error if the item is not found in the set. You can also use `item in set` to get back a boolean result back. If you want the set to be `immutable` you can use a frozen set.

```py
colors = {"Red", "Green", "Blue"}

colors.add("Pink")
colors # {"Red", "Green", "Blue", "Pink"}

colors.discard("Green")
colors # {"Red", "Blue", "Pink"}
```

You can combine sets as well with the `update()` that works like the `extend()` method from lists

```py
names = {"Elden", "David"}
colors = {"Red", "Green", "Blue"}

names.update(colors)
names # {'Blue', 'Green', 'Red', 'David', 'Elden'}
```

The `union`, `difference` and `intersection` methods can be used to compare two sets.

```py
rainbow_colors = {"Red", "Orange", "Yellow", "Green", "Blue", "Violet"}
favorite_colors = {"Red", "Black", "Blue"}

# Union will combine two sets, again with no duplicates so all colors will be included.
rainbow_colors.union(favorite_colors) # {'Green', 'Red', 'Yellow', 'Violet', 'Orange', 'Black', 'Blue'}
rainbow_colors | favorite_colors # this is also a shorthand for a union

# intersection will return items that are in both sets
rainbow_colors.intersection(favorite_colors) # {'Blue', 'Red'}
rainbow_colors & favorite_colors # this is also a shorthand for intersection

# difference will return the items that are not found in both sets, so red and blue will be removed as they are in both sets
rainbow_colors.difference(favorite_colors) # {'Yellow', 'Violet', 'Orange', 'Green'}
rainbow_colors ^ favorite_colors # shorthand for difference
```

You can also get a list from a set with `list(set)`

### `Dictionaries`

Dictitionaries allow us to store our data in `key, value` pairs. Dictionaries themselves are `mutable`, but dictionary keys can only be `immutable` types. Dictionaries are good when we want to quickly access additional data associated with a particular key and are also good for memoization. Search for Dictionaries are very fast as if you have the key you know exactly where to go to see if there is a value and you do not need to check every item like you do with a list. A value can be accessed with `my_dict[key]`, you cannot traverse through index, instead it will assume whatever index you attempt to access is in fact a key. To search you can also `key in my_dict` as for order as of `Python 3.6` a dict is sorted by insertion order.

```py
{} # empty brackets creates a dictionary
dict() # also create an empty dictionary

# dictionary with three items
nums = {1: "one", 2: "two", 3: "three"}

# Strings and Numbers are fine for keys but mutable objects such as [] cannot
{[] : 1} # will throw an error as [] cannot be a key
{1: []} # a list can be a value though as values do not need to be immutable

nums[1] # return "one"

nums[4] # Error as not in dictionary
nums.get(4) # no error but not found so no return

# You can add a default value to return for get
nums.get(1, "default value") # get "one" but would have gotten "default value" if it had not been found.
```

#### `Adding / Combining`

You can set a value with the key with just `my_dict[key] = value` or override a current value for a key. You can also combine dictionaries with the `update(dict)` method.

```py
nums = {1: "one", 2: "two", 3: "three"}

nums[4] = "four" # Adds 4 key with value "four"
nums[2] = "twoooo" # overrides value for that key
nums # {1: 'one', 2: 'twoooo', 3: 'three', 4: 'four'}

colors = { "r": "Red", "g": "Green"}
colors.update(nums) # combine the dictionaries
colors  # {'r': 'Red', 'g': 'Green', 1: 'one', 2: 'twoooo', 3: 'three', 4: 'four'}
```

#### `Get Keys/Values`

You can access the `keys`, `values`, and thier pairing in a dictionary with the `keys()`, `values()` and `items()` methods.

```py
nums = {1: 'one', 2: 'twoooo', 3: 'three', 4: 'four'}

nums.keys() # dict_keys([1, 2, 3, 4])
nums.values() #dict_values(['one', 'twoooo', 'three', 'four'])
# items returns tuples of the keys and values
nums.items() # dict_items([(1, 'one'), (2, 'twoooo'), (3, 'three'), (4, 'four')])
```

## `Booleans`

Truth and False values to test your logic, there are built in `True` and `False` values in python. The `bool(value)` method will return a true or false value for the passed in value. For integers the only false value is a `0`. Empty containers such as lists, sets, tuples, or dictionaries are also falsy. None type is also falsy and so is an empty string.

```py
type(True) # <class 'bool'>

bool(0) # False
bool(1) # True

bool([]) # False
bool([1]) # True

bool(None) # False

bool("") # False
bool("Hello") # True
```

### `Comparisions`

For mathematical comparisions there is the `==`, `!=`, `>`, `<`, `>=`, and `<=` that will return a boolean,

```py
3 > 5 # False

"T" < "t" # True, upper case letters are lower valued in ASCII
[1,2,3] == [1,2,3] # True
```

There are also the `and`, `or` and `not` operations that will result as follows

| Operation |                Result                |
| --------- | :----------------------------------: |
| a or b    |    if a is False, then b, else a     |
| a and b   |    if a is False, then a, else b     |
| not a     | if a is False, then True, else False |

```py
a = True
b = True
a and b # True

[1] and [2] # Returns [2] since a in this case was true
[] or {} # Returns {} since it is a is False so return b
not [] or {} # True as the or returns False so the not of that is True
```

### `Loops and Control Statements`

In other languages in order to loop through a list you would do something like

```js
const colors = ["Red", "Green", "Blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

where as in python a loop over a list would like

```py
colors =  ["Red", "Green", "Blue"]
for color in colors:
  print(color)

for num in range(1, 7, 2):
  print(num) # 1, 3, 5
```

If we want to loop over a dictionary then we would use the `.items()` functions to get returned `tuples`

```py
hex_colors = {"Red": "#FF", "Green": "#008"}
for label, hex in hex_colors.items():
  print(label, hex) # Red #FF, Green #008
```

If we want indexes like in the Javascript example above we could use `enumerate(list)` with `i`.

```py
colors = ['Red', 'Green', 'Blue']
for i, color in enumerate(colors):
  print(f"index: {i}, color: {color}")
```

There are also simple `if`, `elif`, `else` and `while` statements. There are also avaible `continue` statements to automatically move onto the next iteration in the loop or a `break` statement to completely break out of the loop.

```py
# If statments
if 3 > 5:
  print("Hello 5") # won't run
elif 3 > 4:
  print("Hello 4") # won't run either
else:
  print("Hello 3") # will run

# While loop
counter = 0
max = 4
while counter < max:
  print(f"The count is: {counter}")
  counter = counter + 1

# break
names = ["Max", "Rose", "Nina", "Jimmy", "David"]
for name in names:
  if name == "Rose":
    continue
  elif name == "Jimmy":
    break
  else:
    print(f"Name is: {name}")

# The above will print the names of Max and Nina. Rose is skipped as continue is hit so it won't print and continue onto the next name and once Jimmy is hit then the loop breaks not printing Jimmy or David.
```

### `Importing and Exceptions`

Importing is quite simle in python as by importing via file name will allow access to the functions in any other file. For example, if I have a file called `name.lib.py` with a function to uppercase a name I can import that in my `other_program.py` file.

```py
# name_lib.py
def upper_case_name(name):
    return name.upper()
name = "Elden"
upper_name = upper_case_name(name)
print(f"Upper cased name: {upper_name}")
```

```py
# other_program.py
import name_lib

my_name = "Fred"
upper_name = name_lib.upper_case_name(my_name)

print(f"Upper name is {upper_name}")
```

and I will see `Upper name is FRED` and `Upper cased name: Elden` when I run the `other_program.py` file. I can modify this to only see `Elden` uppercased when I am directly running `name_lib.py` by checking to see if `__name__` is equal to `__main__` where `__main__` is the file that is being run. So with these modifications

```py
def upper_case_name(name):
    return name.upper()

if __name__ == "__main__":
    name = "Elden"
    upper_name = upper_case_name(name)
    print(f"Upper cased name: {upper_name}")
```

then ``Upper cased name: Elden`will only appear when I directly run the`name_lib.py`file. If we want to use external libraries we can then use`pip`. Say we wanted to use the`requests`library we would first install with`python -m pip install requests` and import likeso

```py
import requests
```

To catch exceptions we can do a `try except` likeso

```py
try:
  int("a") # will throw a ValueError error
except ValueError as e: # get error in e
  print("oops, you can't do that!", e)
```
