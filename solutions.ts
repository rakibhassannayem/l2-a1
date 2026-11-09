const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    value = value.trim();
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }

  return value ? "Active" : "Inactive";
};

const formatCoordinate = ([latitude, longitude, locationName]: readonly [
  number,
  number,
  string,
]): string => {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): Array<T> => {
  const arr = arrays.reduce((acc, curr) => [...acc, ...curr], []);

  return arr;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (arr: Course[], minStudent: number): Course[] => {
  const newArr = arr.filter(
    (c) => c.students >= minStudent && c.isPublished === true,
  );

  return newArr;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const arr = items.map((i) => i[key]);

  return arr;
};

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  try {
    if (age >= 18) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return "Access Granted";
    } else {
      throw new Error("Access Denied: Must be 18 or older");
    }
  } catch (error) {
    throw error;
  }
};

