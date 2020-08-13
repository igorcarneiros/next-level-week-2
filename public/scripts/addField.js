//procurar o boao
document.querySelector("#add-time")

//quando clicar no botao
.addEventListener('click', cloneField)

//executar uma ação
function cloneField(){
    //duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Node é sempre usado para se referir a elementos HTML

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //colocar na pagina. onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer) //colocar um 'filho'
}
