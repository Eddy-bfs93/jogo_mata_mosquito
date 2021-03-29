// Definindo o tamanho da area que irá ocorrer o jogo (Global)
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

//Modificando niveis do jogo
var criaMosquitoTempo = 1500

var nivel = window.location.search 
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	criaMosquitoTempo = 1500

}else if (nivel === 'dificil'){
	criaMosquitoTempo = 1000

}else if(nivel === 'chucknorris'){
	criaMosquitoTempo = 700
}	

//Verificando altura e largura da pagina
function ajustaTamanhoJogo() {
	 altura = window.innerHeight
	 largura = window.innerWidth

	console.log(altura, largura)
}

ajustaTamanhoJogo()

// Configurando o cronometro do jogo
var cronometro = setInterval(function() {

	tempo -= 1
	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = "vitoria.html"
	}else{

	}
	document.getElementById('cronometro').innerHTML = tempo
	
}, 1000)


//Definindo modo de movimento aleatorio do "mosquito"

function posicaoRandom() {

	//Remover o "mosquito" anterior (caso exista)
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if(vidas > 3) {
			window.location.href = "fim_de_jogo.html"
		} else {
			document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
			vidas++
		}
	}

	//Evitar o posicionamento do "mosquito" fora da pagina
	var posicaoX = Math.floor(Math.random() * altura) - 90 
	var posicaoY = Math.floor(Math.random() * largura) - 90 
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//Criar um elemento HTML
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoY + 'px'
	mosquito.style.top = posicaoX + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}
	document.body.appendChild(mosquito)
}

	// Criar diferentes tamanhos do "mosquito"
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}
	//Criar lado aleatorio do "mosquito"
function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}