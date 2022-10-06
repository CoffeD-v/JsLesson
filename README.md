
# Coffeloper Javascript Lesson

[:brazil: Clique aqui para acessar a versão em português.](./README.pt-br.md)

# Flow Control and Error Handling

JavaScript supports a compact set of declarations, specifically control flow, that you can use to assign great interactivity to web pages.

See the JavaScript Reference for details on the declarations shown in this chapter. In JavaScript code, the semicolon character ( ; ) is used to separate declarations.

Every expression is also a declaration. See Expressions and Operators for complete information about expressions.

##
# Block declaration

#### A block declaration is used to group declarations. The block is delimited by a pair of braces

```
{
 declaration_1;
 declaration_2;
.
.
.
 declaration_n;
}
```

# Example

Block statements are generally used with control flow statements *(eg if, for, while)*.

```
while (x < 10) {
  x++; //{ x++; } is the block declaration.
}
```

#### **Important:** Prior to ECMAScript 6 JavaScript was not block scoped. Variables introduced within a block are scoped to the function or script in which the block is contained, and defining such variables has an effect far beyond the block itself. In other words, block declarations do not introduce a scope. Although "standard" blocks are valid syntax, don't use them in JavaScript, thinking they work like C or Java because they don't work the way you think. For example

```
var x = 1;
{
  var x = 2;
}
console.log(x); // display 2

```

* This code displays 2 because the var x declaration inside the block has the same scope as the var x declaration before the block. In C or Java, the equivalent code would display 1.

##
## Conditional statements

A conditional statement is a set of statements that are executed if a specified condition is true. JavaScript supports two conditional statements: **if...else** and **switch**.

##

# if...else statement
Use the **if** statement to execute some statement if the logical condition is true. Use the optional else clause to execute some statement if the logical condition is false. An **if** statement is declared as follows:


```
if (condition) {
  declaration_1;
} else {
  declaration_2;
}
```

where *condition* can be any expression that evaluates to true or false. See Boolean for an explanation of what evaluates to true and false. If condition evaluates to true, statement_1 is executed; otherwise, statement_2 is executed. statement_1 and statement_2 can be any statement, including nested if statements.

#### You can also combine statements using else if to get multiple conditions tested in sequence, like the following:

```
if (condition) {
  declaration_1;
} else if (condition_2) {
  declaration_2;
} else if (condition_n) {
  declaration_n;
} else {
  final_statement;
}
```

To execute multiple statements, group them into a block statement ({ ... }). In general, it is good practice to always use block statements, especially when nesting if statements:

