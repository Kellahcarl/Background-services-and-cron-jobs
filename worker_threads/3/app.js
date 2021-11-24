const { StaticPool } = require('node-worker-threads-pool');

let num = [20,25,30,35,40];

// Create a static worker pool with 8 workers
const pool = new StaticPool({
    size: 5,
    task: './worker.js'
})

 

num.map(item=>{
pool.exec({ num : item }).then( result => [
    console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
]);
})

console.log("Execution in the parent thread complete");
