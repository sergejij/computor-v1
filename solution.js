export const solution = (data) => {
    console.log(data);
    const D = data.b**2 - 4 * data.a * data.c;
    console.log(D);

    if (D > 0) {
        const x1 = (-data.b + Math.sqrt(D)) / (2 * data.a);
        const x2 = (-data.b - Math.sqrt(D)) / (2 * data.a);
        console.log('Polynomial degree:', data.polynomialDegree);
        console.log('Discriminant is strictly positive, the two solutions are:');
        console.log(x1);
        console.log(x2);
    } else if (D === 0) {
        const x = -data.b/ (2 * data.a);
        console.log(x);
    } else {
        console.log("уравнение не имеет корней");
    }
};
