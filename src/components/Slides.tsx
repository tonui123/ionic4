import React from 'react';
import { IonSlides, IonSlide, IonContent, IonImg } from '@ionic/react';

const slideOpts = {
    initialSlide: 1,
    speed: 400
};

type Item = {
    src: string;
    text: string;
};

const items: Item[] = [
    {
        src: './images/pic1.jpg',
        text: 'รูปที่1'
    },
    {
        src: '/images/pic2.jpg',
        text: 'รูปที่2'
    },
    {
        src: '/images/pic3.jpg',
        text: 'รูปที่3'
    },
]

export const Slides: React.FC = () => (
    <IonContent>
        <IonSlides pager={true} options={slideOpts}>
            {items.map((images, i) => (
                <IonSlide>
                    <IonImg src={images.src} />
                    <h1>{images.text}</h1>
                </IonSlide>
            ))}
        </IonSlides>
    </IonContent>
);
