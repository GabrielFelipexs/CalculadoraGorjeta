function calculateTips(event){
    event.preventDefault();
    
    let conta = document.getElementById('conta').value;
    let servicoqual = document.getElementById('servicoqual').value;
    let pessoas = document.getElementById('pessoas').value;

    if(conta == '' | conta == 0){

        alert("Por favor, preencha os valores");
        return;
    }

if(pessoas == " " | pessoas <= 1){

    pessoas = 1;
    document.getElementById('each').style.display = "none";
}else{
    document.getElementById('each').style.display = "block";

}



let total = (conta * servicoqual) / pessoas;
total = total.toFixed(2);
document.getElementById('tip').innerHTML = total;
let total_conta = (parseInt(conta) + parseInt(conta * servicoqual)).toFixed(2);

document.getElementById('tip_total').innerHTML = total_conta;

document.getElementById('totalTips').style.display = "block";



}

document.getElementById('totalTips').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTips);