import { useEffect, useState } from "react"

export function useLastSearch() {

	const [lastSearch, setLastSearch] = useState('');
	const [lastArticles, setLastArticles] = useState([]);


	const saveLastSearch = (search) => {
		localStorage.setItem('lastSearch',search);
	}
	
	const saveLastArticles = (data) => {
		localStorage.setItem('lastArticles',JSON.stringify(data));
	}
	
	useEffect(() => {
		setLastSearch(localStorage.getItem('lastSearch'));
		setLastArticles(JSON.parse(localStorage.getItem('lastArticles')));
	}, [lastSearch])

	return {
		lastSearch,
		lastArticles,
		saveLastSearch,
		saveLastArticles
	}
}