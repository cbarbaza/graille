export interface IInfoCard {
    title: string;
    text: string;
}


export const cardsInfo: IInfoCard[] = [
    {
        title: 'Que cuisine-t-on ?',
        text: 'Une cuisine végétarienne qui permet d\'inclure tous nos bénéficiaires.A partir des invendus issus de producteurs locaux de la Région Auvergne- Rhône - Alpes, d\'artisans boulangers et de commerçants militants du zéro déchet, qu\'on transforme en savoureux repas complets.On transforme ainsi chaque Dimanche près de 100 - 150 repas complets végétariens.'
    },
    {
        title: 'Où cuisine-t-on ?',
        text: '<span class="font-semibold">En rue, en squat et en camps urbains</span> afin d\'aller à nos bénéficiaires et non l\'inverse. Notre accès aux squats et camps urbains est un gage de notre crédibilité et proximité avec nos bénéficiaires, mais également une volonté de valoriser socialement ces lieux.'
    },
    {
        title: 'Objectif zéro déchet',
        text: 'Nous compostons 90% de nos déchets qui sont organiques. Nos féculents, légumineuses, huiles et épices sont issus du vrac. Nous servons les repas dans des bocaux consignés. Nos éponges sont en couture zéro déchet et donc réutilisables. Nous contrôlons et optimisons notre consommation d\'eau.'
    },
    {
        title: 'Militants',
        text: 'Nous combattons le gaspillage alimentaire. Pour cela nous pratiquons et initions au déchétarisme, puis responsabilisons toujours plus les commerçants locaux en leur facilitant des solutions locales et durables. Les collectes partent en cuisine et en Paniers du Mouvement #PourEux.'
    },
    {
        title: 'Pas de planète B',
        text: 'Equipés de triporteurs, biporteurs mais également du soutien des cyclistes du Mouvement #PourEux, on collecte et livre les invendus à 90% à vélo. Cela nous permet de pouvoir servir des bénéficiaires plus isolés ou des personnes mal-logées en situation de forte précarité. Objectif 100% à vélo !'
    }
];
