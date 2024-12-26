let quote=
 [
	'"Live as if you were to die tomorrow. Learn as if you were to live forever.” ― Mahatma Gandhi',
	'"The greatest glory in living lies not in never falling, but in rising every time we fall."  ― Nelson Mandela',
	'"If life were predictable it would cease to be life, and be without flavor." ― Eleanor Roosevelt',
	'"If you are not willing to risk the usual, you will have to settle for the ordinary." ― Jim Rohn',
	'"The only limit to our realization of tomorrow will be our doubts of today." ― Franklin D. Roosevelt',
	'"Perfection is not attainable, but if we chase perfection we can catch excellence." ― Vince Lombardi',
	'"Tell me and I forget. Teach me and I remember. Involve me and I learn." ― Benjamin Franklin',
	'"Two things are infinite: the universe and human stupidity; and I am not sure about the universe." ― Albert Einstein',
	'"It is during our darkest moments that we must focus to see the light." ― Aristotle',
	'"Success is walking from failure to failure with no loss of enthusiasm." ― Winston Churchill',
	'"The successful warrior is the average man, with laser-like focus." ― Bruce Lee',
	'"Keep your face always toward the sunshine - and shadows will fall behind you." ― Walt Whitman',
	'"You know you are in love when you cannot fall asleep because reality is finally better than your dreams." ― Dr. Seuss',
	'"The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb'
];
let colors = ['#93ccea', '#a1d7c9', '#faf0db', '#fd4659', '#f2f2f2'];
let btn= document.getElementById('q-btn');
let redBtn= document.getElementById('red-btn');
let yellowBtn= document.getElementById('yellow-btn');
let blueBtn= document.getElementById('blue-btn');
let greenBtn= document.getElementById('green-btn');
let defBtn=document.getElementById('def-btn');
let output= document.getElementById('output');
let container=document.getElementById('container');
window.onload=function (){
	var randomQuote= quote[Math.floor(Math.random() * quote.length)];
	output.innerHTML = randomQuote;

}
btn.addEventListener('click', function () {

	var randomQuote= quote[Math.floor(Math.random() * quote.length)];
	output.innerHTML = randomQuote;

})
redBtn.addEventListener('click', function(){
	container.style.background = colors[3];
})
yellowBtn.addEventListener('click', function(){
	container.style.background = colors[2];
})
blueBtn.addEventListener('click', function(){
	container.style.background = colors[0];
})
greenBtn.addEventListener('click', function(){
	container.style.background = colors[1];
})

defBtn.addEventListener('click', function(){
	container.style.background = colors[4];
})