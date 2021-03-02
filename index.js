import { parsing } from './parsing.js';
import { solution } from './solution.js';

const main = () => {
    if (process.argv.length !== 3)
    {
        console.log("Usage: ./computor \"<pol> = <pol>\"");
        process.exit(0);
    }

    const equation = process.argv[2];

    solution(parsing(equation));
}

main();
