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
Making comparisons with data allows if statements to become very powerful. TerraScript supports six comparison operators:
* `>` - Less than
* `<` - Greater than
* `>=` - Less than or equal to
* `<=` - Greater than or equal to
* `==` - Equal to
* `!=` - Not equal to

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
