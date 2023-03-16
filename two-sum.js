// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // console.log(i +",", j)
            map.set(nums[i] + nums[j], [i, j]);
        }
    }
    return map.get(target);
}

// const nums = [2, 7, 11, 15];
// const target = 9;

const nums = [-2, 11, 80, 20]
const target = 18;

console.log(twoSum(nums, target));

/* You only need to look through the i+1 indicies of the array and calculate the sum.
Example 1:
const nums = [2, 7, 11, 15];
const target = 9;

0,1
0,2
0,3

1,2
1,3

2,1

*/

/* Example 2:
const nums2 = [2, 7, 11, 15, 16];
const target2 = 9;

0,1
0,2
0,3
0,4

1,2
1,3
1,4

2,3
2,4

3,4

*/