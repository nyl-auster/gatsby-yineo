---
title: Configurer un dédié avec Nginx avec certificat ssl renouvelable pour une application Node.js
date: 2018-05-29
path: /blog/configurer-un-dedie-avec-nginx-avec-certificat-ssl-renouvelable-pour-une-application-node-js
---

Besoin de configurer vous-même httpS sur un dédié pour vos applications Node.js ? Pas de long discours ici, un exemple de config à copier-coller, et que vous pouvez forker pour améliorer si besoin (je ne suis pas un expert Nginx, loin s’en faut). L’exemple ci-dessous utilise certbot (https://certbot.eff.org/ ), qui déploie des certificats ssl de Let’s Encrypt et ajoute automatiquement une tâche cron pour que le certificat ssl soit renouvelé automatiquement, et ça c’est bien !

```
# first install certbot and then run this command on your server
# certbot certonly --authenticator standalone --pre-hook "nginx -s stop" --post-hook "nginx"
# this will stop for a few seconds your nginx server and generate your Let's Encrypt ssl certificates, and configure
# cron so that certificates are renewed automatically \o/

# now create your nginx conf for your nodejs app :

# on port 80 (http), redirect to httpS (443)
server {
	if ($host = www.your-domain.com) {
		return 301 https://$host$request_uri;
	}
	listen 80;
	server_name www.your-domain.com;
	return 404; # managed by Certbot
}

server {
	server_name www.your-domain.com;
	location / {
    # serve the node process running on port 3000
		proxy_pass http://localhost:3000;
	}
  # use certificates managed by certbot
	listen 443 ssl; # managed by Certbot
	ssl_certificate /etc/letsencrypt/live/www.your-domain.com/fullchain.pem; # managed by Certbot
	ssl_certificate_key /etc/letsencrypt/live/www.your-domain.com/privkey.pem; # managed by Certbot
	include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
	ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}
```
