const fs = require("fs");

const code = fs.readFileSync("index.js", "utf8");

let marks = 0;

console.log("========== React Practical 1 ==========\n");

// Test 1 - React.createElement()
if (/React\.createElement\s*\(/.test(code)) {
    console.log("✓ Test 1 Passed : React.createElement() used");
    marks += 3;
} else {
    console.log("✗ Test 1 Failed : React.createElement() not found");
}

// Test 2 - h1 Element
if (/["']h1["']/.test(code)) {
    console.log("✓ Test 2 Passed : h1 element created");
    marks += 2;
} else {
    console.log("✗ Test 2 Failed : h1 element missing");
}

// Test 3 - Correct Text
if (/Welcome to React/.test(code)) {
    console.log("✓ Test 3 Passed : Correct text displayed");
    marks += 2;
} else {
    console.log("✗ Test 3 Failed : Text incorrect");
}

// Test 4 - createRoot()
if (/ReactDOM\.createRoot/.test(code)) {
    console.log("✓ Test 4 Passed : createRoot() used");
    marks += 2;
} else {
    console.log("✗ Test 4 Failed : createRoot() missing");
}

// Test 5 - render()
if (/\.render\s*\(/.test(code)) {
    console.log("✓ Test 5 Passed : render() called");
    marks += 1;
} else {
    console.log("✗ Test 5 Failed : render() missing");
}

console.log("\n=======================================");
console.log("Total Marks :", marks, "/10");

if (marks === 10) {
    console.log("All Test Cases Passed.");
    process.exit(0);
} else {
    console.log("Some Test Cases Failed.");
    process.exit(1);
}