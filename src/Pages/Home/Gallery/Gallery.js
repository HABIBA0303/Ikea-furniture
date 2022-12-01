import React from 'react';
import img1 from '../../../Pages/assets/images/1s.jpg'
import img2 from '../../../Pages/assets/images/2s.jpg'
import img3 from '../../../Pages/assets/images/3s.jpg'
import img4 from '../../../Pages/assets/images/4s.jpg'
import img5 from '../../../Pages/assets/images/5b.jpg'
import img6 from '../../../Pages/assets/images/6s.jpg'
import img7 from '../../../Pages/assets/images/7s.jpg'
import img8 from '../../../Pages/assets/images/8s.jpg'
import img9 from '../../../Pages/assets/images/9s.jpg'
import PhotoAlbum from 'react-photo-album';
const Gallery = () => {

    const photos = [
        {
            src: img1,
            width: 800,
            height: 600
        },
        {
            src: img2,
            width: 1600,
            height: 900
        },
        {
            src: img4,
            width: 800,
            height: 600
        },
        {
            src: img3,
            width: 1600,
            height: 900
        },
        {
            src: img1,
            width: 800,
            height: 600
        },
        {
            src: img5,
            width: 1600,
            height: 900
        },
        {
            src: img6,
            width: 800,
            height: 600
        },
        {
            src: img7,
            width: 1600,
            height: 900
        },
        {
            src: img8,
            width: 800,
            height: 600
        },
        {
            src: img9,
            width: 1600,
            height: 900
        },
    ];
    return (
        <section className='pb-12 border-b border-gray-300 pt-5'>
            <h1 className='sm:text-3xl text-xl font-semibold pl-4 pb-6 '>Gallery</h1>

            <PhotoAlbum layout="columns" photos={photos} />

        </section>
    );
};

export default Gallery;