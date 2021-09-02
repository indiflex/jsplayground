console.log(Number.MAX_SAFE_INTEGER, Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER, Number.MIN_VALUE);
console.log(NaN, typeof NaN, typeof Number.NaN, Number.EPSILON + 1);

const s = Symbol('sss');
const t = s;
// console.log('🚀 ~ s', s, typeof s, s === t, Symbol('x') === Symbol('x'));

const n = null;
const u = undefined;
console.log(n, typeof n);
console.log(u, typeof u);
