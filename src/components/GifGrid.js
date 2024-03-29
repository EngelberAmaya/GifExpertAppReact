import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3 className='card animate__animated animate__backInDown'>{category}</h3>

            { loading && <p className='card animate__animated animate__flash'>Loading</p>}

            <div className='card-grid row'>
            
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
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
