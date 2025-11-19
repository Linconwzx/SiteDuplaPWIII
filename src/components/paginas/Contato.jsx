import styles from './Contato.module.css';

function Contato() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Contato</h1>
            <p className={styles.descricao}>
                Entre em contato conosco preenchendo o formulário abaixo <br />
                ou envie um email diretamente para: <strong>linconrenan@gmail.com</strong>
            </p>

            <div className={styles.card}>
                <form className={styles.form}>
                    <label>
                        Nome
                        <input type="text" placeholder="Digite seu nome" required />
                    </label>

                    <label>
                        Email
                        <input type="email" placeholder="seuemail@exemplo.com" required />
                    </label>

                    <label>
                        Mensagem
                        <textarea placeholder="Digite sua mensagem..." rows="5" required></textarea>
                    </label>

                    <button type="submit" className={styles.botao}>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contato;
