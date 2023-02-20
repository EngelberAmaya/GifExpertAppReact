import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {

        const apiKey = 'Tu api key generado del proyecto en https://developers.giphy.com/dashboard/';        
        const url = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=${apiKey}`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        setImages(gifs);

    }

    return (
        <div>
            <h3>{category}</h3>
           
            {
                images.map(img => (
                    <GifGridItem
                        key={img.id}
                        img={img}
                        {...img}
                    />
                ))
            }
            
        </div>
    )
}

export default GifGrid
