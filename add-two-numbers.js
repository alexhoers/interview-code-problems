// https://leetcode.com/problems/add-two-numbers/

const addTwoNumbers = (s, t) => {

    let sa = s;
    let ta = t;

    const d = ta.length - sa.length;
    const m = Math.max(sa.length, ta.length);

    const arr = new Array(Math.abs(d)).fill(0);


    if (d > 0) {
        sa = sa.concat(arr);
    } else if (d < 0) {
        ta = ta.concat(arr);
    } else {
        // Equal sized arrays. Do nothing.
    }

    const res = [];
    let r = 0;
    let v = 0;

    for (let i = 0; i < m; i++) {
        v = sa[i] + ta[i] + r;
        if (v >= 10) {
            res[i] = v - 10;
            r = 1;
        } else {
            res[i] = v;
            r = 0;
        }
      
    }

    if (r === 1) {
        res.push(r);
    }

    return res;

}

// const s = [2, 4, 3];
// const t = [5, 6, 4];
// const s = [9,9,9,9,9,9,9], t = [9,9,9,9];
// const s = [0], t = [0];
const s = [2, 0, 8], t = [3, 9, 5, 4];

console.log(addTwoNumbers(s, t));