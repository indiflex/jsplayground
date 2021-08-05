const fruits = [
  { id: 1, name: '사과', price: 100, left: 10, dc: 10 },
  { id: 2, name: '감', price: 400, left: 1 },
  { id: 3, name: '배', price: 700, left: 2, dc: 20 },
];

let fruitArr = [];

function getFruit() {
  const result = fruits.map((fruit) => {
    let fruitObj = {
      name: '',
      bought: null,
      total: null,
      dcamt: null,
      payamt: null,
    };
    if (fruit.left > 3) {
      fruitObj['name'] = fruit.name;
      fruitObj['bought'] = 3;
      fruitObj['total'] = 3 * fruit.price;
      fruitObj['payamt'] = fruitObj['total'] * (1 - fruit.dc / 100);
      fruitObj['dcamt'] = fruitObj['total'] * (fruit.dc / 100);
    } else {
      fruitObj['name'] = fruit.name;
      fruitObj['bought'] = fruit.left;
      fruitObj['total'] = fruit.left * fruit.price;
      fruitObj['dcamt'] = fruit.dc ? fruitObj['total'] * (fruit.dc / 100) : 0;
      fruitObj['payamt'] = fruitObj['total'] - fruitObj['dcamt'];
    }
    return fruitObj;
  });

  console.log(result);
}
getFruit();
