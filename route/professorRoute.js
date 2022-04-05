const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { obterProfessores, obterProfessor, inserirProfessor } = require('../model/professorModel');
const axios = require('axios');

router.get('/professor/repos', async (req, res) => {
    const repos = await axios.get(`https://api.github.com/users/${req.body.user_repo}/repos?per_page=50`);
    res.json(repos.data);
});

router.get('/professores', async (req, res) => {
    try{
        const resultado = await obterProfessores(req, res);
        const dados = await resultado.rows;
        res.json(dados);
    } catch(erro) {
        res.json({'mensagem': erro})
    }
});

router.get('/professores/:id', async (req, res) => {
    try{
        const resultado = await obterProfessor(req, res);
        const dados = await resultado.rows;
        res.json(dados);
    } catch(erro) {
        res.json({'mensagem': erro})
    }
});

router.post('/professores', async (req, res) => {
    try{
        await inserirProfessor(req, res);
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