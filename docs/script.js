let chave = "38630dd1c5124edf0db63a4039f6a9ec"; /*Let é a declaração da variável, a variável em questão é a chave*/

const clique = () => {
    let cidade = document.querySelector(".input-cidade").value

    if(!cidade){
        alert("Inserir o nome da cidade.");}

    else{
        buscarCidade(cidade);
    }
}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const buscarCidade = async (cidade) => {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+
        cidade+
        "&appid="+
        chave +
        "&lang=pt_br" +  /*Transforma a linguagem colocada no site em português*/
        "&units=metric")  /*apresenta a temp em graus celcius*/
    .then(res => res.json())

    console.log(dados); /*busca a informação e apresenta a variável dados nos campos*/

    ColocaNaTela(dados)
   
}

const ColocaNaTela = (dados) => {
    document.querySelector (".nome-cidade").innerHTML= dados.name;
    document.querySelector (".nome-temp").innerHTML= dados.main.temp ;
    document.querySelector (".descrição").innerHTML= dados.weather[0].description;
    document.querySelector (".nome-umidade").innerHTML= dados.main.humidity + "%";  
    document.querySelector (".img").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";

}