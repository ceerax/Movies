import React from 'react'

import Nadvar from '../components/nadvar'
import Slider from '../components/slide';

import useFetch from '../hooks/useFetch';

import { url_Api, Api_key } from '../utils/constans'

function HomeAdmin() {
    const newMovies = useFetch(`${url_Api}/movie/now_playing?api_key=${Api_key}&language=es-ES&page=1`);

    return (
        <>
            <Nadvar />
            <Slider movies={newMovies} />
        </>
    )
}

export default HomeAdmin