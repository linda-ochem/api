FROM node

RUN mkdir /app

WORKDIR /app

COPY package*.json myApp /app/

RUN npm install

EXPOSE 3003

CMD [ "node", "server.js" ]