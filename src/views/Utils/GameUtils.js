/* eslint-disable no-console */

const EMPTY_BOX = '.';

const X_SIGN = 'X';
const O_SIGN = 'O';

const PLATE_X_SIZE = 3;
const PLATE_Y_SIZE = 3;

const PLATE_SIZE = PLATE_X_SIZE * PLATE_Y_SIZE;

const winboard = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 9],
    [0, 4, 8],
    [2, 4, 6]
]

function isCoordValid(c) {
    return c >= 0 && c <= 2;
}

function getBoxIdFromXY(x, y) {
    return (x * PLATE_X_SIZE) + y;
}

function getBox(plate, x, y) {
    return plate[getBoxIdFromXY(x, y)];
}

function setBox(plate, x, y, sign) {
    const newPlate = plate;
    newPlate[getBoxIdFromXY(x, y)] = sign;
    return newPlate;
}

function printPlate(plate) {
    plate.forEach((box, i) => (((i + 1) % PLATE_X_SIZE)
        ? process.stdout.write(` ${box} `)
        : console.log(` ${box}\n`)));
}

function initPlate() {
    return [...Array(PLATE_SIZE).keys()].map(() => EMPTY_BOX);
}

function isCaseEmpty(plate, x, y) {
    return getBox(plate, x, y) === EMPTY_BOX;
}

function setSign(plate, x, y, sign) {
    return isCoordValid(x)
        && isCoordValid(y)
        && isCaseEmpty(plate, x, y)
        && setBox(plate, x, y, sign);
}

function isThereAWinner(/* plate */) {
    console.log('Implement it for next monday based on the other function');
}

function isGameNull(plate) {
    return !isThereAWinner(plate) && !plate.reduce((state, box) => box === EMPTY_BOX || state, false);
}

export {
    isCaseEmpty,
    isCoordValid,
    getBoxIdFromXY,
    getBox,
    setBox,
    printPlate,
    initPlate,
    setSign,
    isGameNull,
    isThereAWinner,
    X_SIGN,
    O_SIGN,
    winboard
};