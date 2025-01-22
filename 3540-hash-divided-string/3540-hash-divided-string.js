/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
 
    const n = s.length;

    // Check if n is divisible by k
    if (n % k !== 0) {
        throw new Error("The length of the string must be a multiple of k.");
    }

    const numSubstrings = n / k; // Number of substrings
    let result = "";

    for (let i = 0; i < numSubstrings; i++) {
        // Extract the substring of length k
        const substring = s.slice(i * k, (i + 1) * k);

        // Calculate the hash value of the substring
        let sum = 0;
        for (const char of substring) {
            sum += char.charCodeAt(0) - "a".charCodeAt(0);
        }

        // Calculate the hashed character index
        const hashedCharIndex = sum % 26;

        // Convert hashed index to a character
        const hashedChar = String.fromCharCode("a".charCodeAt(0) + hashedCharIndex);

        // Append the hashed character to the result
        result += hashedChar;
    }

    return result;
}

