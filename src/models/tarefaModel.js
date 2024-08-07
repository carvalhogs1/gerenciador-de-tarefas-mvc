var tarefas = []

function adicionarTarefa(titulo, descricao){
    tarefas.push({
        id: Date.now(),
        titulo: titulo,
        descricao: descricao, 
    })
}

function listarTarefas(){
    return tarefas
}

module.exports = {
    adicionarTarefa,
    listarTarefas
}