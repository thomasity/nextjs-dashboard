import { Work_Sans, Comfortaa, Prompt, Urbanist, IBM_Plex_Sans_JP, Blinker } from 'next/font/google';

export const comfortaa = Blinker({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '600', '700', '800', '900'],
    variable: '--font-comfortaa',
    });

export const work_sans = Work_Sans({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-worksans',
    });