import React from 'react'
import Carousel from './cara/Carousel1'

const imgUrls = [

    {
        imageUrl: 'images/kajal.jpg',
        title: 'Kajal Goyal',
        text: 'Software Engineer (QA)'
    },
    {
        imageUrl: 'images/swatikarnwal.png',
        title: 'Swati Karnwal',
        text: 'Software Engineer (QA)'
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
        title: 'Vibhor Jain',
        text: 'Software Engineer'
    },
    {
        imageUrl: 'images/robin.jpg',
        title: 'Robin Sharma',
        text: 'Software Engineer'
    },
    {
        imageUrl: 'images/rajdeepnahar.png',
        title: 'Rajdeep Nahar',
        text: 'Senior Graphic Designer'
    },
    {
        imageUrl: 'images/nikhilrana.png',
        title: 'Nikhil Rana ',
        text: 'Software Engineer'
    },
    {
        imageUrl: 'images/mansi.png',
        title: 'Mansi ',
        text: 'Software Engineer'
    },
    {
        imageUrl: 'images/sanidhyasingh.png',
        title: 'Sanidhya Singh ',
        text: 'Software Engineer'
    },
    {
        imageUrl: 'images/akshay.jpg',
        title: 'Akshay Jain',
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