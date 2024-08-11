import { PageSectionType } from '@homework-task/types/interfaces';

import cat1 from '../../public/media/cats/cat_1.png';
import cat2 from '../../public/media/cats/cat_2.png';
import cat3 from '../../public/media/cats/cat_3.png';
import cat4 from '../../public/media/cats/cat_4.png';
import cat5 from '../../public/media/cats/cat_5.png';
import cat6 from '../../public/media/cats/cat_6.png';
import catImage from '../../public/media/hero.png';

export const pageUI: PageSectionType[] = [
    {
        type: 'sectionLayout',
        props: { background: 'bg-black' },
        components: [
            {
                type: 'heroComponent',
                props: { title: '#4 Create Page Generator', image: catImage },
            },
            {
                type: 'trustbarComponent',
                props: { images: [cat1, cat2, cat3, cat4, cat5, cat6] },
            },
        ],
    },
    {
        type: 'sectionGridLayout',
        props: { background: '#F97F88' },
        components: [
            {
                type: 'heroComponent',
                props: { title: 'This is grid section #1', image: catImage },
            },
            {
                type: 'trustbarComponent',
                props: { images: [cat1, cat3, cat5] },
            },
            {
                type: 'trustbarComponent',
                props: { images: [cat2, cat4, cat6] },
            },
            {
                type: 'heroComponent',
                props: { title: 'This is grid section #4', image: catImage },
            },
        ],
    },
];
