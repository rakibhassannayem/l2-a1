# Combining Union (|) and Intersection (&) types in TypeScript.

## Intorduction

In typescript Union (|) and Intersection (&) are two important features. They help using multiple types at the same time.

* __Union (|):__ A value can be one the of the multiple types.

* __Intersection (&):__ It creates a new type combining all propertites of multiple types.

## Practical Example

Lets say we have an User and Employee structure.

_Define the Types:_

type User = {
  name: string;
  email: string;
};

type Employee = {
  employeeId: number;
  department: string;
};

_Using Intersection (&):_

we want an employee to have all the properties of an user.

type Staff = User & Employee;

const staff: Staff = {
  name: "Rakib",
  email: "rakib@example.com",
  employeeId: 101,
  department: "Development",
};

here in Staff there are all the properties of both User and Employee.

_Using Union (|):_

Now we want any function to have the Employee ID of type number or string.

type EmployeeId = number | string;

const getEmployee = (id: EmployeeId): string => {
  return `Employee ID: ${id}`;
};

getEmployee(101);
getEmployee("EMP-101");t

here Employee Id can be both number or string.


## Conclusion

Union (|) and Intersection (&) both help working with multiple type in typescript but there work is different.

* Union (|) is used when a value can be any one of multiple types.

* Intersection (&) is used when we need a new type combining multiple properties of multiple types.