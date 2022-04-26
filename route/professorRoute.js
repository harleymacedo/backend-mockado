const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Professor = require('../model/professor');

router.get('/professor/todos', async (req, res) => {
    try{
        let resultado = await Professor.findAll();
        res.json(resultado);
    } catch(erro) {
        res.json({'mensagem': erro});
    }
});

router.get('/professores/:id', async (req, res) => {
    try{
        
    } catch(erro) {
        
    }
});

router.post('/professores', async (req, res) => {
    try{
        await Professor.create({
            nome: "Nome1",
            area: "Area1",
            email: "email1@servidor.com"
        });
        res.json({'mensagem': 'Professor inserido com sucesso'});
    } catch(erro) {
        res.json({'mensagem': erro});
    }
})

router.post('/login', (req, res) => {
    if (req.body.user === 'harleymacedo' && req.body.pass === '123456') {
        const id = 1;
        var token = jwt.sign({id}, 'chaveapp123', {expiresIn: 300});
        res.set("x-access-token", token);
        res.json({auth: true, token: token});
    } else {
        res.status(500).json({mensagem: 'Login inválido'});
    }
});

function verifyJWT (req, res, next) {
    let token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).json({auth: false, mensagem: 'Sem token de verificação'});
    }

    jwt.verify(token, 'chaveapp123', function (error, decoded) {
        if (error) {
            return res.status(500).json({mensagem: 'Token inválido'});
        }
        next();
    });
}

module.exports = router;