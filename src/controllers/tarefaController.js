function exibirTarefas(request, response){
    response.render('index')
}

function exibirNovaTarefa(request, response){
    response.render('adicionarTarefa')
}

function adicionarTarefa(request, response){
    console.log('Chegou na adicionarTarefa')
    response.redirect('/')
}


module.exports = {
    exibirTarefas,
    exibirNovaTarefa,
    adicionarTarefa
}