const fruits = [
	{
		id: 1,
		name: '사과',
		price: 100,
		left: 10,
		dc: 10,
	},
	{
		id: 2,
		name: '감',
		price: 400,
		left: 1,
	},
	{
		id: 3,
		name: '배',
		price: 700,
		left: 2,
		dc: 20,
	},
];

const BUYCNT = 3;
const availableCnt = (f) => (f.left < BUYCNT ? f.left : BUYCNT);
const x = fruits.map((f) => ({
	name: f.name,
	bought: availableCnt(f),
	total: availableCnt(f) * f.price,
	dcamt: availableCnt(f) * f.price * (f.dc || 0) * 0.01,
	payamt: availableCnt(f) * f.price * (100 - (f.dc || 0)) * 0.01,
}));

const y = fruits.map((f) => {
	const bought = f.left < BUYCNT ? f.left : BUYCNT;
	const total = bought * f.price;
	const dcamt = total * (f.dc || 0) * 0.01;
	const payamt = total - dcamt;
	return { name: f.name, bought, dcamt, payamt };
});

console.error(x);
console.log(y);
