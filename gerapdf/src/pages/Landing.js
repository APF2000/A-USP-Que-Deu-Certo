import React from 'react'
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <>
        <h3>A USP que Deu Certo</h3>     
        <section>
            Uma coleção de projetos e ferramentas para tornar a USP um lugar um pouco mais agradável e vivível. 
            <ul>
                <li>
                    <Link to='/pdfgen'>Gerador de PDFs de estágios da Poli</Link>
                </li>
            </ul>
        </section>
        </>
    )
}
