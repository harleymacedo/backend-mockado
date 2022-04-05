const con = require('./conexao');

const obterProfessores = async (req, res) => {
    const resultado = await con.query('select * from professor');
    return resultado;
}

const obterProfessor = async (req, res) => {
    const resultado = await con.query(`select * from professor where id = ${req.params.id}`);
    return resultado;
}

const inserirProfessor = async (req, res) => {
    await con.query(`insert into professor (id, nome, area) values (${req.body.id}, '${req.body.nome}', '${req.body.area}')`);
}

const atualizarProfessor = (req, res) => {
    return null;
}

const excluirProfessor = (req, res) => {
    return null;
}

module.exports = {obterProfessores, obterProfessor, inserirProfessor, atualizarProfessor, excluirProfessor};
