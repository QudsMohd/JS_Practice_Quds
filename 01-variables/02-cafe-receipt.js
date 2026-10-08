// =============================================
// 1. VARIABLES — Cafe receipt
// =============================================
// 1 OMR = 1000 baisa. We count in baisa to avoid decimals.
// Your order: 2 shawarma (600 baisa each) and 3 karak (150 baisa each).
// Create variables for every price and count, calculate each line and the total.
// Print the total in baisa AND in OMR (divide by 1000).
//
// Expected output:
//   Shawarma: 2 x 600 = 1200 baisa
//   Karak: 3 x 150 = 450 baisa
//   Total: 1650 baisa = 1.65 OMR

// your code here
let shawarma=600;
let shawarma_quantity=2;

let karak=150;
let karak_quantity=3;

let totalShawarma= shawarma* shawarma_quantity;
let totalKarak= karak* karak_quantity;

let totalBaisa= totalKarak+ totalShawarma;
let totalRiyal= totalBaisa/1000;

console.log(`Shawarma: ${shawarma_quantity} x ${shawarma} = ${totalShawarma} baisa`);
console.log(`Karak: ${karak_quantity} x ${karak} = ${totalKarak} baisa`);
console.log(`Total: ${totalBaisa} baisa = ${totalRiyal} OMR`);

