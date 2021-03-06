import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLastSearch } from '../../hooks/utils/useLastSearch';
import styles from './newsSearch.module.css';

const NewsSearch = ({setSearchSubmit}) => {

	const [searchInput,setSearchInput] = useState('');
	const navigate = useNavigate();

	const {saveLastSearch} = useLastSearch()

	const handleSubmitSearch = (e) => {
    e.preventDefault();
		if(searchInput.length > 0){
			setSearchSubmit(searchInput);
			setSearchInput('');
			saveLastSearch(searchInput);
			navigate('/noticias/search/' + searchInput);
		}
  }

	return (
		<form className={styles.search} onSubmit={(e) => handleSubmitSearch(e)}>
			<input 
				type="text"
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
				placeholder='Escribe algo aquí ...'
			/>
    </form>
	)
}

export default NewsSearch