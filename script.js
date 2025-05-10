let chave = "0b4cf9f09a36a99d82aede8aefccdcaf"

function colocarNatela(dados) {

    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.round(dados.main.temp) + " ºC"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umindade:  " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave + "&lang=pt_br" + "&units=metric")
        .then(resposta => resposta.json())

    colocarNatela(dados)
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}
