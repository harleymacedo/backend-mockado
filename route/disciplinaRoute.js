const router = require('express').Router();
const disciplina = require('../model/disciplina');

router.get('/disciplina/todos', async (req, res) => {
    try {
        const resultado = await disciplina.findAll();
        res.json(resultado);
    } catch (erro) {
        res.json({'mensagem': erro});
    }
});

router.post('/disciplina', async (req, res) => {
    try {
        const resultado = await disciplina.create({
            nome: req.body.nome,
            ch: req.body.ch
        });
        res.json({'mensagem': 'Disciplina cadastrada com sucesso'});
    } catch (erro) {
        res.json({'mensagem': erro});
    }
});

module.exports = router;