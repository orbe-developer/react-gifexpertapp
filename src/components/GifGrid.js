// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>

                {
                    // 1-first way
                    // images.map(img => {
                    //     return <li key={img.id}>{img.title}</li>
                    // })

                    // 2-second way
                    //  images.map(img => (
                    //      <li key={img.id}>{img.title}</li>
                    //  ))

                    // 3-third way
                    //  images.map(({ id, title }) => (
                    //      <li key={id}>{title}</li>
                    //  ))

                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))

                }

            </div>
        </>
    )
}
