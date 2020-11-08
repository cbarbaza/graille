# Graille

## Design inspiration :

- Top navbar menu : https://tailwindcomponents.com/component/responsive-navbar-with-grid-dropdown
- Footer : https://tailwindcomponents.com/component/responsive-footer
- timeline : https://tailwindcomponents.com/component/timeline-dialog

---

---

## Infra :

### Deployment on DigitalOcean

- OS : ubuntu
- Server web : NGINX
- Nginw config : external/nginx

- Base package installed :

```
tree wget git vim nano telnet htop dos2unix iotop curl zip unzip
```

- Maintenance and secuirty utility :

```
logrotate apticron debian-goodies
```

- nginx config : https://medium.com/faun/my-nginx-configuration-for-angular-6f748a4ff683
  **WARN: some security header are commented for functionnal purpose !!**

- Angular deployment :
  https://medium.com/@balramchavan/deploy-angular-application-in-nginx-server-on-digitalocean-ubuntu-droplet-28380524811e

### Tools

- HTTP Header security check : https://securityheaders.com/
- Website performance check : https://gtmetrix.com/
- HTTPS config check : https://www.ssllabs.com/
