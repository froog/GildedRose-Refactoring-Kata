
const { Shop, Item } = require("./gilded_rose");

const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
];

const days = Number(process.argv[2]) || 3;
const gildedRose = new Shop(items);

console.log("Welcome to the Gilded Rose Demo!");
console.log("================================")

for (let day = 1; day <= days; day++) {
  console.log(`\n-------- Day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
