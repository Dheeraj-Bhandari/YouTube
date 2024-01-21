/* 
Create a function chainAsync that takes an array of asynchronous functions
 and chains them together using Promises, 
 executing each one after the previous function has resolved.

 */



const asyncTask1 = () => new Promise(resolve => setTimeout(() => resolve('First'), 1000));
const asyncTask2 = () => new Promise(resolve => setTimeout(() => resolve('Second'), 500));
const asyncTask3 = () => new Promise(resolve => setTimeout(() => resolve('Third'), 800));

const tasks = [asyncTask1, asyncTask2, asyncTask3];

function chainAsync(tasks) {
    return tasks.reduce((promiseChain, currentTask) => {
        return promiseChain.then(chainResults =>
            currentTask().then(currentResult => [...chainResults, currentResult])
        );
    }, Promise.resolve([]));
}

// function chainAsync(tasks) {
//     return tasks.reduce((promiseChain, curruntTask) => {
//         return promiseChain.then(chainResult =>
//             curruntTask().then(curValues => [...chainResult, curValues])
//         )
//     }), Promise.resolve([]);
// }

chainAsync(tasks)
    .then(result => {
        console.log(result); // Output: ['First', 'Second', 'Third']
    })
    .catch(error => {
        console.error(error);
    });
