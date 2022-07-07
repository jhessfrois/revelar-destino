document.addEventListener("keypress", function(e){
  if(e.key === "Enter") {
  const button = document.querySelector("#buttonPerguntar");
  button.click();
  }
})

const elementoPergunta = document.querySelector("#pergunta")
const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]

const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    inputPergunta.innerHTML = ""
    elementoResposta.innerHTML = `<span style="color:rgb(178, 29, 233)">Faça uma pergunta para começar.</span>`
    return
}

buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoPergunta.innerHTML = "🤔: " + pergunta
  elementoResposta.innerHTML = "👨🏻‍🚀: " + respostas [numeroAleatorio]

  elementoPergunta.style.opacity = 1;
  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoPergunta.style.opacity = 0;
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}