import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";
import { atualizarPorta, criarPortas } from "../functions/portas";

export default function index(){
    const [portas, setPortas] = useState(criarPortas(4,2))

    function renderizarPortas(){
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPorta(portas,novaPorta))}/>
        })
    }
    return (
        <div style={{ display:"flex" }}>
            {renderizarPortas()}
        </div>
    )
}