```
if (condition) {
    declaration_1_executed_se_condition_for_true;
…```
if ((x = y)) {
  /* do the right thing */
}
```

### Values ​​evaluated as false

The following values ​​evaluate to false:

* false 
* undefined
* null
* 0
* NaN
* ("")

###

All other values, including all objects, evaluate to true when passed to a conditional statement.

Do not confuse the Boolean primitive values ​​true and false with the Boolean object's true and false values. For example:

```
var b = new Boolean(false);
if (b) // this condition evaluates to true
if (b == true) // this condition evaluates to false
```
## Example

In the following example, the checkData function returns true if the number of characters in a Text object is three; otherwise, displays an alert and returns false.




```javascript
function checkData() {
  if (document.form1.tresCharacters.value.length == 3) {
    return true;
  } else {
    alert("Enter exactly three characters. " +
      document.form1.tresCharacters.value + " not valid.");
    return false;
  }
}
```

##


# Switch statement
A switch statement allows a program to evaluate an expression and attempt to associate the expression's value with a case label. If a match is found, the program executes the associated statement. A switch statement looks like the following:



```
switch(expression) {
   case label_1:
      declarations_1
      [break;]
   case label_2:
      declarations_2
      [break;]
   ...
   default:
      standard_declarations
      [break;]
}
```

The program first looks for a case clause with a label that matches the value of the expression and then transfers control to that clause, executing the associated statements.

 If no matching label is found, the program looks for the optional default clause and, if found, transfers control to that clause, executing the associated statements.

If no default clause is found, the program continues execution from the statement following the switch. By convention, the default clause is last, but it doesn't have to be.

The break statement associated with each case clause guarantees that the program will exit the switch as soon as the corresponding statement is executed and that it will continue execution from the statement following the switch. If the break statement is omitted, the program continues execution from the next statement within the switch.

## Example

In the following example, if typefruit is evaluated as "Banana", the program matches the value with case "Banana" and executes the associated statement. When the break is encountered, the program terminates the switch and executes the statement following the conditional. If the break is omitted, the case statement "Cherry" is also executed.




```javascript
switch (typefruit) {
   case "Orange":
      console.log("The orange kilo is R$0.59.<br>");
      break;
   case "Apple":
      console.log("The apple kilo is R$0.32.<br>");
      break;
   case "Banana":
      console.log("The kilo of banana is R$0.48.<br>");
      break;
   case "Cherry":
      console.log("The kilo of the cherry is R$3.00.<br>");
      break;
   case "Mango":
      console.log("The kilo of the mango is R$0.56.<br>");
       break;
   case "Mamao":
      console.log("The kilo of papaya is R$2.23.<br>");
      break;
   default:
      console.log("Sorry, we don't have " + fruit type + ".<br>");
}
console.log("Would you like anything else?<br>");
```

## 

# Loops and iterations

Loops provide a quick and easy way to perform an action over and over again. 208

```javascript
var step;
for (step = 0; step < 5; step++) {
  // Execute 5 times, with step values ​​from 0 to 4.
  console.log('Walk one step east');
}
```

## 
There are several different forms of loops, but they essentially do the same thing: repeat an action multiple times (you can even repeat 0 times). There are many situations in which it is easier to solve a problem using one type of loop than others.

Possible loops in JavaScript:

- ### for
- ### do...while
- ### while
- ### label
- ### break
- ### continue
- ### for...in
- ### for...of
##
# Declaration for

A for loop is repeated until the specified condition is false. The for loop in JavaScript is similar to Java and C.

- A for statement is made as follows:


```javascript
for ([initialExpression]; [condition]; [increment])
  declaration
}
```



## When a for is executed, the following occurs:

* The expression Initial expression is initialized and, if possible, is executed. Normally this expression initializes one or more counters, but the syntax allows expressions of any degree of complexity. It may also contain declaration of variables.
* The condition expression is evaluated. if the condition result is true, the loop is executed. If the condition value is false, then the loop will terminate. If the condition expression is omitted, the condition is assumed to be true.
* The instruction is executed. To execute multiple statements, use a block statement ({ ... }) to group them together.
* Update the increment expression, if any, executes, and returns control to step 2.


## Example

The following function contains a for statement that will count the number of options selected in a list (a *<select>* element allows multiple selections). Inside the for is declared a variable i initialized to zero. The for statement checks if i is less than the number of options in the *<select>* element, executes successive if statements, and increments i by one each time it passes through the loop.


```javascript
<form name="selectForm">
  <p>
    <label for="typeMusic">Choose some types of music, then click the button below:</label>
    <select id="typeMusic" name="typeMusic" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classic</option>
      <option>Opera</option>
    </select>
  </p>
  <p><input id="btn" type="button" value="how many were selected?" /></p>
</form>

<script>
function howMany(selectObject) {
  var numberSelected = 0;
  for (var i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numeroSelecionadas;
}

var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
  alert('Total options selected: ' + howMany(document.selectForm.typeMusic))
});
</script>

```
  
##

# do...while declaration

The do...while statement will repeat until the specified condition is false.

```javascript
of
declaration
while(condition);
}
```



##

The instruction will be executed once before the condition is checked. To execute multiple statements use a block declaration *({ ... })* to group them together. If the condition is true, then the loop will be executed again. At the end of each run, the condition is checked. When the condition contained in the while is false, the loop execution is terminated and control is passed to the statement following do...while.

##

In the following example, the loop runs at least once and will run until i is less than 5.

```javascript
of {
  i += 1;
  console.log(i);
} while(i < 5);
```
##
                
# while statement
A while statement executes its statements as long as a specified condition evaluates to true. Here's a while statement:


```javascript
while (condition)
  declaration
```
##
If the condition becomes false, the statement inside the loop stops execution and control is passed to the statement after the loop.

The condition test takes place before the loop is executed. That way if the condition is true the loop will execute and test the condition again. If the condition is false, the loop terminates and passes control to the instructions after the loop.

To execute multiple statements, use a block statement ({ ... }) to group these statements.

```javascript
of {
  i += 1;
  console.log(i);
} while(i < 5);
```

# First example
#### The following while will execute as long as n is less than three:
```javascript
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

#### At each iteration, the loop increments n and adds this value to x. Therefore, x and n receive the following values:

