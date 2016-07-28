FROM node:6.3.0-wheezy

RUN groupadd -r nodejs && useradd -m -r -g nodejs nodejs
USER nodejs

RUN mkdir -p /home/nodejs/app

ADD package.json /home/nodejs/app/package.json

WORKDIR /home/nodejs/app

RUN npm install

ADD . /home/nodejs/app

EXPOSE 3000

CMD ["npm", "start"]
