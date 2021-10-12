import React, {FormEvent, useState} from 'react'
import { getCities, formatCEP, formatCNPJ, formatCPF, isValidCPF, isValidEmail, isValidCEP } from '@brazilian-utils/brazilian-utils';


const consultaCEP= "viacep.com.br/ws/{cep}/json/unicode/"

export default function PDFgen() {
    const [opts, setOpts] = useState({plano: false, tsem:false, tcomp:false, tquim:false, tadd:false})

    return (
        <>        
        <h2>Gerador de PDFs para Estágios</h2>
        <section>
            <p>Sim, a Poli fez os templates de PDFs para preenchermos. No entanto, ainda há aqueles que esquecem campos e documentos, onerando os já parcos funcionários.</p>
            <p>Pensando nisso, eu e o Pires demos nosso precioso tempo procrastinado para automatizar esse processo. De nada.</p>
            <p>Seus documentos não são por/de nossa conta.</p>

            <label style={{fontFamily:'Bebas Neue', fontSize:'1.5rem'}}>Selecione os documentos:</label>

            <form style={{margin:'1rem'}}>
                <input type='checkbox' name='plano-estagio' onChange={(e) => {setOpts.plano(e.target.value)}}/>
                <label htmlFor="plano-estagio">Plano de Estágio</label>
                <br />

                <input type="checkbox" name="termo-sem" onChange={(e) => {setOpts.tsem(e.target.value)}}/>
                <label htmlFor="termo-sem">Termo de Compromisso - Semestral</label>
                <br />

                <input type="checkbox" name="termo-comp"onChange={(e) => {setOpts.tcomp(e.target.value)}} />
                <label htmlFor="termo-comp">Termo de Compromisso - Comp</label>
                <br />

                <input type="checkbox" name="termo-quim"onChange={(e) => {setOpts.tquim(e.target.value)}} />
                <label htmlFor="termo-quim">Termo de Compromisso - Química</label>
                <br />

                <input type="checkbox" name="termo-adit" onChange={(e) => {setOpts.tadd(e.target.value)}}/>
                <label htmlFor="termo-adit">Termo Aditivo</label>
                <br />
            </form>

            <form>
                <ul>
                    <li>
                        <label htmlFor="aluno">Info do Aluno</label><br />
                        <input type="text"   name="nomeAluno" placeholder='nome'/><br />
                        <input type="number" name="cpf"       placeholder='CPF'/><br />
                        <input type="number" name="nusp"      placeholder='NUSP'/><br />
                        <input type="text"   name="telAluno"  placeholder='Telefone do Aluno'/><br /><br />
                        <input type="text"   name="curso"     placeholder='Curso'/><br />
                        <input type="email"  name="email"     placeholder='Email'/><br />
                    </li>
                    <li>
                        <label htmlFor="empresa">Info da Empresa</label><br />
                        <input type="text" name="nome-empresa" placeholder='Nome da Empresa'/><br />
                        <input type="text" name="cnpj" placeholder='CNPJ'/><br />
                        <input type="text" name="ramo" placeholder='Ramo de Atuação'/><br /><br />
                        <input type="text" name="cep-empresa" placeholder='CEP'/><br />
                        <input type="text" name="tel-empresa"  placeholder='Telefone da Empresa'/><br /><br />
                        <input type="text"   name="nome-rep"  placeholder='Representante da Empresa'/><br />
                        <input type="text"   name="cargo-rep"  placeholder='Cargo do Representante da Empresa'/><br /><br />
                    </li>
                    <li>
                        <label htmlFor="estag">Info do Estágio</label><br />
                        <label htmlFor="data-inicio">Data de Inicio</label>
                        <input type="date" name="data-inicio"  /><br />
                        <label htmlFor="data-fim">Data de Fim</label>
                        <input type="date" name="data-fim" /><br />
                        <label htmlFor="valor">Valor:</label>
                        <input type="number" name="valor" /> <br />
                        <input type="number" name="" id="" />

                    </li>
                </ul>
            </form>

            <button type="submit">Gerar PDFs!</button>

        </section>

        
        </>
    )
}
