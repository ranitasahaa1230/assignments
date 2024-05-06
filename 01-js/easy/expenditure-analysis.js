/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
const categoryMap=new Map();

  transactions.forEach((transaction)=>{
    const {category,price}=transaction;
    if(categoryMap.has(category)){
      categoryMap.set(category, categoryMap.get(category)+price)
    }else{
      categoryMap.set(category,price)
    }
  })
  // console.log(categoryMap);

  const result=[];
  categoryMap.forEach((totalSpent, category)=>{
    result.push({category, totalSpent})
  })

  return result;
}

const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 5,
    category: 'Ice',
    itemName: 'Pizza',
  },
];

console.log(calculateTotalSpentByCategory(transactions))
module.exports = calculateTotalSpentByCategory;
