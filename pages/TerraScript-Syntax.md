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