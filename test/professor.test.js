const professorRoute = require('../route/professorRoute');

test('GET /professores', async () => {
    const axios = require('axios');
    const response = await axios.get('http://localhost:3000/professores');
 
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
})

test('GET /professores/9', async () => {
    const axios = require('axios');
    const response = await axios.get('http://localhost:3000/professores/9');
 
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
})

test('POST /professores', async () => {
    const axios = require('axios');
    await axios.post('http://localhost:3000/professores', {
		"id": 9,
		"nome": "Nome9",
		"area": "Area9"
    });
    const response = await axios.get('http://localhost:3000/professores/9');

    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
}) 

