# Project Title

A brief description of what this project is about.

Used "JS NODE Git Teacher Guru GPT" for code

## Table of Contents

- Prep
### Install NodeJS with nvm
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04

### Clone repo Laura provided

- Server Setup
## Install various NPM packages

npm install -g http-server
npm install dotenv

## Start Local Server

Within project directory run:
http-server

Open a browser and navigate to http://localhost:8080 to see the website.

- Expose localhost server to the Internet 
# (SCARY! DO NOT DO AT HOME UNTIL YOU UNDERSTAND FIREWALLS!)

## Install Ngrok

https://ngrok.com

### Download. Install in PROJECT folder

Remove the URL from the line they tell you to run
Place .tar in project directory

tar -xvzf ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin

Run to get your unique token to receive a config file:

ngrok config add-authtoken 2kBL6WY38NvKFmlvCA81MGeQoKc_3xfyQk5Jci9Aqxx1ZssE1
This saves it to your hidden config file

### Finally expose the server

Run
ngrok http http://localhost:8080

Also visit http://localhost:4040. This depicts super-basic HTTP request examples. 

- Analytics connection
## Now open Google Analytics account here: https://analytics.google.com

Create a new website property. 
Copy the tracking code GA will provide. 
Place it in the .gitignore file. Will explain more soon. 


## License

Information about the project's license.
CC License