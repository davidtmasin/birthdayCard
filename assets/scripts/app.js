const somParabens = new Audio();
somParabens.src = 'https://www.myinstants.com/media/sounds/parabens-da-xuxa.mp3';


let nomeAniversariante = prompt('De quem é o aniversário?')

let span = document.getElementById('aniversariante')

span.innerText = nomeAniversariante




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
    });
}