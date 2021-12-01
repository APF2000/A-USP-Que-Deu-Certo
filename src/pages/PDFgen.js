import React, { useState } from 'react';
import { FieldContainer } from '../containers/FieldContainer';
//import { getCities, formatCEP, formatCNPJ, formatCPF, isValidCPF, isValidEmail, isValidCEP } from '@brazilian-utils/brazilian-utils';

//const consultaCEP= "viacep.com.br/ws/{cep}/json/unicode/"

export default function PDFgen() {
    const [docs, setDocs] = useState({ plano: false, tsem: false, tcomp: false, tquim: false, tadd: false })

    return (
        <>
            <h2>Gerador de PDFs para Estágios</h2>
            <section>
                <p>Sim, a Poli fez os templates de PDFs para preenchermos. No entanto, ainda há aqueles que esquecem campos e documentos, onerando os já parcos funcionários.</p>
                <p>Pensando nisso, eu e o Pires demos nosso precioso tempo procrastinado para automatizar esse processo. De nada.</p>
                <p>Seus dados não são por/de nossa conta.</p>


                <form style={{paddingRight:'1rem'}}>
                    <h1>Selecione os documentos:</h1>
                    <input type='checkbox' name='plano-estagio' onChange={() => { setDocs({ ...docs, plano: !docs.plano }) }} />
                    <label htmlFor="plano-estagio">Plano de Estágio</label>


                    <input type="checkbox" name="termo-sem" onChange={() => { setDocs({ ...docs, tsem: !docs.tsem }) }} />
                    <label htmlFor="termo-sem">Termo de Compromisso - Semestral</label>


                    <input type="checkbox" name="termo-comp" onChange={() => { setDocs({ ...docs, tcomp: !docs.tcomp }) }} />
                    <label htmlFor="termo-comp">Termo de Compromisso - Comp</label>


                    <input type="checkbox" name="termo-quim" onChange={() => { setDocs({ ...docs, tquim: !docs.tquim }) }} />
                    <label htmlFor="termo-quim">Termo de Compromisso - Química</label>


                    <input type="checkbox" name="termo-adit" onChange={() => { setDocs({ ...docs, tadd: !docs.tadd }) }} />
                    <label htmlFor="termo-adit">Termo Aditivo</label>

                </form>

                <FieldContainer docs={docs} />

            </section>


        </>
    )
}
