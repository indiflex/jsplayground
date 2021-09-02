function fullName() {
  console.log('last111=', last);

  var last = 'Hong';
  return function (first) {
    return `${last} ${first}`;
  };
}
// let last = 'Lee';
// console.log('last000=', last);

const x = fullName('Gildong');
console.log('🚀 ~ x', x);
console.log('🚀 ~ x', x('Ilsoo'));
console.log('last999=', last);

// let last = 'Lee';
var last;
