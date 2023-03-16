// https://leetcode.com/problems/binary-search/

const search = (nums, target) => {
    const low = 0;
    const high = nums.length - 1;
    return binarySearch(nums, target, low, high);
}

const binarySearch = (nums, target, low, high) => {
    let mid = Math.floor((low + high)/2);
    if (target == nums[mid]) {
        return mid;
    } else if (nums[mid] > target) {
        return binarySearch(nums, target, low, mid - 1);
    } else if (nums[mid] < target) {
        return binarySearch(nums, target, mid + 1, high);
    }
}

const nums = [-1,0,3,5,9,12];
const target = 9;

console.log(search(nums, target));


