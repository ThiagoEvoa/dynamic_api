FROM node:20-alpine

WORKDIR /home/pi0/dynamic_api

COPY package*.json ./
RUN npm install --production

COPY . .

# Expose both ports
EXPOSE 9010
EXPOSE 9011

CMD [ "node", "app.js" ]