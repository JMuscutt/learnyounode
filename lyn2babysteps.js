var numbs = process.argv;
var total = 0;
for (var i = 2; i < numbs.length; i++) {
        total += Number(numbs[i]);
    }
console.log(total);
