//*---------------------------------------------------------
//*  Interview Question:
//*---------------------------------------------------------
//? Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

const checkTriangleType = (a, b, c) => {
    if(a === b && b === c)
        return "equilateral";
    else if(a === b || b === c || c === a)
        return "isosceles";
    
    return "scalene";
};


console.log(checkTriangleType(5, 51, 10));