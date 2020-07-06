# react-express
react front end and express backend app

#clone the repository to your vm
git clone https://github.com/anilbhattaraitoronto/react-express.git
#Move to the project folder
cd react-express
#Install express dependencies
npm install
#move to front end
cd front
#Install front-end dependencies
npm i
#generate build folder
npm run build #this command is provided by create-react-app

# go back to root project folder
cd ../

# start the pm2 process manager

pm2 start server.js --name react-express

##Set up NGINX proxy

# go to nginx app conf folder
cd /etc/nginx/conf.d

# create conf file for the project
sudo vim react-express.conf

# paste the following server block

server {
  server_name your_ip_or_domain;
  
  # location block for react front end at the root
  location / {
    root /path/to/your/react/build ;
    $try_files $uri /index.html ;
  }
  # location block for serving the api requests
  location ^~ /api {
  
  proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-NginX-Proxy true;
    proxy_pass http://localhost:5000/;
    proxy_ssl_session_reuse off;
    proxy_set_header Host $http_host;
    proxy_cache_bypass $http_upgrade;
    proxy_redirect off;
  
  }


}

# If you have domain, get install ssl certificate

# update and upgrade ubuntu
sudo apt update && sudo apt upgrade

# I am assuming certbot is already installed

#List the domains that you want to install certificate on

sudo certbot --nginx

# Follow the certbot instructions. They are pretty straightforward.

