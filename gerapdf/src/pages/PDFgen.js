import React from 'react'

export default function PDFgen() {
    return (
        <>        
            <h2>Gerador de PDFs para Estágios</h2>
            <section>
                <p>Sim, a Poli fez os templates de PDFs para preenchermos. No entanto, ainda há aqueles que esquecem campos e documentos, onerando os já parcos funcionários.</p>
                <p>Pensando nisso, eu e o Pires demos nosso precioso tempo procrastinado para automatizar esse processo. De nada.</p>
                <p>Seus documentos não são por/de nossa conta.</p>

                <select name="selecione o documento" id="select-doc">
                    <option value="plano-estagio">Plano de Estágio</option>
                    <optgroup label="Termo de Compromisso">                
                        <option value="tcsemestral">Semestral</option>
                        <option value="tcquimica">Química</option>
                        <option value="tccomp">Computação</option>
                    </optgroup>
                    <option value="termo-aditivo">Termo Aditivo</option>
                </select>

            </section>
            
        </>
    )
}
