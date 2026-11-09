const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
};
const processInput = (value) => {
    if (typeof value === "string") {
        value = value.trim();
        return value.toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return value ? "Active" : "Inactive";
};
const formatCoordinate = ([latitude, longitude, locationName]) => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
const concatenateArrays = (...arrays) => {
    const arr = arrays.reduce((acc, curr) => [...acc, ...curr], []);
    return arr;
};
const getPopularCourses = (arr, minStudent) => {
    const newArr = arr.filter((c) => c.students >= minStudent && c.isPublished === true);
    return newArr;
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true },
];
console.log(getPopularCourses(courses, 80));
export {};
//# sourceMappingURL=solutions.js.map