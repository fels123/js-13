// mainHeading should store the <h1> element
const mainHeading = document.querySelector("main h1");
// secondAdvantage should store the second (!) <li> element (<li>Available</li>)
const secondAdvantage = document.querySelectorAll("#advantages ul li")[1];
// advDiv should store the <div> with the id advantages
const advDiv = document.getElementById("advantages");
// Use the DOM selection tools you learned about to get access to those
// elements and store them in the three variables.

console.log("Main Heading Text:", mainHeading.textContent);
console.log("Second Advantage Text:", secondAdvantage.textContent);
console.log("Advantages", advDiv.textContent);
