# Math Functions
Here is a list of all the math functions and variables available to you in Terra.
These can be used anywhere you have access to a function


## Variables

Here is a list of all the variables you have access to for all equations

### seed
The seed variables holds the current world seed.
This can be passed to the `rand` function, which requires a seed.

### x
The current x coordinate.

### y
The current y coordinate.\
Note: this variable does not exist for functions with 2d noise.

### z
The current z coordinate.


## Functions

### sin
![image](https://i.imgur.com/LATQN3t.png)

Returns the trigonometric sine of an angle.

Special cases:
- If the argument is NaN or an infinity, then the result is `NaN`.
- If the argument is zero, then the result is a zero with the same sign as the argument.

Assume this works the same as the Java
[Math#sin](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#sin(double)) function.

### cos
![image](https://i.imgur.com/EgolBlk.png)

Returns the trigonometric cosine of an angle.

Special cases:
- If the argument is NaN or an infinity, then the result is `NaN`.

Assume this works the same as the Java
[Math#cos](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#cos(double)) function.

### tan
![image](https://i.imgur.com/t34GHk9.png)

Returns the trigonometric tangent of an angle.

Special cases:
- If the argument is NaN or an infinity, then the result is `NaN`.
- If the argument is zero, then the result is a zero with the same sign as the argument.

Assume this works the same as the Java
[Math#tan](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#tan(double)) function.

### sinh
![image](https://i.imgur.com/Qvi6Owu.png)

Returns the hyperbolic sine of a double value.
The hyperbolic sine of x is defined to be `(ex - e-x)/2` where e is Euler's number.

Special cases:
- If the argument is NaN, then the result is NaN.
- If the argument is infinite, then the result is an infinity with the same sign as the argument.
- If the argument is zero, then the result is a zero with the same sign as the argument.

Assume this works the same as the Java
[Math#sinh](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#sinh(double)) function.

### cosh
![image](https://i.imgur.com/bkTqajI.png)

Returns the hyperbolic cosine of a double value. The hyperbolic cosine of x is defined to be `(ex + e-x)/2` where `e` 
is Euler's number.

Special cases:
- If the argument is NaN, then the result is NaN.
- If the argument is infinite, then the result is positive infinity.
- If the argument is zero, then the result is `1.0`.

Assume this works the same as the Java
[Math#cosh](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#cosh(double)) function.

### tanh
![image](https://i.imgur.com/RLsLRzt.png)

Returns the hyperbolic tangent of a double value.
The hyperbolic tangent of x is defined to be `(ex - e-x)/(ex + e-x)`, in other words, `sinh(x)/cosh(x)`.
Note that the absolute value of the exact tanh is always less than 1.

Special cases:
- If the argument is NaN, then the result is NaN.
- If the argument is zero, then the result is a zero with the same sign as the argument.
- If the argument is positive infinity, then the result is +1.0.
- If the argument is negative infinity, then the result is -1.0.

Assume this works the same as the Java
[Math#tanh](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#tanh(double)) function.

### asin
![image](https://i.imgur.com/hoZTeol.png)

Returns the arc sine of a value; the returned angle is in the range `-pi/2` through `pi/2`.

Special cases:
- If the argument is NaN or its absolute value is greater than 1, then the result is NaN.
- If the argument is zero, then the result is a zero with the same sign as the argument.

Assume this works the same as the Java
[Math#asin](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#asin(double)) function.

### acos
![image](https://i.imgur.com/5WqH61c.png)

Returns the arc cosine of a value; the returned angle is in the range 0.0 through pi.

Special case:
- If the argument is NaN or its absolute value is greater than 1, then the result is NaN.

Assume this works the same as the Java
[Math#acos](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#acos(double)) function.

### atan
![image](https://i.imgur.com/zRJmtVN.png)

Returns the arc tangent of a value; the returned angle is in the range `-pi/2` through `pi/2`.

Special cases:
- If the argument is NaN, then the result is `NaN`.
- If the argument is zero, then the result is a zero with the same sign as the argument.

Assume this works the same as the Java
[Math#atan](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#atan(double)) function.

### atan2
![image](https://i.imgur.com/t34GHk9.png)

Returns the angle theta from the conversion of rectangular coordinates `(x, y)` to polar coordinates `(r, theta)`.
This method computes the phase theta by computing an arc tangent of `y/x` in the range of `-pi` to `pi`.

Special cases:
- If either argument is NaN, then the result is NaN.
- If the first argument is positive zero and the second argument is positive, or the first argument is positive and
finite and the second argument is positive infinity, then the result is positive zero.
- If the first argument is negative zero and the second argument is positive, or the first argument is negative and
finite and the second argument is positive infinity, then the result is negative zero.
- If the first argument is positive zero and the second argument is negative, or the first argument is positive and
finite and the second argument is negative infinity, then the result is the double value closest to `pi`.
- If the first argument is negative zero and the second argument is negative, or the first argument is negative and
finite and the second argument is negative infinity, then the result is the double value closest to `-pi`.
- If the first argument is positive and the second argument is positive zero or negative zero, or the first argument
is positive infinity and the second argument is finite, then the result is the double value closest to `pi/2`.
- If the first argument is negative and the second argument is positive zero or negative zero, or the first argument
is negative infinity and the second argument is finite, then the result is the double value closest to `-pi/2`.
- If both arguments are positive infinity, then the result is the double value closest to `pi/4`.
- If the first argument is positive infinity and the second argument is negative infinity, then the result is the
double value closest to `3*pi/4`.
- If the first argument is negative infinity and the second argument is positive infinity, then the result is the
double value closest to `-pi/4`.
- If both arguments are negative infinity, then the result is the double value closest to `-3*pi/4.`

Assume this works the same as the Java
[Math#atan2](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#atan2(double,double)) function.

### deg
Converts an angle measured in radians to an approximately equivalent angle measured in degrees.
The conversion from radians to degrees is generally inexact; users should not expect cos(toRadians(90.0)) to exactly
equal 0.0.\
This is the same as doing `x * 180 / 3.14159...`.

Assume this works the same as the Java
[Math#atan2](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#toDegrees(double)) function.

### rad
Converts an angle measured in degrees to an approximately equivalent angle measured in radians.
The conversion from degrees to radians is generally inexact.\
This is the same as doing `x * 3.15159... / 180`.

Assume this works the same as the Java
[Math#atan2](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#toRadians(double)) function.

### abs
Returns the absolute value of a float value.
If the argument is not negative, the argument is returned.
If the argument is negative, the negation of the argument is returned.

Special cases:
- If the argument is positive zero or negative zero, the result is positive zero.
- If the argument is infinite, the result is positive infinity.
- If the argument is NaN, the result is NaN.

Assume this works the same as the Java
[Math#atan2](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#abs(double)) function.

### round
![image](https://i.imgur.com/9zQyqhZ.png)

Returns the closest integer to the argument, with ties rounding to positive infinity.

Special cases:
- If the argument is `NaN`, the result is `0`.
- If the argument is negative infinity or any value less than or equal to the value of `Long.MIN_VALUE`, the result
is equal to the value of `Long.MIN_VALUE`.
- If the argument is positive infinity or any value greater than or equal to the value of `Long.MAX_VALUE`, the result
is equal to the value of `Long.MAX_VALUE`.

Assume this works the same as the Java
[Math#atan2](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#round(double)) function.

### ceil
![image](https://i.imgur.com/Lg7nLgH.png)

Returns the smallest (closest to negative infinity) value that is greater than or equal to the argument and is equal
to a mathematical integer.

Special cases:
- If the argument value is already equal to a mathematical integer, then the result is the same as the argument.
- If the argument is NaN or an infinity or positive zero or negative zero, then the result is the same as the argument.
- If the argument value is less than zero but greater than -1.0, then the result is negative zero.

Note that the value of ceil(x) is exactly the value of -floor(-x).

Assume this works the same as the Java
[Math#atan2](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Math.html#round(double)) function.

### floor
Returns the largest (closest to positive infinity) value that is less than or equal to the argument and is equal to a
mathematical integer.

Special cases:
- If the argument value is already equal to a mathematical integer, then the result is the same as the argument.
- If the argument is NaN or an infinity or positive zero or negative zero, then the result is the same as the argument.

### exp
Returns Euler's number e raised to the power of a value.
Special cases:
- If the argument is NaN, the result is NaN.
- If the argument is positive infinity, then the result is positive infinity.
- If the argument is negative infinity, then the result is positive zero.

### ln

### log

### sqrt

### pow

### min

### max

### sign

### if

### root

### cbrt

### sigmoid

### int_and

### int_left_bit_shift

### int_right_bit_shift

### int_not

### int_or

### int_xor

### double_to_long_bits

### long_bits_to_double

### float_bits_to_int

### int_bits_to_float