import { parsing } from './parsing.js';
import { solution } from './solution.js';

const main = () => {
    const equation = process.argv[2];

    solution(parsing(equation));
}

main();
