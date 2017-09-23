//var inventory = [
//  {
//    name: 'Brunello Cucinelli',
//    shoes: [
//      {name: 'tasselled black low-top lace-up', price: 1000},
//      {name: 'tasselled green low-top lace-up', price: 1100},
//      {name: 'plain beige suede moccasin', price: 950},
//      {name: 'plain olive suede moccasin', price: 1050}
//    ]
//  },
//  {
//    name: 'Gucci',
//    shoes: [
//      {name: 'red leather laced sneakers', price: 800},
//      {name: 'black leather laced sneakers', price: 900}
//    ]
//  }
//];
//Now output the average cost of all shoes per designer in this format:  
//var expected = {
//  'designers': [
//    {
//      'name': 'Brunello Cucinelli',
//      'averagePrice': 1025
//    },
//    {
//      'name': 'Gucci',
//      'averagePrice': 850
//    }
//  ]
//};

function renderAverageCostPerDesigner(inventory) {
  return inventory.reduce((memo, currVal) => {
    let averageObj = {};
    let average = 0;
    currVal.shoes.forEach((shoe) => {
      average += shoe.price;
    });
    averageObj['name'] = currVal.name;
    averageObj['averagePrice'] = average / currVal.shoes.length;
    memo.designers.push(averageObj);
    return memo;
  }, {'designers': []});
}