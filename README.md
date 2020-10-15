# Graille

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

### Deployment on DigitalOcean

* OS : ubuntu
* Server web : NGINX
* Nginw config : external/nginx

* Base package installed : 
```
tree wget git vim nano telnet htop dos2unix iotop curl zip unzip
```

* Maintenance and secuirty utility :
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