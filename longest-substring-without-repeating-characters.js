// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (s) => {
    let arr = [];
    const output = [];
    let c, size;
    // Iterate through all characters in the string
    for (let i = 0; i < s.length; i++) {
        c = s.charAt(i);
        // Push substring size and clear map, if the character has been stored previously
        if (arr.includes(c)) {
            output.push(arr.length);
            arr = [];
        // Store the character and push the size, if the character hasn't been stored previously
        // and the end of the string s is reached.
        } else if (i == s.length - 1) {
            arr.push(c);
            output.push(arr.length);
        }
        arr.push(c);
    } 
    return Math.max(...output);
}

// let s = "pwwkew";
let s = "!%&..1sb?+3yf.lo123456789";
console.log(lengthOfLongestSubstring(s));