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

});




