// Hi and welcome to the Gilded Rose. As you know, we are a small inn with a prime location in a prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:
// * All items have a SellIn value which denotes the number of days we have to sell the item
// * All items have a Quality value which denotes how valuable the item is
// * At the end of each day our system lowers both values for every item
// Pretty simple, right? Well this is where it gets interesting:
// * “Aged Brie” actually increases in Quality the older it gets


// * Once the sell by date has passed, Quality degrades twice as fast
// * The Quality of an item is never negative
// * The Quality of an item is never more than 50

// * “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
// We have recently signed a supplier of conjured items. This requires an update to our system:
// * “Conjured” items degrade in Quality twice as fast as normal items

var guildedRose = {
	dayEnd: dayEnd,
	normalItems: [],
	agedItems: [],
	legendaryItems: [],
	backstageItems: [],
	conjuredItems: [],
	expiredItems: []

};

function Item(name, days, value, kind){
	this.name = name;
	this.SellIn = days;
	this.kind = kind;
	this.Quality = value;
	if (value)

	if(kind === "normal"){
		guildedRose.normalItems.push(this);
	}else if (kind === "aged"){
		guildedRose.agedItems.push(this);
	}else if (kind === "legendary"){
		guildedRose.legendaryItems.push(this);
	}else if (kind === "conjured"){
		guildedRose.conjuredItems.push(this);
	}else if (kind === "backstage"){
		guildedRose.backstageItems.push(this);
	} else {
		alert("item has an incorrect 3rd input for 'kind'");
	}
}

function dayEnd(){
	for (let i = 0; i < guildedRose.normalItems.length; i++){
		var item = guildedRose.normalItems[i];
		item.SellIn -= 1;
		if(item.Quality > 0){
			item.Quality -= 1;
		} else
		if(item.SellIn < 0){
			var expNorm = guildedRose.normalItems.splice(i, 1);
			guildedRose.expiredItems.push(expNorm);
		}
	}
	for (let i = 0; i < guildedRose.agedItems.length; i++){
		var item = guildedRose.agedItems[i];
		item.SellIn -= 1;
		if (item.SellIn >= 0){
			if(item.Quality > 47){
				item.Quality = 50;
			} else {
			item.Quality += 2;
			}
		} else if (item.SellIn < 0){
			var expAged = guildedRose.agedItems.splice(i, 1);
			guildedRose.expiredItems.push(expAged);
		}
	}	
	for (let i = 0; i < guildedRose.backstageItems.length; i++){
		var item = guildedRose.backstageItems[i];
		item.SellIn -= 1;
		if(item.Quality < 48){
			if(item.SellIn <= 10){
				item.Quality += 2;
			}else if(item.SellIn <= 5){
				item.Quality += 3;
			}else if (item.SellIn < 0){
				item.Quality = 0;
			}
		} else if (item.Quality >= 48) {
			item.Quality = 50;
		}
	}	
	for (let i = 0; i < guildedRose.conjuredItems.length; i++){
		var item = guildedRose.conjuredItems[i];
		item.SellIn -= 1;
		if(item.Quality >= 2){
			item.Quality -= 2;
		} else if (item.Quality === 1){
			item.Quality = 0;
		}
		if(item.SellIn < 0){
			var expConj = guildedRose.conjuredItems.splice(i, 1);
			guildedRose.expiredItems.push(expConj);
		}
	}
	for (let i = 0; i < guildedRose.expiredItems.length; i++) {
		var item = guildedRose.expiredItems[i][0];
		item.SellIn -= 1;
		if(item.Quality > 1){
			item.Quality -= 2;
		} else {
			item.Quality === 0;
		}
	}
}

var bread = new Item("bread", 5, 5, "normal");
var meat = new Item("meat",2, 10, "normal");
var agedBrie = new Item("Aged Brie",8, 45, "aged");
var sulfuras = new Item("sulfuras",999, 50, "legendary");
var conjured = new Item("conjuredThing",3, 20, "conjured");
var tickets = new Item("Concert Tickets",15, 40, "backstage");








