import styles from './Home.module.css'

function PaginaPrincipal() {
    return(
        <div className={styles.container}>
            <h1>Jogos Índies</h1>
            <p>Seja bem-vindo à nossa página inicial!</p>
            <ul>
                <li>Hollow Knight</li>
                <img src="/public/HK.avif" alt="HK" width={400} height={200} />
                <li>Celeste</li>
                <img src="/public/CLEST.avif" alt="CLEST" width={400} />
                <li>Blasphemous</li>
                <img src="/public/BF.avif" alt="BF" width={400} />
            </ul>
        </div>
    );
}
export default PaginaPrincipal