/*  Variaves 
    -Um pedacinho de memória que damos um nome e guardamos um valor
    
    Funções
    -Um bloco de código que...
    Só é executado quando chamamos ela

    document = HTML
    querySelector = Pegar um elemento do HTML
*/

let imagem = document.querySelector(".imagem-copo")
let circulo = document.querySelector(".circulo")

function trocarImagem(endereco){
   
    imagem.src = endereco
}
