import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch.js';
import LoadArticles from './LoadArticles.jsx';
import styles from './newsList.module.css';
const Article = lazy(() => import('./Article.jsx'));

const NewsList = () => {

    const [page, setPage] = useState(1);

    const search = "actualidad"; 
    const apiKey = "cf79decbd27746eeb6e06fe3341b2459"; 
    const url = `https://newsapi.org/v2/everything?qInTitle=${search}&page=${page}&language=es&apiKey=${apiKey}`;

    const { data, isloading, isError } = useFetch(url);

  
    if(isloading) {
        return (<p>Cargando ... </p>)
    }

    if(isError === true) {
        return (<p>Ocurrio un error </p>)
    }

    if(data?.totalResults === 0) {
        return (<p>No hay resultados</p>)
    }

    return (
        <div>
            <div className={styles.titleNews}>
                <h2>Noticias</h2>
                <p>Búsquedas por "{search}"</p> 
                <p>Página {page}</p>
            </div>
            
            <section className={styles.newsContent}>
                {
                    data?.articles.map((item, index) => {
                        return (
                            <Suspense key={index} fallback={<LoadArticles/>}>
                                    <Article 
                                        title={item.title}
                                        url={item.url}
                                        description={item.description}
                                        author={item.author}
                                        source={item.source.name}
                                        urlToImage={item.urlToImage}
                                    />
                            </Suspense>
                        );
                    })
                }
            </section>
            
        </div>
    )
}

export default NewsList