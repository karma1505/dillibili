'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Travel() {
    type ImageType = {
        src: string;
        text: string;
    };

    type ImageCardProps = {
        images: ImageType[];
    };

    const ImageCard: React.FC<ImageCardProps> = ({ images }) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000); // Change image every 3 seconds
            return () => clearInterval(interval);
        }, [images.length]);

        return (
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <div className="relative block w-full h-64">
                    <Image
                        className="bg-black absolute inset-0 object-cover w-full h-full opacity-95 transition-opacity duration-4000 ease-in-out"
                        src={images[currentIndex].src}
                        alt={images[currentIndex].text}
                        height={670}
                        width={670}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-4000 ease-in-out">
                        <h5 className="flex text-xl font-semibold justify-center text-white">{images[currentIndex].text}</h5>
                    </div>
                </div>
            </div>
        );
    };

    const cardData = [
        [
            { src: '/kasuali.png', text: 'Kasauli' },
            { src: '/chail.png', text: 'Chail' },
            { src: '/shimla.png', text: 'Shimla' },
        ],
        [
            { src: '/heritage_park.png', text: 'Mohan Meakins Heritage Park' },
            { src: '/heritage_park2.png', text: 'Mohan Meakins Heritage Park' },
            { src: '/heritage_park3.png', text: 'Mohan Meakins Heritage Park' },
        ],
        [
            { src: '/dagshai_jail.png', text: 'Dagshai British Jail Museum' },
            { src: '/dagshai_jail2.png', text: 'Dagshai British Jail Museum' },
            { src: '/dagshai_jail3.png', text: 'Dagshai British Jail Museum' },
        ],
        [
            { src: '/sanawar.png', text: 'Sanawar' },
            { src: '/sanawar2.png', text: 'Sanawar' },
            { src: '/sanawar3.png', text: 'Sanawar' },
        ],
    ];

    return (
        <div>
            <div className="m-20">
                <h1 className="text-black text-3xl lg:text-6xl flex justify-center">Nearby Attractions</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 my-1'>
                {cardData.map((images, index) => (
                    <ImageCard key={index} images={images} />
                ))}
            </div>
        </div>
    );
}

export default Travel;
