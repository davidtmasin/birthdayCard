// Essa parte irá fazer com que você informe o nome do aniversariante
let nomeAniversariante = prompt('De quem é o aniversário?')

let span = document.getElementById('aniversariante')

span.innerText = nomeAniversariante

// Definir frase aleatória no cartão
frasesProntas = [ 
    "Que a esperança, a alegria de viver, a paz e a saúde sejam dádivas renovadas em sua vida hoje e que se estendam por todo o ano. Que Deus possa continuiar iluminando sua vida, mostrando os melhores caminhos e realizando todos os seus sonhos.",

    'O melhor aniversário para a mais especial das pessoas, nesta data querida de seu aniversário, receba meus parabéns e meu abraço.',

    'Felicidade! Essa mensagem está repleta de carinho, porque é para alguém muito especial: Você!',

    'Parabéns pelo seu aniversário. Desejo-lhe agradáveis surpresas e felizes acontecimentos, e que este dia possa lhe trazer muitas aventuras e alegrias!',

    'Todo dia é uma nova oportunidade que a vida oferece a quem nela crê. Feliz Aniversário!'
];

let selecionarFrase = parseInt(Math.random()*4)

let fraseParabens = document.getElementById('fraseAniversario')
fraseParabens.innerHTML = frasesProntas[selecionarFrase]

// console.log(frasesProntas[selecionarFrase].length + " caracteres");



//Função para poder realizar o download da página HTML como IMG

function downloadimage() {
    var container = document.getElementById("htmltoimage");
    html2canvas(container, { allowTaint: true }).then(function (canvas) {
        var link = document.createElement("a");
        
        document.body.appendChild(link);

        link.download = "birthdayCard.jpg";
       
        link.href = canvas.toDataURL();
    
        link.target = "_blank";

        link.click();

        link.share() = link.href
    });

}