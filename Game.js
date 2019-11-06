const Locais = LocalAleatorio();

const Embarcacoes = NavioEncontrado();

function LocalAleatorio (){
    const randomLoc = Math.floor(Math.random() * 5);
    const randomID = Math.floor(Math.random() * 3);
    const LocalP1 = randomLoc;
    const LocalP2 = LocalP1 + 1;
    const LocalP3 = LocalP2 + 1;
     
const Locais = {
    Id : randomID,
    Parte1 : LocalP1,
    Parte2 : LocalP2,
    Parte3 : LocalP3
}
return Locais
}
function NavioEncontrado(){
    const Embar1 = {
        Nome: "Perola",
        Preco: 3000,
        Velocidade: "Rapido"
    };
    const Embar2 = {
        Nome: "Skull King",
        Preco: 2000,
        Velocidade: "lento"
    
    };
    const Embar3 = {
        Nome: "Holandes",
        Preco: 3500,
        Velocidade: "Rapido"
    };
    let Embarcacoes ;
    if (Locais.Id == 0){
        Embarcacoes = Embar1;
    }
     else if (Locais.Id == 1){
        Embarcacoes = Embar2;
     }
      else {
         Embarcacoes = Embar3;
     }
    return Embarcacoes;
}
function EncontreNavio(Locais, Acertos, Contador, Navio){
let Palpite;

for(;Contador == false;){
    
    Palpite = prompt ("Digite um numero entre 0 e 6");
    if(Palpite < 0 || Palpite > 6){
        console.log("por favor insira um número de celula valido!");
    } else {

if (Palpite == Locais.Parte1 || Palpite == Locais.Parte2 || Palpite == Locais.Parte3){
    Acertos = Acertos + 1;
    console.log("Acertou uma Parte do Navio no Local " + Palpite)

if(Acertos == 3){
    Contador = true;
    console.log("Voce Afundou Meu Navio ID " + Locais.Id + " Parabens");
    console.log("ID Navio: " + Locais.Id +
                   "; Nome do Navio: " + Navio.Nome +
                   "; Valor do Navio: "+ Navio.Preco+
                   "; Velocidade :" + Navio.Velocidade);
    

    
    } 
}else {
    console.log("ERRROUUU!");
           }
        }
    }
}
