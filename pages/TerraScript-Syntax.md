TerraScript syntax is very similar to JavaScript and other C-like syntax languages. If you have worked with such
languages, TerraScript will feel very familiar. If not, TerraScrips is still very simple to learn!

# Functions
A function is an *expression* that performs an action using *arguments*, and (optionally) *returns* a value.

## Function Basics
Functions in TerraScript look like this:
```
function(arg1, arg2);
```

`function` is the function's *identifier* (the function name), `arg1` and `arg2` are *arguments* (data given to the
function for it to operate on). See the [Functions](./TerraScript-Functions) page for information on TerraScript functions
implemented in Terra.

## Return Types
In the Functions documentation, each function has a return type of either `void`, `num`, `str` or `bool`.

*return* simply means the function "gives back" a value when it finishes executing. That value can be ignored, or used
in expressions, such as variable assignments, comparisons, or even other function calls.

* A return type of `num`, `str` or `bool` simply means that the function *returns* a numeric, string, or boolean value.
This value can be used in any expression requiring something matching its data type.
* A return type of `void` means that the function does not return a value. `void` functions cannot be assigned to
variables or used in expressions.

# Expressions
An expression is a series of tokens that may be evaluated to produce a value. An example is `5 + 3 * 2`, which evaluates
to `11`.

## Types
Before we get into expressions, we must first discuss types. A type is the "type" of data required/provided by
something in TerraScript. Every expression in TerraScript has a type. TerraScript is a statically-typed language,
meaning that type checking is done at the time of parsing, rather than execution. This means that you don't need to
worry about checking the type of your variables at runtime.

Terra has 3 types, which have been introduced above:
* `num` - A numeric value. Num may hold decimal or integer values. It may be compared to other `num`s via comparison
    operators.
* `bool` - A boolean value. Booleans can either be true or false. It may be compared to other `bool`s via boolean
    operators.
* `str` - A string value. Strings hold sequences of characters, i.e. `"Hello, World!"` It may be compared to other `str`s
    via the equals and not equals operators.
    
(`void` is not technically a type, it simply marks that a function does not return a value.)

## Constant Expressions
Constant expressions are expressions that hold a constant value of a certain type.
* `str` constant expressions are surrounded by double quotes: `"This is a constant string"`
* `num` constant expressions are raw numeric values: `0`, `1`, `20.3`, `42.0`
* `bool` constant expressions are simply the keyword `true` or `false`

## Compound Expressions
Compound Expressions are multiple expressions combined using *operators*. TerraScript contains many operators to perform
operations on different data types.

### Operators
Operators are constructs which perform an *operation* on one or more piece of data.

#### Number Operators
* `+` - Adds two numbers.
* `-` - Subtracts the right number from the left number.
* `*` - Multiplies two numbers.
* `/` - Divides the left number by the right number.
* `%` - Computes the nth modulus of the left number, where n is the right number.

#### Boolean Operators
* `&&` - Boolean AND (if left AND right are true, evaluates true)
* `||` - Boolean OR (if left OR right are true, evaluates true)

#### Comparison operators
* `>` - Less than - Compares 2 numbers.
* `<` - Greater than - Compares 2 numbers.
* `>=` - Less than or equal to - Compares 2 numbers.
* `<=` - Greater than or equal to = Compares 2 numbers.
* `==` - Equal to - Compares any data types.
* `!=` - Not equal to - Compares any data types.

#### Unary Operators
Unary operators are operators which operate on only one piece of data.
* `!` - Binary NOT operator. `!true` = false, `!false` = true.
* `-` - Negation operator. `-(1)` = -1, `-(-1)` = 1.

## Functions
Functions that return values are expressions! The return value of a function may be used in a compound expression by
simply placing the function within the expression, like so:

```js
randomInt(5) * 2 > 3; // Evaluates to true if a random integer between 0 and 5 multiplied by 2 is greater than 3.
```


# Variables
Variables are used to hold data. They are *declared* with a name called an *identifier*, which can be used in *assignments* and
*references*.

## Declaration
To create a variable it must be *declared*. Declaration of variables in Terra follows a very standard syntax:
```
type identifier = value;
```

* `type` is the type of the variable, either `str`, `bool`, or `num`.
* `identifier` is the identifier (name) to give the variable.
* `value` is the value to assign to the variable. A variable's value may be any expression that matches its declared
    type.

Example:
```js
num aNumber = 0; // Declare a num variable called aNumber with value 0.

str example = "hello, world"; // Declare a str variable called example with a value of "hello, world".

bool condition = false; // Declare a boolean variable called condition with a value of false.
```

# Conditional Statements
A key part of any programming language are conditional statements. TerraScript has a very standard `if`, `else if`
`else` syntax.

## if
The if statement evaluates a block of code if a condition evaluates true.
```js
if(condition) {
    print("condition is true");
}
```

In the above example, the `print` function would only be run if `condition` is equal to true. We assume that `condition` is
a `bool`. Any other data type would not be allowed by the parser.

### Comparisons
Making comparisons with data allows if statements to become very powerful. TerraScript supports six comparison
operators, listed above.


These operators are all *binary operators*, meaning they operate between 2 expressions. E.G. `5 > 1` returns `true`.

Equal to and not equal to can be used between any data types. The rest are strictly between two `num`s.

Combined with the if statement we get this:
```js
if(5 > 1) {
    print("condition is true");
}
```
This isn't very useful, though. That condition is always true! What if we use `randomInt` instead?
```js
if(randomInt(2) == 0) {
    print("This message prints half the time!");
}
```
With external conditions introduced, the script can now have different behavior in different situations.
## else
What if we want to do thing a half the time, and thing b the rest of the time? We could do something like this:
```js
num randomNumber = randomInt(2);
if(randomNumber == 0) {
    print("This message prints half the time!");
}
if(randomNumber == 1) {
    print("This message prints the other half the time!");    
}
```
That's ugly, though. There's a much cleaner and more readable way to do the same thing, which is to use the `else`
statement. `else` statements go after `if` statements, and evaluate only if the `if` condition is false. Rewriting the
above example with `else` looks like this:
```js
if(randomInt(2) == 0) {
    print("This message prints half the time!");
} else {
    print("This message prints the other half the time!");    
}
```
That's much cleaner than before. We can even reduce this further, since each block contains just one expression we can
use a single-expression statement:
```js
if(randomInt(2) == 0) print("This message prints half the time!");
else print("This message prints the other half the time!");    
```
Notice the absence of curly braces. You can only do this if there is a single expression in your statement/loop.

## else if
Well, what if we want more conditions? We can use `else if` statements to add more conditions. They will be evaluated
sequentially, and evaluation will stop after one is true.
```js
num randomNumber = randomInt(3);
if(randomNumber == 0) print("This message prints one-third the time!");
else if(randomNumber == 1) print("This message prints another third the time!");
else if(randomNumber == 2) print("This message prints *another* third of the time!");
```
Using `else if` statements, we can make our scripts more readable and concise. `else if` can also be paired with `else`,
like so:
```js
num randomNumber = randomInt(3);
if(randomNumber == 0) print("This message prints one-third the time!");
else if(randomNumber == 1) print("This message prints another third the time!");
else print("This message prints *another* third of the time!");
```

# Loops

TODO