* After running for the first time: n = 1 and x = 1
* After the second time: n = 2 and x = 3
* After the third time: n = 3 and x = 6

##### After executing the third time, the condition n < 3 will no longer be true, so the loop will terminate.

# Second example

Avoid infinite loops. Make sure the loop condition will eventually be false; otherwise the loop will never end. The following while will run forever as its condition will never be false:

```javascript
while (true) {
  console.log("Hello, Guys");
}
```
##
  
# Label declaration
A label provides an identifier that allows it to be referenced elsewhere in your program. For example, you can use a label to identify a loop, and then use *break* or *continue* to indicate when the program should break the loop or continue its execution.

Here is the syntax of the label statement:



```javascript
label : declaration
```
A label can use any identifier that is not a JavaScript reserved word. You can identify any instruction with a label.



# Example

#### In this example, the markLoop label identifies a while loop

```javascript
markLoop:
while (theMark == true) {
   do something();
}
```

##
  
# break statement

Use break to end loops, *switch*, or a set that uses label.

* When you use *break* without a label, it will immediately terminate the innermost loop *while*, *do-while*, *for*, or *switch* and transfer control to the next statement.

* When you use break with a label, it will terminate the specific label.

#### Here is the break syntax

* break;
* break label;

 In the first option, the innermost loop or switch will be terminated. In the second option, the code block referring to the label will be closed.
  
## First example

The following example loops through the elements of an array until it finds the index of the element that has the value contained in theValue:


```javascript
for (i = 0; i < a.length; i++) {
  if (a[i] == theValue) {
    break;
  }
}
```


## Second example

```javascript
var x = 0;
var z = 0
labelCancelLoop: while (true) {
  console.log("outer loop: " + x);
  x += 1;
  z = 1;
  while (true) {
    console.log("inner loop: " + z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoop;
    } else if (z === 10) {
      break;
    }
  }
}
```
## 


# Statement continue
The continue statement can be used to restart a while, do-while, for, or label statement.

* When you use continue without a label, it will terminate the current innermost iteration of a while, do-while, or for statement and continue loop execution from the next iteration. Unlike the break statement, continue does not terminate the loop's complete execution. In a while loop it will return to the condition. In a for loop it will jump to the increment expression.

* When you use continue with a label, the continue will be applied to the loop identified by that label.

#### Here is the break syntax:

 #### 1. break;
 #### 2. continue label;

##
                         
## First example

The following example shows a while loop using continue that will execute when the value of i is equal to 3. This way, n takes the values ​​one, three, seven, and twelve.

```javascript
i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continues;
  }
  n += i;
}

```

## Second example

A label checkiandj statement contains a label checkj statement. If continue is executed, the program ends the current iteration of checkj and starts the next iteration. Every time continue is executed, checkj will restart until the while condition is false. When this happens checkiandj will execute until its condition is false.

* If continue was referencing checkiandj, the program should continue from the top of checkiandj.

```javascript
checkiandj:
  while (i < 4) {
    console.log(i);
    i += 1;
    checkj:
      while (j > 4) {
        console.log(j);
        j -= 1;
        if ((j % 2) == 0) {
          continue checkj;
        }
        console.log(j + " is stranger.");
      }
      console.log("i = " + i);
      console.log("j = " + j);
  }
```
## 


# Declaration for...in
The *for...in* statement executes iterations from a specific variable, iterating through all the properties of an object.

For each distinct property, JavaScript will iterate. Here's the syntax:
```
for (variable in object) {
  statements
}
```


## Example

The following function takes in its argument an object and the name of this object. It will then iterate through each element and return a string list, which will contain the property name and its value.



```javascript
function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}

```
#### For an object named car with make and model properties, the result will be:

```
car.make = Ford
car.model = Mustang

```
### Arrays

While it is tempting to use this form to interact with elements of an Array, the for...in statement will return the default name of the property rather than its numeric index. So it's better to use the traditional for with numeric index when interacting with arrays, as for...in interacts with programmer-defined properties rather than array elements.

## 


# Declaration for...of

 The *for...of* statement loops through interactive objects ((including, Array, Map, Set, so forth), performing an iteration for the value of each distinct property.

```
for (variable of object) {
  statements
}
```

The following example shows the difference between for...of and for...in. While for...in interacts with the name of properties, for...of interacts with the value of properties.

## Example




```javascript
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7"
}
```
##                          
---