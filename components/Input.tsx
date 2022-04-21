import styles from "../styles/input.module.css";

interface InputProps {
    text: string;
    value:number
    onChange: (newValue: number) => void
}

export default function Input(props: InputProps) {

    const dec = () => props.onChange(props.value - 1)
    const inc = () => props.onChange(props.value + 1)

    return (
        <div className={styles.input}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={dec}> - </button>
                <button className={styles.btn} onClick={inc}> + </button>
            </div>
        </div>
    )
}
