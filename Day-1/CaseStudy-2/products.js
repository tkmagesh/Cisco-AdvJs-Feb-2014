var products = [
	{id:101,name:"pen",units:10,cost:120,category:1},
	{id:102,name:"hen",units:13,cost:100,category:2},
	{id:103,name:"den",units:21,cost:170,category:1},
	{id:104,name:"ten",units:18,cost:110,category:2},
	{id:105,name:"len",units:31,cost:106,category:1},
	{id:106,name:"zen",units:12,cost:150,category:2}
]

function sort(products){
	for(var i = 0;i<products.length-1;i++)
		for(var j=i+1;j<products.length;j++)
			if (products[i].units > products[j].units){
				var temp = products[i];
				products[i] = products[j];
				products[j] = temp;
			}
}

function sort(products,attrName){
	for(var i = 0;i<products.length-1;i++)
		for(var j=i+1;j<products.length;j++)
			if (products[i][attrName] > products[j][attrName]){
				var temp = products[i];
				products[i] = products[j];
				products[j] = temp;
			}
}

//Rewrite the above sort function to sort the products based on "ANY" attribute

function filter(products,criteriaFn){
	var result = [];
	for(var i=0;i<products.length;i++)
		if (criteriaFn(products[i])) result.push(products[i]);
	return result;
}

var categoryCriteriaFn = function(p){ return p.category === 1;}
console.table(filter(products,categoryCriteriaFn));

function filter(products,criteriaFn,prevResult){
	prevResult = prevResult || [];
	if (products.length === 0) return prevResult;
	if (criteriaFn(products[0])) prevResult.push(products[0]);
	return filter([].splice.call(products,1),criteriaFn,prevResult);
}

function groupBy(products,keySelectorFn){
	var groupedItems = {};
	for(var i=0;i<products.length;i++){
		var product = products[i];
			key = keySelectorFn(product);
		if (!groupedItems[key]) groupedItems[key] = [];
		groupedItems[key].push(product);
	}
	return groupedItems;
}