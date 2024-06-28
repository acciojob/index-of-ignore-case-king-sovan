function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const normalizedS1 = s1.toLowerCase();
    const normalizedS2 = s2.toLowerCase();

    // Check for edge cases
    if (normalizedS2.length === 0) return 0; // Empty s2 at the start of s1

    // Search for the first occurrence of s2 in s1
    const index = normalizedS1.indexOf(normalizedS2);

    // Return the index if found, otherwise return -1
    return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
