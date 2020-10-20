export interface IInfoCard {
  title: string;
  titleIcon: string;
  text: string;
}


export const cardsInfo: IInfoCard[] = [
  {
    title: 'Que cuisine-t-on ?',
    text: 'Une cuisine <span class="font-semibold">végétarienne</span> qui permet d\'inclure tous nos bénéficiaires. <br/> A partir des <span class="font-semibold">invendus</span> issus de producteurs locaux de la Région Auvergne-Rhône-Alpes, d\'artisans boulangers et de commerçants militants du zéro déchet, qu\'on transforme en savoureux repas complets. <br/> On transforme ainsi chaque Dimanche près de <span class="font-semibold">100-150 repas</span> complets végétariens.',
    titleIcon: '<i class="mr-2 fas fa-cookie-bite"></i>',
  },
  {
    title: 'Où cuisine-t-on ?',
    text: '<span class="font-semibold">En rue, en squat et en camps urbains</span> afin d\'aller à nos bénéficiaires et non l\'inverse. <br/> Notre accès aux squats et camps urbains est un gage de notre crédibilité et proximité avec nos bénéficiaires, mais également <span class="font-semibold">une volonté de valoriser socialement ces lieux.</span>',
    titleIcon: '<i class="mr-2 fas fa-map-marker-alt"></i>',

  },
  {
    title: 'Objectif zéro déchet',
    text: 'Nous <span class="font-semibold">compostons 90%</span> de nos déchets organiques via des composteurs mis à disposition par nos partenaires. <br/> Nos féculents, légumineuses, huiles et épices sont <span class="font-semibold">issus du vrac</span>. <br/> Nous servons les repas dans <span class="font-semibold">des bocaux</span> et mettons en place <span class="font-semibold">une stratégie de collecte</span> auprès des bénéficiaires. <br/> Nos éponges sont en couture zéro déchet et donc réutilisables. <br/> Nous <span class="font-semibold">contrôlons et optimisons</span> notre consommation d\'eau.',
    titleIcon: '<i class="mr-2 fas fa-recycle"></i>',
  },
  {
    title: 'Militants',
    text: 'Nous combattons le gaspillage alimentaire. Pour cela nous pratiquons et initions au déchétarisme, puis responsabilisons toujours plus les commerçants locaux en leur facilitant des solutions locales et durables. Les collectes partent en cuisine et en Paniers du Mouvement #PourEux.',
    titleIcon: '<i class="mr-2 fas fa-fist-raised"></i>',
  },
  {
    title: 'Pas de planète B',
    text: 'Equipés de <span class="font-semibold">triporteurs, biporteurs</span> mais également du soutien des cyclistes du <span class="font-semibold">Mouvement #PourEux</span>, on collecte et livre les invendus à 90% à vélo. <br/> Cela nous permet de pouvoir servir des bénéficiaires plus isolés ou des personnes mal-logées en situation de forte précarité. <span class="font-semibold">Objectif 100% à vélo !</span>',
    titleIcon: '<i class="mr-2 fas fa-globe-europe"></i>',
  },
];
