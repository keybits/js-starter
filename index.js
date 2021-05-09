// a little sample file
const tom = 20;
function f() {
  const x = 'outer';
  {
    const x = 'inner';
  }
  return x;
}
f();
// eslint-disable-next-line no-console
console.log(tom);
