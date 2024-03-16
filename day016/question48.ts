// storing prices in a array
let prices: number[] = [1000,3000,2000];
let prices1: number[] = [5000,1500,2100];

// declearing array
let sorting:number[] = [];

// pusing values of array prices and prices1 to array sorting
for (let i = 0; i < prices.length; i++) {
    sorting.push(prices[i]);
    sorting.push(prices1[i]);
}

// sorting array
console.log(sorting.sort((a,b) => a-b));