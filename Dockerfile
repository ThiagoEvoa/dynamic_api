FROM node:20-alpine

WORKDIR /home/pi0/dynamic_api

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 9010

CMD [ "node", "app.js" ]