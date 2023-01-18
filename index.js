const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);


const arrayPromise = (...promiseNumber) => Promise.all(promiseNumber);


export const resultPromise = arrayPromise(promiseNumber1, promiseNumber2, promiseNumber3);

resultPromise
    .then(numbersList => {
        console.log(numbersList);
        const sum = numbersList.reduce((acc, num) => acc + num, 0);
        return sum;
    })
    .then(result => {
        console.log(result); // 98
    });