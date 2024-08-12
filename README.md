# Build Skeleton Website to Learn Analytics

Used "JS NODE Git Teacher Guru GPT" for code

## Prep
### Install NodeJS with nvm
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04

### git-clone this repo
### Create new dev branch named "dev" to separate our work
`git checkout -b <your-new-branch-name`  
Now your work will be saved to a separate branch.  
To push to the dev branch:  
`git push  --set-upstream origin <your-new-branch-name`  

## Server Setup
### Install various NPM packages

`npm install express`  
`npm install dotenv`  

### Start Local Server

Within project directory run:  
`node server.js`  
Open a browser and navigate to http://localhost:3000 to see the website.


## Expose localhost server to the Internet 

### Install Ngrok

https://ngrok.com

### Download. Install in PROJECT folder

Remove the URL from the line they tell you to run  
Place .tar in project directory  

`tar -xvzf ngrok-v3-stable-linux-amd64.tgz -C /usr/local/bin`  

Run to get your unique token to receive a config file:  

`ngrok config add-authtoken 2kBL6WY38NvKFmlvCA81MGeQoKc_3xfyQk5Jci9Aqxx1ZssE1`  
This saves it to your hidden config file  

### Expose the server

Run  
`ngrok http http://localhost:8080`  

Also visit http://localhost:4040. This depicts super-basic HTTP request examples.  
Stop the ngrok server with Cntrl + C.  

## Set up free ngrok domain
Visit https://dashboard.ngrok.com/cloud-edge/domains
Generate free sample domain  
Stop localhost:8080 domain running above with Cntrl + C  
Run provided code to intiate a new tunnel running the new domain (change the port to 8080):  
<code>
Visit generated domain  


## Analytics connection
Open Google Analytics account here: https://analytics.google.com  
Create a new website property.  
Copy the tracking code GA will provide.  
Place it in the index.html file where requested.  
This is awful security practice, but let's just get this party started and discuss .env later.  

## License
Information about the project's license.  
CC License

# Resources
More NodeJS tutorials: https://www.guru99.com/node-js-tutorial.html  
Might use this project in further stages https://github.com/segmentio/analytics-node