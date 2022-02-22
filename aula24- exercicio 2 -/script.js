let botaoMenos = document.querySelector(`#botaoMenos`)
let botaoMais = document.querySelector(`#botaoMais`)
let labelNum = document.querySelector(`#labelNum`)


let cont = 0

  let increaseInterval
  let decreaseInterval

botaoMenos.onclick = function(){

  clearInterval(increaseInterval)
  botaoMenos.classList.add('abertoMenos')
  botaoMais.classList.remove('abertoMais')

  decreaseInterval = setInterval(function(){
    cont--
    labelNum.innerHTML = cont
  }, 100);

}

botaoMais.onclick = function(){
 
  clearInterval(decreaseInterval)
  botaoMais.classList.add('abertoMais')
  botaoMenos.classList.remove('abertoMenos')

  increaseInterval =setInterval(function() {
    cont++
    labelNum.innerHTML =cont
  }, 100);
  
}

