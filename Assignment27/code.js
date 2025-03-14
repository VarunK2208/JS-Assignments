//JS MEMOIZATION
//memoization is used to improve the performance of complex functions 
//they depend on closures and high order functions 
//memoization increases time complexity 

//fib series without memoization 
const fib = (n) => {
    if (n<2) return n;
    return fib(n-1) + fib(n-2);
};

console.time('time');
console.log(fib(12));
console.timeEnd('time');


//fib series with memoization 
const fib2 = (m,memo = {}) => {   //memo is an empty obj used for caching previous stored values 
    if(m in memo) return memo[m];  //if m is present in memo returns cache 
    if(m<2) return m;

    memo[m] = fib2(m-1,memo) + fib2(m-2,memo)  //first stores the value and then return it 
    return memo[m];
};

console.time('memoized time');
console.log(fib2(12));
console.timeEnd('memoized time');

//memoization stores the values instead calling everytime in a recursive code and it saves time 