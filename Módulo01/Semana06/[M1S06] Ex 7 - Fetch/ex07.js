const urlInicial = 'https://rickandmortyapi.com/api/character';

const obterPersonagem = async (url = urlInicial) => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)   
    }
}

const lista = document.getElementById('lista')

const atualizaPaginacao = (info) => {
    const anterior = document.getElementById('anterior')
    const proximo = document.getElementById('proximo')

    if(info.prev){
        anterior.onclick = async () => {
            const data = await obterPersonagem(info.next)
            montaHtml(data)
        }
        proximo.disabled = false
    } else{
        proximo.disabled = true
    }
}

const montaHtml = (data) => {
    lista.innerHTML = ''
    data.results.forEach(element => {
        const item = document.createElement('li')
        const titulo = document.createElement('h2')
        const img = document.createElement('img')
    });

    atualizaPaginacao(data.info)
}

window.addEventListener('load', async () => {
    const data = await obterPersonagem()

    if (data) {
        montaHtml(data)

        return
    }

    const item = document.createElement('li')
    item.innerHTML = 'Falha ao obter dados'
    lista.appendChild(item)
})