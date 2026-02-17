// LeetCode Problem 3
// Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(left, map.get(s[right]) + 1);
        }

        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test Cases
let input1 = "abcabcbb";
let input2 = "bbbbb";
let input3 = "pwwkew";

console.log("Input:", input1);
console.log("Output:", lengthOfLongestSubstring(input1));

console.log("Input:", input2);
console.log("Output:", lengthOfLongestSubstring(input2));

console.log("Input:", input3);
console.log("Output:", lengthOfLongestSubstring(input3));