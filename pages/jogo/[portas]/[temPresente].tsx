import { useState, useEffect } from "react";
import Porta from "../../../components/Porta";
import styles from "../../../styles/jogo.module.css";
import { atualizarPorta, criarPortas } from "../../../functions/portas";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Jogo(){
    const router = useRouter();

    const [portas, setPortas] = useState([])
    const [valido, setValido] = useState(false)
    useEffect(() => {
        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;

        const qtdePortasValidas = portas >= 3 && portas <= 18;
        const temPresenteValido = temPresente >= 1 && temPresente <= portas;

        setValido(qtdePortasValidas && temPresenteValido)

    }, [portas])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        setPortas(criarPortas(portas,temPresente))
        
    }, [router?.query])


    function renderizarPortas(){
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPorta(portas,novaPorta))}/>
        })
    }
    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {valido ?
                    renderizarPortas() : 
                    <h1>valores Invalidos</h1>
                }
            </div>
            <div className={styles.botoes}>
                <Link href ="/" passHref>
                    <button>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
    )
}