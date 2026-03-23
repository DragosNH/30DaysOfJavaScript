// --- Level 3 ---
console.log("------ Level 3 ------");

// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

/*
- Sort the array and find the min and max age
- Find the median age(one middle item or two middle items divided by two)
- Find the average age(all items divided by number of items)
- Find the range of the ages(max minus min)
- Compare the value of (min - average) and (max - average), use abs() method
*/
console.log("--- Sorted, min and max values ---");
const sortedAges = ages.sort()
console.log(sortedAges);
const min = Math.min(...sortedAges)
console.log(min);
const max = Math.max(...sortedAges)
console.log(max);

console.log("--- Median ---");
let mid = Math.floor(sortedAges.length/2);
const median = (sortedAges[mid - 1] + sortedAges[mid]) / 2
console.log(median);

console.log("--- Average ---");
const average = ages.reduce((sum, num) => sum + num, 0) / ages.length
console.log(average);

console.log("--- Range ---");
const range =  max - min;
console.log(range);


console.log("--- Compare ---");
const absMin = Math.abs(min - average);
const absMax = Math.abs(max - average);

if (absMax > absMin){
    console.log(`${absMax} > ${absMin}`);
} else {
    console.log(`${absMax} < ${absMin}`);
}



