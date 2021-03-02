export const parsing = (str) => {
    const equation = str.replace(/\s/g, '').trim()
    const result = {
        a: 0,
        b: 0,
        c: 0,
        // если степень >2 то она не запишется сюда, и не получится показать нормализованный вид
        // надо проверить есть ли степень больше 2 и обрабатывать отдельно

        polynomialDegree: 0,
    };

    const dict = {
        '2': 'a',
        '1': 'b',
        '0': 'c',
    };

    let value = 0;
    let sign = 1;
    let wasEqual = false;
    for (let i = 0; i < equation.length; i++) {
         if ((Number(equation[i]) && equation[i - 1] !== '^') || equation[i] === '.') {
             value = equation[i];
             while (++i < equation.length) {
                 if ((Number(equation[i]) && equation[i - 1] !== '^') || equation[i] === '.') {
                     value += equation[i];
                 } else {
                     break;
                 }
             }
         }

         if (equation[i-1] === '^') {
             result[dict[equation[i]]] += (wasEqual ? sign * -1 : sign) * Number(value);
             result.polynomialDegree = result.polynomialDegree < Number(equation[i]) ? Number(equation[i]) : result.polynomialDegree;

             sign = 1;
         }

         if (equation[i] === '+' || equation[i] === '-') {
            sign = equation[i] === '+' ? 1 : -1;
         }

         if (equation[i] === '=') {
            wasEqual = true;
         }
    }

    return result;
};
