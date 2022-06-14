import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        isError: null,
    });

    const getFetch = async () => {
        try {
            setState({
                ...state,
                isLoading: true
            });
            const response = await fetch(url);
            const data = await response.json();
            if(response.ok) {
                setState({
                    data: data,
                    isLoading: false,
                    isError: null,
                });
            } else {
                setState({
                    isError: true,
                });
            } 
        } catch (err) {
            setState({
                ...state,
                isError: true,
            });
        }
    }

    useEffect(() => {
        getFetch()
    },[url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        isError: state.isError,
    }
}