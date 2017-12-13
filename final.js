//Final JS
var rand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

pCards = [];
dCards = [];

function test4One(num){ 
	return num == 1;
}

function makePCards(){
	//get a random number for a player card
	var pCard = rand[Math.floor(Math.random() * rand.length)];
	//push that number into an array called pCards
	pCards.push(pCard);
	//add all the cards in pCards array
	var total = eval(pCards.join('+'));
	var ones = pCards.filter(test4One);
	//If one of the cards is an ace, and the total equals 11 or less, the ace is equal to 11.
	
	if(total <= 11 && ones.length > 0){
		var iOfOne = pCards.findIndex(test4One);
		pCards[iOfOne] = 11;
		//checking the new total if there is an ace
		total = eval(pCards.join('+'));
		ones = pCards.filter(test4One);	
	}
//checking the total
	if(total == 21){
		console.log('You win');
	}else if(total > 21){
		console.log('You Loose');
	}else{
		console.log('Hit or Stand');
	}	
	document.getElementById('playerHand').innerHTML = 'The Player Hand is: ' + pCards.join(', ') + ' The total is: ' + total;
	display(pCards,'player');
}

function makeDCards(){
	//get a random number for a dealer card
	var dCard = rand[Math.floor(Math.random() * rand.length)];
	//push that number into an array called pCards
	dCards.push(dCard);
	//add all the cards in pCards array
	var total = eval(dCards.join('+'));
	console.log('found total: '+ total);
	var ones = dCards.filter(test4One);
	//If one of the cards is an ace, and the total equals 11 or less, the ace is equal to 11.
	if(total <= 11 && ones.length > 0){
		var iOfOne = dCards.findIndex(test4One);
		dCards[iOfOne] = 11;
		//checking the new total if there is an ace
		total = eval(dCards.join('+'));
		ones = dCards.filter(test4One);
		
	}

	document.getElementById('dealerHand').innerHTML = 'The Dealer Hand is: ' + dCards.join(', ') + ' The total is: ' + total;
	//checking the total
	if(total == 21){
		console.log('You win, Dealer');
	}else if(total > 21){
		console.log('You Loose, Dealer Wins');
	}else if(total <= 17 && dCards.length < 5){
		makeDCards();
	}	
	display(dCards, 'house');
}

function stand(){
	var pTotal = eval(pCards.join('+'));
	var dTotal = eval(dCards.join('+'));
	if(dTotal >= 22 || pTotal >= dTotal && pTotal <= 21){
		document.getElementById('winnerHand').innerHTML = 'The Player has Won! Congratulations!';
	}else{
		document.getElementById('winnerHand').innerHTML = 'House has Won. You Loose!';
	}
}

makePCards();
makePCards();

makeDCards();


function display(array, id){
	document.getElementById(id).innerHTML = '';
	for(var i = 0; i < array.length; i++){
		switch(array[i]){
		 case 1:
		 case 2:
		 case 3:
		 case 4:
		 case 5:
		 case 6:
		 case 7:
		 case 8:
		 case 9:
		 document.getElementById(id).innerHTML += '<img src = images/'+array[i]+'.jpg>';
		 break;
		 case 10:
		 var face = [10, 'J', 'Q', 'K'];
		 var faceChoice = face[Math.floor(Math.random() * face.length)];
		 	document.getElementById(id).innerHTML += '<img src = images/' + faceChoice + '.jpg>'
		 break;
		 case 11:
		 	/*var imgCard=document.createElement('img');
		 	imgCard.src=*/
		 	document.getElementById(id).innerHTML += '<img src = images/1.jpg>';
			 /*document.getElementById('player').innerHTML += '<img scr = images/'+x[i]+'.jpg>';*/
			 break;
		 
		}
	}
}
