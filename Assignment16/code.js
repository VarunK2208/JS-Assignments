
//use timeout inside a loop to avoid this delay problem

for(let i = 1; i<=5 ; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}

//i * 1000 is used to maintain 1 sec exact gap between each value in a for loop