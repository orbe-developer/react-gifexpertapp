import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // useEffect:
    // it runs when the app launches
    // it only changes when the category changes, which is only one time, at the beginning
    useEffect(() => {

        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])
    // effects cannot be asynchronous, they are waiting for a synchronous method
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
    // }, [category])

    return state; // {data: [], loading: true};
}