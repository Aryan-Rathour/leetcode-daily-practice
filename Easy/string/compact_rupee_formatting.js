// Question: Compact Rupee Formatting
// Implement formatCompactCurrency(n) to format amounts using Indian units: K (thousand), L (lakh), and Cr (crore).
// Requirements:
// - Support negative numbers, 0, null, and undefined.
// - Show at most one decimal place; remove trailing .0.
// - Handle rounding boundaries to avoid outputs like ₹100K or ₹100L.
// - Never use M or B.
// Examples:
// formatCompactCurrency(850)      // "₹850"
// formatCompactCurrency(45000)    // "₹45K"
// formatCompactCurrency(2040000)  // "₹20.4L"
// formatCompactCurrency(9999999)  // "₹1Cr"
// formatCompactCurrency(-45000)   // "-₹45K"
// formatCompactCurrency(null)     // "₹0"

// Target: \(O(1)\) time complexity.


function formatCompactCurrency(n) {
  if (n == null || n === 0) {
    return "₹0";
  }

  const sign = n < 0 ? "-" : "";
  const value = Math.abs(n);

  let amount;
  let suffix;

  if (value >= 9_995_000) {
    amount = value / 10_000_000;
    suffix = "Cr";
  } else if (value >= 99_950) {
    amount = value / 100_000;
    suffix = "L";
  } else if (value >= 1_000) {
    amount = value / 1_000;
    suffix = "K";
  } else {
    return `${sign}₹${value}`;
  }

  const formatted = amount.toFixed(1).replace(/\.0$/, "");

  return `${sign}₹${formatted}${suffix}`;
}




const tests = [
  [850, "₹850"],
  [1000, "₹1K"],
  [45000, "₹45K"],
  [99499, "₹99.5K"],
  [99950, "₹1L"],
  [100000, "₹1L"],
  [2040000, "₹20.4L"],
  [9994999, "₹99.9L"],
  [9995000, "₹1Cr"],
  [37400000, "₹3.7Cr"],
  [-45000, "-₹45K"],
  [0, "₹0"],
  [null, "₹0"],
  [undefined, "₹0"]
];

for (const [input, expected] of tests) {
  const actual = formatCompactCurrency(input);

  console.log(
    actual === expected ? "PASS" : "FAIL",
    "| Input:", input,
    "| Expected:", expected,
    "| Actual:", actual
  );
}

