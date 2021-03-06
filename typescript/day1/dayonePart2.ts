import fs from 'fs';

const data: string = fs.readFileSync('./data/dayOnePuzzle.txt','utf8')

const calcFuel = (n: number): number => {
    const f = Math.max(Math.floor(n / 3) - 2, 0);
    return f + (f > 0 ? calcFuel(f) : 0)
};

const fuelSum = data
.split(/\r?\n/)
.map(f => calcFuel(+f))
.reduce( (t, f) => t + f, 0);

console.log({fuelSum})