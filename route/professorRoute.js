const router = require('express').Router();
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

router.get('/professor/:id', async (req, res) => {
    try{
       let resultado = await Professor.findByPk(req.params.id);
       res.json(resultado); 
    } catch(erro) {
       res.json({'mensagem': erro});
    }
});

router.post('/professor', async (req, res) => {
    try{
        await Professor.create({
            nome: req.body.nome,
            area: req.body.area
        });
        res.json({'mensagem': 'Professor inserido com sucesso'});
    } catch(erro) {
        res.json({'mensagem': erro});
    }
})

router.put('/professor', async (req, res) => {
    try{
        const professorAtual = await Professor.findByPk(req.body.id);
        professorAtual.nome = req.body.nome;
        professorAtual.area = req.body.area;
        await professorAtual.save();
        res.json({'mensagem': 'Professor atualizado com sucesso'});
    } catch (erro) {
        res.json({'mensagem': erro});
    }
});

router.delete('/professor/:id', async (req, res) => {
    try {
        const professorAtual = await Professor.findByPk(req.params.id);
        await professorAtual.destroy();
        res.json({'mensagem': 'Professor excluído com sucesso'});
    } catch (erro) {
        res.json({'mensagem': erro});
    }
});

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