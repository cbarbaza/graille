export interface SocialLink {
    iconName: string;
    url: string;
}

export interface IPartnerCard {
    logo: string;
    name: string;
    description: string;
    links: SocialLink[];
}

export const partners: IPartnerCard[] = [
    {
        logo: 'logo-paumedepain.jpg',
        name: 'Paume de pain',
        description: 'Pain bio au levain naturel',
        links: [
            {
                iconName: 'fab fa-facebook-square',
                url: 'https://www.instagram.com/boulangerie_paumedepain/'
            },
            {
                iconName: 'fas fa-link',
                url: 'https://paumedepain.fr/'
            },

            {
                iconName: ' fab fa-instagram-square',
                url: 'https://www.instagram.com/boulangerie_paumedepain/'
            },
        ]
    },
    {
        logo: 'logo-agriz.jpg',
        name: 'Agriz',
        description: 'Producteurs engagés',
        links: [
            {
                iconName: 'fas fa-link',
                url: 'https://www.agriz.fr/'
            },
            {
                iconName: 'fab fa-facebook-square',
                url: 'https://www.facebook.com/agrizfr/'
            },
            {
                iconName: 'fab fa-linkedin',
                url: 'https://www.linkedin.com/company/agriz/'
            },
            {
                iconName: 'fab fa-instagram-square',
                url: 'https://www.instagram.com/agrizfr/'
            },
        ]
    },
    {
        logo: 'latelier-du-caillou.jpg',
        name: 'L\'atelier du caillou',
        description: 'Couture zéro déchet',
        links: [
            {
                iconName: 'fas fa-link',
                url: 'https://latelierducaillou.fr/'
            },
            {
                iconName: 'fab fa-facebook-square',
                url: 'https://www.facebook.com/atelierducaillou'
            },
            {
                iconName: 'fab fa-instagram-square',
                url: 'https://www.instagram.com/latelierducaillou/'
            },
        ]
    },
    {
        logo: 'logo-eldoradoz.png',
        name: 'ELDORA D\'OZ',
        description: 'L\'épicerie vrac',
        links: [
            {
                iconName: 'fab fa-facebook-square',
                url: 'https://www.facebook.com/EpicerievracLyon9/'
            },
        ]
    },
    {
        logo: 'logo-alasource.png',
        name: 'A la source',
        description: 'Épicerie locavore zéro déchet',
        links: [
            {
                iconName: 'fas fa-link',
                url: 'https://www.alasource-lyon.com/'
            },
            {
                iconName: 'fab fa-facebook-square',
                url: 'https://www.facebook.com/epicerielocavorezerodechet/'
            },
            {
                iconName: 'fab fa-instagram-square',
                url: 'https://www.instagram.com/alasource_lyon/'
            }
        ]
    },
    {
        logo: 'logo-les-alchimistesa.jpg',
        name: 'Les Alchimistes',
        description: 'Solution de compost',
        links: [
            {
                iconName: 'fas fa-link',
                url: 'https://alchimistes.co/compost-lyon/'
            },
            {
                iconName: 'fab fa-facebook-square',
                url: 'https://www.facebook.com/LesAlchimistesLyon/'
            },
            {
                iconName: 'fab fa-instagram-square',
                url: 'https://www.instagram.com/les_alchimistes_compost/'
            },
            {
                iconName: 'fab fa-linkedin',
                url: 'https://www.linkedin.com/company/les-alchimistes-lyon/'
            }
        ]
    },
    {
        logo: 'logo-un-cafe-pour-demain-fb.jpg',
        name: 'Un Café Pour Demain',
        description: 'Café responsable et équitable ',
        links: [
            {
                iconName: 'fas fa-link',
                url: 'https://uncafepourdemain.com/'
            },
            {
                iconName: 'fab fa-facebook-square',
                url: 'https://www.facebook.com/uncafepourdemain/'
            },
            {
                iconName: 'fab fa-instagram-square',
                url: 'https://www.instagram.com/uncafepourdemain/'
            },
            {
                iconName: 'fab fa-linkedin',
                url: 'https://www.linkedin.com/company/les-alchimistes-lyon/'
            }
        ]
    },
]
