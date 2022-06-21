import NewsList from '../NewsList/NewsList';
import { useNewsBySearch } from '../../hooks/useNewsBySearch'
import { useLastSearch } from '../../hooks/utils/useLastSearch';

const LastSearch = () => {

	const { lastSearch } = useLastSearch();
	
	const { data } = useNewsBySearch({
		search: lastSearch,
		pageSize: 4,
		page: 1
	});

	console.log(lastSearch);

	
	return (
		<div>
			<h2>Última Búsqueda</h2>
			<h2>| {lastSearch}</h2>
			<NewsList data={data}/>
		</div>
	)
}

export default LastSearch