# GrailleV3

## TODO: 

* [ ] improve responsivity page "actualité"
* [ ] add google analytics 
* [ ] check SEO

---
---


## Idée

### Page "Nos besoins" version 1
Proposer une page indiquant les différents besoins financier de Graille.
Pour chaque élément mettre un budget "au mois" et une barre de progression (%) en fonction des dons déjà recu.

Exemple d'élément à mettre en avant ;
* comsommable cuisine
* frais entretien vélo
* frais de fonctionnement et logistique (stockage, flyer, materiel)

**=> Objectif:** proposer des éléments concrets pour faire un don sur un sujet particulier

---


### Page "Nos besoins" version 2
Dans le même principe que la version 1, mettre en avant un besoin materiel (nouveau vélo, materiel de cuisine).
Et proposer au gens de faire un don spécifique sur cette élément.

Une fois à 100% on l'achete et on leur envoie un petit mail de remerciement

**Idée design:** https://tailwindcomponents.com/component/single-pricing

**=> Objectif:** mettre en place des "mini" financement participatif sur un objet plus ou moins chère. C'est du concret pour l'utilisateur 

---

### Page "FAQ"
Proposer une page avec des questions réponse, a voir si on a des questions qui nous reviennes souvent : 

**Idée design:** https://tailwindcomponents.com/component/frequently-asked-question-faq

---

### Page ou section "Contact"
**Idée design:** https://tailwindcomponents.com/component/contact-form-1

---
---


## Design inspiration : 
* Top navbar menu : https://tailwindcomponents.com/component/responsive-navbar-with-grid-dropdown
* Footer : https://tailwindcomponents.com/component/responsive-footer
* timeline : https://tailwindcomponents.com/component/timeline-dialog

---
---

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---
---

## Infra : 

### Deployment on DigitalOcean droplet. 

* Base package installed : 
```
tree wget git vim nano telnet htop bind-utils dos2unix iotop curl zip unzip
```

* Maintenance utility :
```
logrotate apticron debian-goodies 
```

* nginx config : https://medium.com/faun/my-nginx-configuration-for-angular-6f748a4ff683
**WARN: some security header are commented for functionnal purpose !!**

* Angular deployment : 
https://medium.com/@balramchavan/deploy-angular-application-in-nginx-server-on-digitalocean-ubuntu-droplet-28380524811e




### Tools

* HTTP Header security check : https://securityheaders.com/
* Website performance check : https://gtmetrix.com/
* HTTPS config check : https://www.ssllabs.com/