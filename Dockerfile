FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

COPY . .

CMD ["npm", "run", "dev" ]