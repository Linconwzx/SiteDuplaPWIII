import styles from './Home.module.css';
import { useEffect, useState } from 'react';

function PaginaPrincipal() {
    const imagens = [
        { src: "/public/HK.avif", titulo: "Hollow Knight" },
        { src: "/public/CLEST.avif", titulo: "Celeste" },
        { src: "/public/BF.avif", titulo: "Blasphemous" }
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % imagens.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Jogos Indies</h1>
            <p className={styles.descricao}>Seja bem-vindo à nossa página inicial!</p>

            <div className={styles.carousel}>
                {imagens.map((img, i) => (
                    <div
                        key={i}
                        className={`${styles.slide} ${i === index ? styles.active : ''}`}
                    >
                        <img src={img.src} alt={img.titulo} />
                        <p className={styles.nomeJogo}>{img.titulo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PaginaPrincipal;
