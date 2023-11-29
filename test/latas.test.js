const axios = require('axios')

test('Testando busca', async () => {
    const response = await axios.get('http://localhost:3001/latas')

    expect(response.status).toBe(200)
})

test('Testando busca por id', async () => {
    const response = await axios.get('http://localhost:3001/latas/1123')

    expect(response.status).toBe(204)
})

test('Testando criar uma lata', async () => {
    const lata = {
        descricao: "Lata muito grande",
        volume: 150
    }

    const response = await axios.post('http://localhost:3001/latas', lata)

    expect(response.status).toBe(200)
    expect(response.data.descricao).toBe("Lata muito grande")
    expect(response.data.volume).toBe(150)
})


//
//


test('Test Excluir Lata', async () => {
    const id = req.params.id

    const response = await axios.post('http://localhost:3001/latas/'+id)

    expect(response.status).toBe(204)

    // Excluir
})

test('Test Update Lata', async () => {
    const id = req.params.id
    
    const dados = req.params.dados

    const response = await axios.post('http://localhost:3001/latas/'+id)

    // lata[id].dados = dados

    expect(response.status).toBe(204)

    // Update
})