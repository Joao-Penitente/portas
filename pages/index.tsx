import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import styles from "../styles/form.module.css";
export default function Form(){
    const [qtdePortas, setQtdePortas] = useState(3)
    const [comPresente, setComPresente] = useState(1)
    
    return (
        <div className={styles.formulario}>
            <div>
                <Card bgcolor = "#46a3f5">
                    <h2 className={styles.titulo}>Monty hall</h2>
                </Card>
                <Card>
                    <Input text= "Quantidade de portas" value = {qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}/>
                </Card>
            </div>
            <div>
                <Card>
                <Input text= "Qual porta terá o presente?" value = {comPresente} onChange={novaPortaComPresente =>setComPresente(novaPortaComPresente)}/>
                </Card>
                <Card bgcolor = "#46a3f5">
                    <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
                        <h2 className={styles.link}>Iniciar</h2>
                    </Link>
                </Card>
            </div>
        </div>
    )
}