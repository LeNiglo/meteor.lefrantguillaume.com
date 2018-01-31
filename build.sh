#!/usr/bin/env bash

if [[ $(/usr/bin/id -u) -ne 0 ]]; then
    echo "Not running as root"
    exit
fi

sudo meteor --allow-superuser build --server-only /home/lefrantguillaume/.
cd /home/lefrantguillaume/
sudo rm -rf bundle/
sudo tar -xzf beta.lefrantguillaume.com.tar.gz
sudo rm -f beta.lefrantguillaume.com.tar.gz
cd bundle/programs/server/
sudo npm install --production
sudo chown lefrantguillaume:lefrantguillaume -R /home/lefrantguillaume
sudo pm2 restart /home/leniglo/ecosystem.config.js --only lefrantguillaume
sudo pm2 show lefrantguillaume
