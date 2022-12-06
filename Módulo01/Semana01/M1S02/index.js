// Jovens - Indivíduos de até 15 anos;
// Adultos - Indivíduos com idade entre 16 até 64 anos;
// Idosos - Indivíduos de 65 anos em diante.


let idade = window.prompt("Digite sua idade aqui")

if(idade <=15){
    window.alert("Você ainda é jovem!")
} else if (idade >= 16 && idade <=64){
    window.alert("Você ja é adulto!")
}else if (idade >=65){
    window.alert("Você se enquadra na categoria de idosos!")
}