const abs = (number) => number < 0 ? -number : number;

const sqrt = (number) => {
    let left = 0;
    let right = 0;
    let medium = 0;

    right = number / 2
    while (right - left > 0.000000001) {
        medium = left + (right - left) / 2
        if (medium * medium < number) {
            left = medium
        } else {
            right = medium
        }
    }
    return left
};

const makeReduceForm = (data) => {
    const c = data.c ? `${data.c > 0 ? '' : '-'}${abs(data.c)} * X^0 ` : '';
    const b = data.b ? `${data.b > 0 ? '+' : '-'} ${abs(data.b)} * X^1 ` : '';
    const a = data.a ? `${data.a > 0 ? '+' : '-'} ${abs(data.a)} * X^2 ` : '';
    return `${c}${b}${a}= 0`;
};

export const solution = (data) => {
    const D = data.b**2 - 4 * data.a * data.c;
    console.log('Reduced form:', makeReduceForm(data));
    console.log('Polynomial degree:', data.polynomialDegree);

    if (!data.a) {
        console.log('The solution is:', -data.c/data.b);
        return;
    }

    if (D > 0) {
        const x1 = (-data.b + sqrt(D)) / (2 * data.a);
        const x2 = (-data.b - sqrt(D)) / (2 * data.a);
        console.log('Discriminant is strictly positive, the two solutions are:');
        console.log(x2);
        console.log(x1);
    } else if (D === 0) {
        const x = -data.b/ (2 * data.a);
        console.log(x);
    } else {
        console.log("уравнение не имеет корней");
    }
};
