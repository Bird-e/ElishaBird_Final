//Final JS
var rand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

pCards = [];
dCards = [];
var bet = 5;


function test4One(num){ 
	return num == 1;
}
function test4Eleven(num){ 
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
		document.getElementById('winnerHand').innerHTML = 'The Player has won!';
	}else if(total > 21){
		document.getElementById('winnerHand').innerHTML = 'The House has won!';
	}else{
		document.getElementById('winnerHand').innerHTML = 'Please Click Hit or Stand';
	}	
	document.getElementById('playerHand').innerHTML = 'The Player Hand is: ' + pCards.join(', ') + ' The total is: ' + total;
	display(pCards,'player');
}

function makeDCards(){
	//get a random number for a player card
	var dCard = rand[Math.floor(Math.random() * rand.length)];
	//push that number into an array called pCards
	dCards.push(dCard);
	//add all the cards in pCards array
	var total = eval(dCards.join('+'));
	var ones = dCards.filter(test4One);
	//If one of the cards is an ace, and the total equals 11 or less, the ace is equal to 11.
	
	if(total <= 11 && ones.length > 0){
		var iOfOne = dCards.findIndex(test4One);
		dCards[iOfOne] = 11;
		//checking the new total if there is an ace
		total = eval(dCards.join('+'));
		ones = dCards.filter(test4One);	
	}
//Displaying the Dealer's Hand	
	document.getElementById('dealerHand').innerHTML = 'The Dealer Hand is: ' + dCards.join(', ') + ' The total is: ' + total;
	display(dCards,'house');
}

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

function hit(){
	makePCards();
	var ptotal = eval(pCards.join('+'));
	var dtotal = eval(dCards.join('+'));
	var betNew = parseInt(document.getElementById('betNum').value);
	if(pCards.length >= 6){
		alert('You have lost! You have gone over the 5 card limit.');
		bet -= betNew;
	}else if(dCards.length >= 6){
		bet += betNew;
	}
	if(dtotal <= 17){
		makeDCards();
		dtotal = eval(dCards.join('+'));
	}
	if(ptotal == 21 || dtotal > 21){
		document.getElementById('winnerHand').innerHTML = 'Player has won!';
		bet += betNew;
		document.getElementById('bank').innerHTML = 'Your new Total is: ' + bet;
	}else if(dtotal == 21 || ptotal > 21){
		document.getElementById('winnerHand').innerHTML = 'House has won!';
		bet -= betNew;
		document.getElementById('bank').innerHTML = 'Your new Total is: ' + bet;
	}
}

function stand(){
	var ptotal = eval(pCards.join('+'));
	var dtotal = eval(dCards.join('+'));
	var betNew = parseInt(document.getElementById('betNum').value);

	if(ptotal >= dtotal && ptotal <= 21){
		document.getElementById('winnerHand').innerHTML = 'Player Has Won!';
		bet += betNew;
		document.getElementById('bank').innerHTML = 'Your new Total is: ' + bet;
	}else if(dtotal > 21 && ptotal < 21){
		document.getElementById('winnerHand').innerHTML = 'Player Has Won!';
		bet += betNew;
		document.getElementById('bank').innerHTML = 'Your new Total is: ' + bet;
	}else if(ptotal > 21){
		document.getElementById('winnerHand').innerHTML = 'The House Has Won!'
		bet -= betNew;
		document.getElementById('bank').innerHTML = 'Your new Total is: ' + bet;
	}else if(ptotal < dtotal && ptotal < 21 && dtotal <= 21){
		document.getElementById('winnerHand').innerHTML = 'The House Has Won!'
		bet -= betNew;
		document.getElementById('bank').innerHTML = 'Your new Total is: ' + bet;
	}else{
		document.getElementById('winnerHand').innerHTML = 'The House Has Won!'
		document.getElementById('bank').innerHTML = 'Your new Total is: ' + totalBetDown;
	}
}

function clearGame(){
	console.log(document.getElementById('dealerHand'));
	document.getElementById('dealerHand').innerHTML = '';
	console.log(document.getElementById('dealerHand'));

	document.getElementById('house').innerHTML = '';
	document.getElementById('playerHand').innerHTML = '';
	document.getElementById('winnerHand').innerHTML = '';
	document.getElementById('player').innerHTML = '';
	pCards = [];
	dCards = [];
	makePCards();
	makePCards();
	makeDCards();
	makeDCards();
}


function beginGame(){

	makePCards();
	makePCards();

	makeDCards();
	makeDCards();
	var ptotal = eval(pCards.join('+'));
	var dtotal = eval(dCards.join('+'));
	var betNew = parseInt(document.getElementById('betNum').value);
	if(ptotal == 21){
		document.getElementById('winnerHand').innerHTML = 'The Player has won';
		bet += betNew;
		document.getElementById('bank').innerHTML = 'Your new Total is: ' + bet;
	}else if(dtotal == 21){
		document.getElementById('winnerHand').innerHTML = 'The House has won';
		bet -= betNew;
		document.getElementById('bank').innerHTML = 'Your new Total is: ' + bet;
	}
}


