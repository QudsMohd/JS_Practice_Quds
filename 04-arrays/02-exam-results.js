// =============================================
// 4. ARRAYS — Exam results
// =============================================
// 1. Count how many students passed (score 60 or more).
// 2. Find the lowest score WITHOUT Math.min.
//
// Expected output:
//   Passed: 4 of 7
//   Lowest score: 39

const scores = [78, 45, 92, 60, 55, 88, 39];

// your code here
sum= 0;
for(let i=0; i<scores.length; i++){
    if(scores[i]>=60){
        sum=sum+1;             //if that student pass add him so +1

    }
}
console.log(`Passed: ${sum} of ${scores.length}`);

let lowestScore=scores[0]; //I will store it in the begining
for (let score of scores){
    if(score <lowestScore){
        lowestScore=score;       //I used another way of for loop to practice both
    }
}
console.log(`Lowest score: ${lowestScore}`);
