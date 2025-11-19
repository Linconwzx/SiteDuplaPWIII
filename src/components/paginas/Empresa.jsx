import styles from './Empresa.module.css';

function Empresa() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Sobre a Empresa</h1>
            <p className={styles.descricao}>
                Somos uma empresa dedicada ao desenvolvimento de experiências únicas no mundo dos jogos, 
                com foco especial em títulos indie criativos, artísticos e inovadores.
            </p>

            <div className={styles.card}>
                <h2>Quem Somos</h2>
                <p>
                    Fundada por apaixonados por games, nossa missão é apoiar e divulgar projetos independentes,
                    incentivando a criatividade e a arte no cenário gamer.
                </p>
            </div>

            <div className={styles.secoes}>
                <div className={styles.box}>
                    <h3>Missão</h3>
                    <p>Criar um ambiente que valorize jogos independentes e seus desenvolvedores.</p>
                </div>

                <div className={styles.box}>
                    <h3>Visão</h3>
                    <p>Tornar-se referência no mercado indie e fomentar novos talentos.</p>
                </div>

                <div className={styles.box}>
                    <h3>Valores</h3>
                    <p>Criatividade, paixão, inovação e respeito à comunidade gamer.</p>
                </div>
            </div>
        </div>
    );
}

export default Empresa;
