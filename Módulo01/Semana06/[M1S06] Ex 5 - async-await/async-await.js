async function obterClienteNoBancoDeDados(idCliente) {
    return new Promise( (resolve, reject) => {
            const cliente = { nome: 'bruce wayne', id: idCliente };
            resolve(cliente);
    });
}

async function processar() {
    const dados = await obterClienteNoBancoDeDados(7)
        console.log(cliente)
}

processar();