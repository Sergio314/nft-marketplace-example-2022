import { paths } from '@/data/paths';

interface footerLink {
    title: string;
    values: {
        name: string;
        href: string;
    }[];
}

export const footerLinks: footerLink[] = [
    {
        title: 'Categories',
        values: [
            {
                name: 'Home',
                href: '/',
            },
            {
                name: 'Avatars',
                href: '/nft-listings',
            },
            {
                name: 'Venues',
                href: '/venues',
            },
        ],
    },
    {
        title: 'Marketplace',
        values: [
            {
                name: 'Create Avatar',
                href: paths.createAvatar,
            },
        ],
    },
    {
        title: 'More',
        values: [
            {
                name: 'F.A.Q.',
                href: paths.faq,
            },
        ],
    },
    {
        title: 'Company',
        values: [
            {
                name: 'About us',
                href: 'https://about.google/',
            },
            {
                name: 'Privacy Policy',
                href: 'https://policies.google.com/privacy',
            },
            {
                name: 'Terms & Conditions',
                href: 'https://policies.google.com/terms',
            },
        ],
    },
];
