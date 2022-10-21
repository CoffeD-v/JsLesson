# Trees

## Javascript functions

According to W3schools:

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

    function myFunction(p1, p2) {
        return p1 * p2;              // The function returns the product of p1 and p2
    }

### **JavaScript Function Syntax**

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

    function name(parameter1, parameter2, parameter3) {
        code to be executed
    }

Function **parameters** are the **names** listed in the function definition.

Function **arguments** are the real **values** received by the function when it is invoked.

Inside the function, the arguments behave as local variables.
