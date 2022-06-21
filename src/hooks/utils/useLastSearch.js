import { useEffect, useState } from "react"

export function useLastSearch() {

	const [lastSearch, setLastSearch] = useState('');


	const saveLastSearch = (search) => {
		console.log(`Dato Ingresado con exito ${search}`);
		localStorage.setItem('lastSearch',search);
	}

	useEffect(() => {
		setLastSearch(localStorage.getItem('lastSearch'));
		console.log(`Dato recibido con exito ${lastSearch}`);
	}, [lastSearch])

	return {
		lastSearch,
		saveLastSearch,
	}
}