import React from 'react'
import { Link } from 'react-router-dom';
import Loading from '../components/loading'
import '../styles/slider.css'
import  '../styles/login.css';



function Slide(props) {
    const { movies } = props
    const imgStatic = 'https://image.tmdb.org/t/p/original/o76ZDm8PS9791XiuieNB93UZcRV.jpg'

    
    if (movies.loadin || !movies.result) {
        return <Loading/>;

    }

    const { results } = movies.result

    console.log(results);
    return (
        <>
            <div id="carouselExampleInterval" class="carousel slide mt-5" data-bs-ride="carousel">
                <div class="carousel-inner ">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={imgStatic} class="d-block w-100" alt="..." />
                    </div>
                    {
                        results.map((movies, index) => {
                            const backdropPatch = `https://image.tmdb.org/t/p/original${movies.backdrop_path}`
                            return (

                                <div key={index} className="carousel-item  " data-bs-interval="10000">
                                    <img src={backdropPatch} className="d-block w-100 " alt="..." />
                                    <div class="carousel-caption d-none d-md-block movie">
                                        <h5>{movies.title}</h5>
                                        <p>{movies.overview}</p>
                                        <Link className="efect" to="/admin">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Submit
                                        </Link>

                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slide