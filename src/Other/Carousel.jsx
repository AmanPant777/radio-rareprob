import React from 'react'
import Carousel from './cara/Carousel1'

const imgUrls = [

    {
        imageUrl: 'images/kajal.jpg',
        title: 'Kajal Goyal',
        text: 'Software Engineer (QA)'
    },
    {
        imageUrl: 'images/akshay.jpg',
        title: 'Akshay Jain',
        text: 'Software Engineer'
    },
    {
        imageUrl: 'images/arun.jpg',
        title: 'Arun Saini',
        text: 'Software Engineer'
    },
    {
        imageUrl: 'images/rishi.jpg',
        title: 'Rishikesh Sharma ',
        text: 'Software Engineer'
    },
    {
        imageUrl: 'images/aman.jpg',
        title: 'Aman Pant',
        text: 'Software Engineer'
    },
    {
        imageUrl: 'images/vibhur.jpg',
        title: 'Vibhur ',
        text: 'Software Engineer'
    },
    {
        imageUrl: 'images/robin.jpg',
        title: 'Robin ',
        text: 'Software Engineer'
    },

]

const Cara = () => {
    return (
        <div>
            <Carousel images={imgUrls} />
        </div>
    )
}
export default Cara