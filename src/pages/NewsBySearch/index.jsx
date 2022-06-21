import React, { useEffect, useState } from 'react'
import { useNewsBySearch } from '../../hooks/useNewsBySearch';
import NewsList from '../../components/NewsList/NewsList'
import styles from './news.module.css'
import { SimpleHeader } from '../../components/layout/Header';
import NewsSearch from '../../components/NewsSearch';
import { useParams } from 'react-router-dom';
import { useLastSearch } from '../../hooks/utils/useLastSearch';

const NewsBySearch = () => {
  let params = useParams()
  let searchParams = params.search || 'actualidad';

  
  const [page] = useState(1)
  const [searchSubmit,setSearchSubmit] = useState(searchParams);
  
  const {saveLastSearch} = useLastSearch();
  
  useEffect(() => {
    saveLastSearch(searchSubmit);
  },[searchSubmit, saveLastSearch])


  const { data, isloading, isError } = useNewsBySearch({
    search: searchSubmit, 
    page: page
  });

  return (
    <>
      <SimpleHeader/>
      <main className="wrapper">
        <div className={styles.top}>
          <NewsSearch setSearchSubmit={setSearchSubmit}/>
          { data?.length !== 0
            &&
            <p>Resultados mostrados por "{searchSubmit}"</p>
          }
          <p>Página {page}</p>
        </div>
        <NewsList data={data} isloading={isloading} isError={isError}/>
      </main>
    </>
  )
}

export default NewsBySearch
