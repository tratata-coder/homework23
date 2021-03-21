
 let secret = Math.floor(Math.random() * 100) + 1;

 let n = 7;
 
 
 function playRound() {
    ansverPlace.innerHTML = "Проверить";
    let variant = +userVariant.value;
    if(variant == secret){
        messagePlace.innerHTML = `Вы угадали! Это было ${secret}!`;
        secret = Math.floor(Math.random() * 100) + 1;
        n = 8;
    }else if(n <= 1){
        messagePlace.innerHTML = `Вы проиграли, правильный ответ ${secret}`;
        secret = Math.floor(Math.random() * 100) + 1;
        n = 8;
    }else if(variant == 0){
        messagePlace.innerHTML = `Введите число`;
    }else if(variant > secret) {
        messagePlace.innerHTML = `Нет моё число не ${variant}, мое число меньше`;
    }else if(variant < secret) {
        messagePlace.innerHTML = `Нет моё число не ${variant}, мое число больше`;
    }
    n--;
    iPlace.innerHTML = `${n}`;
    document.getElementById('userVariant').value = '';
}
