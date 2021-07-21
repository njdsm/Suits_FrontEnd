import React from 'react';
import BoxList from '../components/BoxList';


const Boxes = () => {
    // Temp right now, once we get backend this will pull all the available boxes to display
    const BOXES = [
        {id: 'u1', name: 'Box-Name-1', image: 'https://m.media-amazon.com/images/M/MV5BY2ViNDIwNmUtZGQ5Ni00MDYxLWI5YTktNWU1NGRlYWQ1ZDg0XkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_UY1200_CR166,0,630,1200_AL_.jpg', items: 3},
        {id: 'u2', name: 'Box-Name-2', image: 'https://m.media-amazon.com/images/M/MV5BY2ViNDIwNmUtZGQ5Ni00MDYxLWI5YTktNWU1NGRlYWQ1ZDg0XkEyXkFqcGdeQXVyOTAyMDgxODQ@._V1_UY1200_CR166,0,630,1200_AL_.jpg', items: 5},
    ];
    return <BoxList items={BOXES}/>
};

export default Boxes;