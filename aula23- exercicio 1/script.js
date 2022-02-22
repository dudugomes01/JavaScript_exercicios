let botaoMenos = document.querySelector(`#botaoMenos`)
let botaoMais = document.querySelector(`#botaoMais`)
let labelNum = document.querySelector(`#labelNum`)


let cont = 0

botaoMenos.onclick = function(){
  cont--
  labelNum.innerHTML = (`${cont}`)
}

botaoMais.onclick = function(){
  cont++
  labelNum.innerHTML = (`${cont}`)
}

