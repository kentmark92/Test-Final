
let a = Math.floor((Math.random() * 10) + 1);;
let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let num = parseInt(document.getElementById('number').value);
if ( num === a) {
    alert ('Chúc mừng bạn đã trúng thưởng!')
} else if (num <= 10 && num >=1){
    alert('Bạn đã đoán sai, số trúng thưởng là '+a);
    document.getElementById('number').value="";
} else {
    alert('Nhập vào số từ 1 đến 10');
}
})
