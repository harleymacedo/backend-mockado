const professorRoute = require('../route/professorRoute');

test('GET /professores', async () => {
    const axios = require('axios');
    const response = await axios.get('http://localhost:3000/professores');
 
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
})

test('GET /professores/1', async () => {
    const axios = require('axios');
    const response = await axios.get('http://localhost:3000/professores/1');
 
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
})

test('POST /professores', async () => {
    const axios = require('axios');
    await axios.post('http://localhost:3000/professores', {
		"id": 6,
		"nome": "Nome6",
		"area": "Area6"
    });
    const response = await axios.get('http://localhost:3000/professores/6');
    
    expect(response.data).toBeTruthy();
    expect(response.data.length).toBeTruthy();
}) 

