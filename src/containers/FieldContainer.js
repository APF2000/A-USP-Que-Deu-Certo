import React, { useState } from 'react'
import PDFPrinter from "../components/PDFPrinter";

const handleSubmit = (e, docs, dadosAluno, dadosEmpresa, dadosEstagio) => {
    e.preventDefault();

}

export const FieldContainer = ({ docs }) => {
    const [dadosAluno, setDadosAluno] = useState({ nomeAluno: '', CPFAluno: '', NUSP: '', telAluno: '', cursoAluno: '', emailAluno: '' });
    const [dadosEmpresa, setDadosEmpresa] = useState({nomeEmpresa:'', CNPJ:'', ramo: ''})
    return (
        <form style={{flexDirection:'column', paddingTop:'1.5rem'}} onSubmit={(e)=>{handleSubmit(e, docs, dadosAluno)}}>
            <label htmlFor="aluno">Info do Aluno</label>
            <input type="text"   name="nomeAluno"   placeholder='nome'              onChange={(e) => { setDadosAluno({ ...dadosAluno, nomeAluno: e.target.value }) }} />
            <input type="number" name="cpf"         placeholder='CPF'               onChange={(e) => { setDadosAluno({ ...dadosAluno, CPFAluno: e.target.value })  }} />
            <input type="number" name="nusp"        placeholder='NUSP'              onChange={(e) => { setDadosAluno({ ...dadosAluno, NUSP: e.target.value })      }} />
            <input type="text"   name="telAluno"    placeholder='Telefone do Aluno' onChange={(e) => { setDadosAluno({ ...dadosAluno, telAluno: e.target.value })  }} />
            <input type="text"   name="curso"       placeholder='Curso'             onChange={(e) => { setDadosAluno({ ...dadosAluno, cursoAluno: e.target.value }) }} />
            <input type="email"  name="email"       placeholder='Email'             onChange={(e) => { setDadosAluno({ ...dadosAluno, emailAluno: e.target.value }) }} />

            {/*<label htmlFor="empresa">Info da Empresa</label>
            <input type="text" name="nome-empresa" placeholder='Nome da Empresa' />
            <input type="text" name="cnpj" placeholder='CNPJ' />
            <input type="text" name="ramo" placeholder='Ramo de Atuação' />
            <input type="text" name="cep-empresa" placeholder='CEP' />
            <input type="text" name="tel-empresa" placeholder='Telefone da Empresa' />
            <input type="text" name="nome-rep" placeholder='Representante da Empresa' />
            <input type="text" name="cargo-rep" placeholder='Cargo do Representante da Empresa' />

            <label htmlFor="estag">Info do Estágio</label>
            <label htmlFor="data-inicio">Data de Inicio</label>
            <input type="date" name="data-inicio" />
            <label htmlFor="data-fim">Data de Fim</label>
            <input type="date" name="data-fim" />
            <label htmlFor="valor">Valor:</label>
            <input type="number" name="valor" />*/}

            
            <button type='submit'>Gerar PDFs!</button>
        </form>
    )
}
