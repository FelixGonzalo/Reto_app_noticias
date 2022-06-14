import React, { useState } from 'react'
import { useNewsBySearch } from './../../hooks/useNewsBySearch';
import NewsList from '../../components/NewsList/NewsList'
import styles from './news.module.css'
import { SimpleHeader } from '../../components/layout/Header';

const News = () => {

  const [page] = useState(1)
  const [searchInput,setSearchInput] = useState('');
  const [searchSubmit,setSearchSubmit] = useState('actualidad');
  
  const { data, isloading, isError } = useNewsBySearch({
    search : searchSubmit, 
    page: page
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if(searchInput.length === 0) {
      setSearchSubmit('actualidad');
    }else {
      setSearchSubmit(searchInput);
      setSearchInput('');
    }
  }
  return (
    <>
      <SimpleHeader/>
      <main className="wrapper">

        <div className={styles.titleNews}>
          <h2>NOTICIAS</h2>
          <p>Página {page}</p>
        </div>

        <form className={styles.search} onSubmit={(e) => handleSearch(e)}>
          <input 
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder='Búsqueda de Artículos ...'
          />
          <p>
            {
              searchSubmit==='actualidad'
              ? ""
              :
              `Resultados "${searchSubmit}"`
            }
          </p>
        </form>

        <NewsList data={data} isloading={isloading} isError={isError}/>
      </main>
    </>
  )
}

export default News
