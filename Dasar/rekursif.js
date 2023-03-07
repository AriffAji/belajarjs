// membuat rekursif

//faktorial
// function cetakAngka(n) {
//   //basecase
//   if (n === 0) return 1;
//   //basecase // ketika tidak ada basecase program akan looping tak terhingga hingga js akan mengeluarkan sebuah warning maximum exceeded
//   return n * cetakAngka(n - 1);
// }

// console.log(cetakAngka(5));

// program to display fibonacci sequence using recursion
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// take nth term input from the user
const nTerms = prompt("Enter the number of terms: ");

if (nTerms <= 0) {
  console.log("Enter a positive integer.");
} else {
  for (let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
  }
}

console.log(fibonacci(10));

// !! fungsi rekrusif contoh nyatanya adalah faktorial
