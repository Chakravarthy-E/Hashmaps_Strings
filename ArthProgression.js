// let a = 5;
// let total = 0;
// for (let i = 0; i < a; i++) {
//   total = (i + 1) * a;
//   console.log(total);
// }
// const nums = [1, 2, 3];
// const printDoublePlusOne = (n) => console.log(2 * n + 1);
// nums.map(printDoublePlusOne);
const outer = () => {
    const inner = () => console.log('Hello');
    inner();
};
outer();
  