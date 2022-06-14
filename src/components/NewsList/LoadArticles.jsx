import React from 'react'
import styles from './loadArticles.module.css'

const LoadArticles = () => {
    return (
        <article className={styles.article}>
            <div className={styles.article__description}>
                <div>
                    <span></span>
                    <span></span>

                </div>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>

            </div>
            <div className={styles.article__image}>
            </div>
        </article>
    )
}

export default LoadArticles