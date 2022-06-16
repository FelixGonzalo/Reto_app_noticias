import { useEffect, useState } from 'react'
import { getNewsBySearch } from '../services/newsApi/getNewsBySearch';

export function useNewsBySearch({ search, page }) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getNewsBySearch({ search, page })
            .then((news) => {
                setData(news);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                throw new Error(error);
            })
    }, [search, page])

  return { data, isLoading, isError}
}
