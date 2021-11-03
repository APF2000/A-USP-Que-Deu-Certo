import React, {useState} from 'react';
//import { getCities, formatCEP, formatCNPJ, formatCPF, isValidCPF, isValidEmail, isValidCEP } from '@brazilian-utils/brazilian-utils';

//const consultaCEP= "viacep.com.br/ws/{cep}/json/unicode/"

export default function PDFgen() {
    const [opts, setOpts] = useState({plano: false, tsem:false, tcomp:false, tquim:false, tadd:false})

    return (
        <>        
        <h2>Gerador de PDFs para Estágios</h2>
        <section>
            <p>Sim, a Poli fez os templates de PDFs para preenchermos. No entanto, ainda há aqueles que esquecem campos e documentos, onerando os já parcos funcionários.</p>
            <p>Pensando nisso, eu e o Pires demos nosso precioso tempo procrastinado para automatizar esse processo. De nada.</p>
            <p>Seus documentos não são por/de nossa conta.</p>


            <form>
                <h1>Selecione os documentos:</h1>
                <input type='checkbox' name='plano-estagio' onChange={()=>{setOpts({...opts, plano : !opts.plano})}}/>
                <label htmlFor="plano-estagio">Plano de Estágio</label>
                

                <input type="checkbox" name="termo-sem" onChange={()=> {setOpts({...opts, tsem : !opts.tsem})} }/>
                <label htmlFor="termo-sem">Termo de Compromisso - Semestral</label>
                

                <input type="checkbox" name="termo-comp" onChange={()=>{setOpts({...opts, tcomp : !opts.tcomp})} }/>
                <label htmlFor="termo-comp">Termo de Compromisso - Comp</label>
                

                <input type="checkbox" name="termo-quim" onChange={()=>{setOpts({...opts, tquim : !opts.tquim})}}/>
                <label htmlFor="termo-quim">Termo de Compromisso - Química</label>
                

                <input type="checkbox" name="termo-adit" onChange={()=>{setOpts({...opts, tadd : !opts.tadd})}}/>
                <label htmlFor="termo-adit">Termo Aditivo</label>
            
            </form>

            <form>
                <ul>
                    <li>
                        <label htmlFor="aluno">Info do Aluno</label>
                        <input type="text"   name="nomeAluno" placeholder='nome'/>
                        <input type="number" name="cpf"       placeholder='CPF'/>
                        <input type="number" name="nusp"      placeholder='NUSP'/>
                        <input type="text"   name="telAluno"  placeholder='Telefone do Aluno'/>
                        <input type="text"   name="curso"     placeholder='Curso'/>
                        <input type="email"  name="email"     placeholder='Email'/>
                    </li>
                    
                    <li>
                        <label htmlFor="empresa">Info da Empresa</label>
                        <input type="text" name="nome-empresa" placeholder='Nome da Empresa'/>
                        <input type="text" name="cnpj" placeholder='CNPJ'/>
                        <input type="text" name="ramo" placeholder='Ramo de Atuação'/>
                        <input type="text" name="cep-empresa" placeholder='CEP'/>
                        <input type="text" name="tel-empresa"  placeholder='Telefone da Empresa'/>
                        <input type="text"   name="nome-rep"  placeholder='Representante da Empresa'/>
                        <input type="text"   name="cargo-rep"  placeholder='Cargo do Representante da Empresa'/>
                    </li>
                    <li>
                        <label htmlFor="estag">Info do Estágio</label>
                        <label htmlFor="data-inicio">Data de Inicio</label>
                        <input type="date" name="data-inicio"  />
                        <label htmlFor="data-fim">Data de Fim</label>
                        <input type="date" name="data-fim" />
                        <label htmlFor="valor">Valor:</label>
                        <input type="number" name="valor" /> 
                        <input type="number" name="" id="" />

                    </li>
                </ul>
            </form>

            <button type="submit">Gerar PDFs!</button>

        </section>

        
        </>
    )
}
