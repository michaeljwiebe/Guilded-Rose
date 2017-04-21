var guildedRose = {
	dayEnd: dayEnd,
	normalItems: [],
	agedItems: [],
	legendaryItems: [],
	backstageItems: [],
	conjuredItems: [],
	expiredItems: []
};
var bread = new Item("bread", 5, 5, "normal");
var meat = new Item("meat",2, 10, "normal");
var agedBrie = new Item("Aged Brie",8, 45, "aged");
var sulfuras = new Item("sulfuras",999, 50, "legendary");
var conjured = new Item("conjuredThing",3, 20, "conjured");
var tickets = new Item("Concert Tickets",15, 40, "backstage");

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
		var itemNorm = guildedRose.normalItems[i];
		itemNorm.SellIn -= 1;
		if(itemNorm.Quality > 0){
			itemNorm.Quality -= 1;
		} else
		if(itemNorm.SellIn < 0){
			var expNorm = guildedRose.normalItems.splice(i, 1);
			guildedRose.expiredItems.push(expNorm);
		}
	}
	for (let i = 0; i < guildedRose.agedItems.length; i++){
		var itemAged = guildedRose.agedItems[i];
		itemAged.SellIn -= 1;
		if (itemAged.SellIn >= 0){
			if(itemAged.Quality > 47){
				itemAged.Quality = 50;
			} else {
			itemAged.Quality += 2;
			}
		} else if (itemAged.SellIn < 0){
			var expAged = guildedRose.agedItems.splice(i, 1);
			guildedRose.expiredItems.push(expAged);
		}
	}	
	for (let i = 0; i < guildedRose.backstageItems.length; i++){
		var itemBackstage = guildedRose.backstageItems[i];
		itemBackstage.SellIn -= 1;
		if(itemBackstage.Quality < 48){
			if(itemBackstage.SellIn > 10){
				itemBackstage.Quality += 1;
			}else if(itemBackstage.SellIn <= 10){
				itemBackstage.Quality += 2;
			}else if(itemBackstage.SellIn <= 5){
				itemBackstage.Quality += 3;
			}else if (itemBackstage.SellIn < 0){
				itemBackstage.Quality = 0;
			}
		} else if (itemBackstage.Quality >= 48) {
			itemBackstage.Quality = 50;
		}
	}	
	for (let i = 0; i < guildedRose.conjuredItems.length; i++){
		var itemConjured = guildedRose.conjuredItems[i];
		itemConjured.SellIn -= 1;
		if(itemConjured.Quality >= 2){
			itemConjured.Quality -= 2;
		} else if (itemConjured.Quality === 1){
			itemConjured.Quality = 0;
		}
		if(itemConjured.SellIn < 0){
			var expConj = guildedRose.conjuredItems.splice(i, 1);
			guildedRose.expiredItems.push(expConj);
		}
	}
	for (let i = 0; i < guildedRose.expiredItems.length; i++) {
		var itemExp = guildedRose.expiredItems[i][0];
		itemExp.SellIn -= 1;
		if(itemExp.Quality > 1){
			itemExp.Quality -= 2;
		} else {
			itemExp.Quality = 0;
		}
	}
}