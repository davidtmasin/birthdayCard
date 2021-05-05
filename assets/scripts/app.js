// Essa parte irá fazer com que você informe o nome do aniversariante
let nomeAniversariante = prompt('De quem é o aniversário?')

let span = document.getElementById('aniversariante')

span.innerText = nomeAniversariante

// Definir frase aleatória no cartão
// frasesProntas = [ 
//     "Que a esperança, a alegria de viver, a paz e a saúde sejam dádivas renovadas em sua vida hoje e que se estendam por todo o ano. Que Deus possa continuiar iluminando sua vida, mostrando os melhores caminhos e realizando todos os seus sonhos.",

//     'O melhor aniversário para a mais especial das pessoas, nesta data querida de seu aniversário, receba meus parabéns e meu abraço.',

//     'Felicidade! Essa mensagem está repleta de carinho, porque é para alguém muito especial: Você!',

//     'Parabéns pelo seu aniversário. Desejo-lhe agradáveis surpresas e felizes acontecimentos, e que este dia possa lhe trazer muitas aventuras e alegrias!',

//     'Todo dia é uma nova oportunidade que a vida oferece a quem nela crê.',

//     "Neste dia especial, aquilo que desejo para você é que os anos passem, mas nunca levem seu sorriso e esse olhar repleto de esperança. Feliz aniversário!",

//     "Parabéns! Desejo que a saúde, a paz e o amor sejam seus convidados de honra para hoje e todos os dias da sua vida.",

//     "Não se espante se hoje a luz do sol brilhar mais e a das estrelas encandear a sua noite, pois toda natureza se alegra pelo seu aniversário. Parabéns!"
// ];

// Frases e emojis random
randomElements = [
    {
        frasePronta: 'Que a esperança, a alegria de viver, a paz e a saúde sejam dádivas renovadas em sua vida hoje e que se estendam por todo o ano. Que Deus possa continuiar iluminando sua vida, mostrando os melhores caminhos e realizando todos os seus sonhos.',
        cadeiaEmoji: '🎈🥳🎂'
    },
    {
        frasePronta: 'O melhor aniversário para a mais especial das pessoas, nesta data querida de seu aniversário, receba meus parabéns e meu abraço.',
        cadeiaEmoji: '🎈🎂🎉'
    },
    {
        frasePronta: 'Não se espante se hoje a luz do sol brilhar mais e a das estrelas encandear a sua noite, pois toda natureza se alegra pelo seu aniversário. Parabéns!',
        cadeiaEmoji: '🙏🎂🎉'
    },
    {
        frasePronta: 'Parabéns! Desejo que a saúde, a paz e o amor sejam seus convidados de honra para hoje e todos os dias da sua vida.',
        cadeiaEmoji: '🙏🤗🎂'
    },
    {
        frasePronta: 'Neste dia especial, aquilo que desejo para você é que os anos passem, mas nunca levem seu sorriso e esse olhar repleto de esperança.',
        cadeiaEmoji: '🎈🤗🎉'
    },
    {
        frasePronta: 'Todo dia é uma nova oportunidade que a vida oferece a quem nela crê.',
        cadeiaEmoji: '🙏🥳🎂'
    },
    {
        frasePronta: 'Parabéns pelo seu aniversário. Desejo-lhe agradáveis surpresas e felizes acontecimentos, e que este dia possa lhe trazer muitas aventuras e alegrias!',
        cadeiaEmoji: '🎈🎉🥳'
    },
    {
        frasePronta: 'Felicidade! Essa mensagem está repleta de carinho, porque é para alguém muito especial: Você!',
        cadeiaEmoji: '🎂🎈🤗'
    }
]

let selecionarFrase = parseInt(Math.random()*7)
let selecionarEmoji = parseInt(Math.random()*7)

let fraseParabens = document.getElementById('fraseAniversario')
let emojiTitle = document.getElementById('emojis')

fraseParabens.innerHTML = randomElements[selecionarFrase].frasePronta
emojiTitle.innerHTML = randomElements[selecionarEmoji].cadeiaEmoji

console.log(randomElements[selecionarEmoji].cadeiaEmoji);



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