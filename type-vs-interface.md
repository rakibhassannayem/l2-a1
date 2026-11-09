# Difference Between Type and Interface

## Intorduction

In typescript types and interface seems almost similar because they both work for the shape of data. For example - in an user object which property will be there and what are their data types, these can be defined with both of type and interface.

## Detailed Body Paragraphs with Code Examples

There is a small difference between their syntax.

_using interface:_

interface User {
  name: string;
  age: number;
  email: string;
}

_using type:_

type User = {
  name: string;
  age: number;
  email: string;
}

These are defining the same object. Here either of these one we use, typscript checks the object property and their types in same way.

__Difference:__ 

A special benefit interface gives is that we can declare multiple interfaces with the same name and it automatically merge itself which is called declaration merge. for example - 

interface User {
  name: string;
}

interface User {
  age: number;
}

So now User interface has both name and age property.

On the other hand with type we can use Union and Primitive type. For example - 

type ID = string | number;

type Status = "success" | "error" | "loading";

type Age = number;

These are the thing we can not do with interface.


## When we use what

When we need any union type structure then we will use type and other than that typescript recomends to use interfaces whenever we can.


## Conclusion

type and interface are two most important thing in typescript. Other than object structure defining these two has some basic differences.

interface basically more reliable for object structure and declaration merging, on the other hand type is more flexible for primitive, union and function type defining.

In conclusion we can there is nothing which is better than other but which on we will use it will depend on the situation.
