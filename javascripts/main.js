const bases = ["Coffee", "Chicory", "Hot Water", "Ristretto", "Espresso", "Hot Chocolate"];
const flavors = ["Mocha Syrup", "French Vanilla Creamer", "Brown Sugar", "Chai Spice", "Irish Whiskey", "Cherries", "Caramel"];
const toppers = ["Chili Powder", "Coffee Foam", "Shaved Chocolate", "Milk Foam", "Pumpkin Spice", "Whipped Cream"];
const lactose = ["Cream", "Half and Half", "Condensed Milk", "Steamed Milk", "Ice Cream", "Warm Milk", "Milk"];
const cups = ["Mug", "Small Tumbler", "Large Tumbler", "Cappucino Cup", "Glass Demitasse", "Irish Coffee Glass", "Latte Glass"];

function uniq(a) {
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    return out;
}

function makeRecipe() {
  let bas = [];
  let flavs = [];
  let tops = [];
  let lac = lactose[Math.floor(Math.random() * lactose.length)];
  let cup = cups[Math.floor(Math.random() * cups.length)];

  for (i = 0; i < Math.floor(Math.random() * 2) + 1; i++) {
    bas.push(bases[Math.floor(Math.random() * bases.length)]);
  }

  let ingredients = uniq(bas).map(ing => Math.floor(Math.random() * 4 + 1).toString() + " oz " + ing);

  ingredients.push(Math.floor(Math.random() * 5 + 1).toString() + " oz " + lac);

  for (i = 0; i < Math.floor(Math.random() * 3); i++) {
    ingredients.push(flavors[Math.floor(Math.random() * flavors.length)]);
  }

  for (i = 0; i < Math.floor(Math.random() * 3); i++) {
    tops.push(toppers[Math.floor(Math.random() * toppers.length)]);
  }

  let s = "Combine the following in a " + cup + ":<br>";
  s +=  uniq(ingredients).join('<br>');
  if (tops.length > 0)
    s += "<br>Top with " + uniq(tops).join(" and ") + ", and serve hot.";
  else s += "<br> Serve hot.";
  return s;
}

$(document).ready(function() {
  $("#recipe")[0].innerHTML = makeRecipe();
});
