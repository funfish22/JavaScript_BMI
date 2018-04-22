var result = document.querySelector('.header-result');
var data = JSON.parse(localStorage.getItem('listData')) || [];
var list = document.querySelector('.list');
var restResult = document.querySelector('.reset');
var changeIcon = document.querySelector('.header-reset');
var deleteUl = document.querySelector('.list');

result.addEventListener('click', addData, false);
restResult.addEventListener('click', resetData, false); 
updataList(data);


function addData(e){
	e.preventDefault();
	var height = document.getElementById('height').value / 100;
	var weight = document.getElementById('weight').value;
	if(height == ''){
		alert('請輸入身高');
	}
	else if(weight == ''){
		alert('請輸入體重');
	}
	else{
		var bmi = Math.round((weight / (height * height))*100)/100;
		var type = {
			bmi: bmi,
			height: height,
			weight: weight,
		};
		data.push(type);
		updataList(data);
		localStorage.setItem('listData', JSON.stringify(data));
	}
	
	
}

function resetData(e){
	e.preventDefault();
	var height = document.getElementById('height').value / 100;
	var weight = document.getElementById('weight').value;
	if(height == ''){
		alert('請輸入身高');
	}
	else if(weight == ''){
		alert('請輸入體重');
	}
	else{
		var bmi = Math.round((weight / (height * height))*100)/100;
		var type = {
			bmi: bmi,
			height: height,
			weight: weight,
		};
		data.push(type);
		updataList(data);
		localStorage.setItem('listData', JSON.stringify(data));
	}
}

function updataList(item){
	color = '';
	str = '';	
	var len = item.length;
	var Today = new Date();
	week =(Today.getMonth()+1) + " - " + Today.getDate() + " - " + Today.getFullYear()
	for(var i=0; i<len; i++){
		if(item[i].bmi < 18.5){
			str += '<ul data-num="'+ i +'"><div class="blue"></div><li><span>過輕</span></li><li class="text-center"><small>BMI</small><span data-bmi="20.90">'+ item[i].bmi +'</span></li><li class="text-center"><small>weight</small><span data-weight="70">'+ item[i].weight +'kg</span></li><li class="text-center"><small>height</small><span data-height="180">'+ (item[i].height)*100 +'cm</span></li><li class="text-right"><small>'+ week +'</small></li></ul>';
			changeIcon.innerHTML = '<div class="result-icon result-underweight"><p>'+ item[i].bmi +'</p><small>BMI</small></div><span class="result underweight-text">過輕</span>';
			color = '<img class="underweight-reset" src="img/icons_loop.png" alt="">';	
		}
		else if(item[i].bmi >= 18.5 && item[i].bmi<24){
			str += '<ul data-num="'+ i +'"><div class="green"></div><li><span>理想</span></li><li class="text-center"><small>BMI</small><span data-bmi="20.90">'+ item[i].bmi +'</span></li><li class="text-center"><small>weight</small><span data-weight="70">'+ item[i].weight +'kg</span></li><li class="text-center"><small>height</small><span data-height="180">'+ (item[i].height)*100 +'cm</span></li><li class="text-right"><small>'+ week +'</small></li></ul>';
			changeIcon.innerHTML = '<div class="result-icon result-ideal"><p>'+ item[i].bmi +'</p><small>BMI</small></div><span class="result ideal-text">理想</span>';	
			color = '<img class="ideal-reset" src="img/icons_loop.png" alt="">';
		}
		else if(item[i].bmi >= 24 && item[i].bmi<27){
			str += '<ul data-num="'+ i +'"><div class="orange"></div><li><span>過重</span></li><li class="text-center"><small>BMI</small><span data-bmi="20.90">'+ item[i].bmi +'</span></li><li class="text-center"><small>weight</small><span data-weight="70">'+ item[i].weight +'kg</span></li><li class="text-center"><small>height</small><span data-height="180">'+ (item[i].height)*100 +'cm</span></li><li class="text-right"><small>'+ week +'</small></li></ul>';
			changeIcon.innerHTML = '<div class="result-icon result-tooHeavy"><p>'+ item[i].bmi +'</p><small>BMI</small></div><span class="result tooHeavy-text">過重</span>';	
			color = '<img class="tooHeavy-reset" src="img/icons_loop.png" alt="">';
		}
		else if(item[i].bmi >= 27 && item[i].bmi<30){
			str += '<ul data-num="'+ i +'"><div class="orange"></div><li><span>輕度肥胖</span></li><li class="text-center"><small>BMI</small><span data-bmi="20.90">'+ item[i].bmi +'</span></li><li class="text-center"><small>weight</small><span data-weight="70">'+ item[i].weight +'kg</span></li><li class="text-center"><small>height</small><span data-height="180">'+ (item[i].height)*100 +'cm</span></li><li class="text-right"><small>'+ week +'</small></li></ul>';
			changeIcon.innerHTML = '<div class="result-icon result-mildObesity"><p>'+ item[i].bmi +'</p><small>BMI</small></div><span class="result mildObesity-text">輕度肥胖</span>';	
			color = '<img class="mildObesity-reset" src="img/icons_loop.png" alt="">';
		}
		else if(item[i].bmi >= 30 && item[i].bmi<35){
			str += '<ul data-num="'+ i +'"><div class="dark-orange"></div><li><span>中度肥胖</span></li><li class="text-center"><small>BMI</small><span data-bmi="20.90">'+ item[i].bmi +'</span></li><li class="text-center"><small>weight</small><span data-weight="70">'+ item[i].weight +'kg</span></li><li class="text-center"><small>height</small><span data-height="180">'+ (item[i].height)*100 +'cm</span></li><li class="text-right"><small>'+ week +'</small></li></ul>';			
			changeIcon.innerHTML = '<div class="result-icon result-mildObesity"><p>'+ item[i].bmi +'</p><small>BMI</small></div><span class="result mildObesity-text">中度肥胖</span>';	
			color = '<img class="mildObesity-reset" src="img/icons_loop.png" alt="">';
		}
		else if(item[i].bmi >= 35){
			str += '<ul data-num="'+ i +'"><div class="red"></div><li><span>重度肥胖</span></li><li class="text-center"><small>BMI</small><span data-bmi="20.90">'+ item[i].bmi +'</span></li><li class="text-center"><small>weight</small><span data-weight="70">'+ item[i].weight +'kg</span></li><li class="text-center"><small>height</small><span data-height="180">'+ (item[i].height)*100 +'cm</span></li><li class="text-right"><small>'+ week +'</small></li></ul>';			
			changeIcon.innerHTML = '<div class="result-icon result-severeObesity"><p>'+ item[i].bmi +'</p><small>BMI</small></div><span class="result severeObesity-text">重度肥胖</span>';	
			color = '<img class="severeObesity-reset" src="img/icons_loop.png" alt="">';
		}
		
	};

	list.innerHTML = str;
	restResult.innerHTML = color;
}

deleteUl.addEventListener('click',function(e){
	var num = e.target.dataset.num;
	data.splice(num,1);
	updataList(data);
	localStorage.setItem('listData', JSON.stringify(data));
	
},
false)

