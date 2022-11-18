// '/dev/stdin'

// let input = require('fs').readFileSync('./example.txt').toString().split(' ');
// let n = parseInt(input[0]);
// let m = parseInt(input[1]);
// let check = new Array(n + 1).fill(false);
// let result = '';

let answer = [];

const dfs = (nums, num, arr = []) => {
  //3개를 선택한다는가정에 3개가 선택 됐다면 출력
  if (num === 3) answer.push([...arr]);
  else {
    for (let i = 0; i < nums.length; i++) {
      arr.push(nums[i]);
      dfs(nums.slice(i + 1), num + 1, arr);
      arr.pop();
    }
  }
};
dfs([1, 2, 3, 4], 0);
console.log(answer); //[ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]
