function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  //if(html.classList.contains('Light')){
  //  html.classList.remove('Light')
  //} else{
  //  html.classList.add('Light')                 <- essas linhas de código pode ser substituída de forma de simples pela de baixo.


  // pegar a tag img
  const img = document.querySelector("#profile img")
  
  // substituir a imagem
  if(html.classList.contains('Light')){
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  }  else{
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
  }
}

