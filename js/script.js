window.addEventListener('DOMContentLoaded', () => {

	let figureA = document.getElementById('figure-a'),
			figureAarrow = document.getElementById('figure-a_arrow'),
			figureB = document.getElementById('figure-b'),
			figureBarrow = document.getElementById('figure-b_arrow'),
			inputA = document.getElementById('inputa'),
			inputAtext = document.getElementById('inputa_text'),
			inputB = document.getElementById('inputb'),
			inputBtext = document.getElementById('inputb_text'),
			span = document.getElementsByTagName('span'),
			aplusbInput = document.getElementById('aplusb_input');
	
	// console.log(inputAtext.innerHTML = 10);
	function visArrow() {
		// console.log('Проверка таймера');
		figureA.classList.remove('hide');
		figureAarrow.classList.remove('hide');
		inputA.classList.remove('hide');
		// console.log(span);
		// console.log('Класс Hide ' + figureA.classList.contains('hide'));
	}
	setTimeout(visArrow, 1000);
	
	inputA.addEventListener('keyup', () => {
		// console.log(inputA.value);
		if (inputA.value != 7) {
			span[0].style.backgroundColor = 'orange';			
			inputA.style.color = 'red';			
		} else {
			span[0].style.backgroundColor = 'transparent';
			// console.log('Иначе');
			inputA.style.color = 'black';
			inputA.classList.add('hide');
			inputAtext.classList.remove('hide');
			inputAtext.innerHTML = inputA.value;	
			figureB.classList.remove('hide');
			figureBarrow.classList.remove('hide');
			inputB.classList.remove('hide');
		}
	});

	inputB.addEventListener('keyup', () => {
		if (inputB.value != 4) {
			span[1].style.backgroundColor = 'orange';			
			inputB.style.color = 'red';	
		} else {
				span[1].style.backgroundColor = 'transparent';
				inputB.style.color = 'black';
				inputB.classList.add('hide');
				inputBtext.classList.remove('hide');
				inputBtext.innerHTML = inputB.value;				
				span[2].classList.add('hide');
				aplusbInput.classList.remove('hide');				
			}
		});
		
		aplusbInput.addEventListener('keyup', () => {
			if (aplusbInput.value != 11) {			
				aplusbInput.style.color = 'red';	
			} else {
					aplusbInput.style.color = 'black';
					aplusbInput.classList.add('hide');				
					span[2].innerHTML = aplusbInput.value;
					span[2].classList.remove('hide');				
		}
	});






	let canvas = document.getElementById('cnvs'),
			ctx = canvas.getContext('2d');

	// ctx.lineWidth = 2; // толщина линии
	// ctx.moveTo(0, 100); //передвигаем перо
	// ctx.lineTo(300, 100); //рисуем линию
	// ctx.arc(41,150,40,0,Math.PI*2,true);
	// ctx.stroke();
	// ctx.quadraticCurveTo(100,130,130,115);

	ctx.beginPath();
	ctx.moveTo(300,75);
	ctx.quadraticCurveTo(145,-5,0,75);
	ctx.strokeStyle = '#9C5D7C';
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(180,30);
	ctx.quadraticCurveTo(185,60,190,40);
	ctx.stroke();


	ctx.beginPath();
	// ctx.arc(80, 100, 50, 3/4 * Math.PI, 1/4 * Math.PI, true);
	ctx.fill(); // *14
	ctx.moveTo(40, 140);
	ctx.lineTo(20, 40);
	ctx.lineTo(60, 100);
	ctx.lineTo(70, 40);
	// ctx.lineTo(100, 100);
	// ctx.lineTo(140, 40);
	// ctx.lineTo(120, 140);
	ctx.stroke(); // *22

	// ctx.beginPath();
	// ctx.moveTo(230,40);
	// ctx.quadraticCurveTo(235,60,240,40);
	// ctx.stroke();


	// ctx.strokeStyle = "#000";
	// ctx.fillStyle = "#ff6";
	// ctx.beginPath();
	// ctx.arc(215,100,5,0,Math.PI*2,true);
	// ctx.closePath();
	// ctx.stroke();
	// ctx.fill();
	// ctx.fillStyle = "#fa6";
	// ctx.beginPath();
	// ctx.arc(230,100,5,0,Math.PI*2,true);
	// ctx.closePath();
	// ctx.stroke();
	// ctx.fill();
	// ctx.fillStyle = "#aa6";
	// ctx.beginPath();
	// ctx.arc(250,100,5,0,Math.PI*2,true);
	// ctx.closePath();
	// ctx.stroke();
	// ctx.fill();

	console.log(canvas);

});




