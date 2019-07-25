# https://dev.to/avatsaev/create-efficient-angular-docker-images-with-multi-stage-builds-1f3n

# STAGE 1: Build
FROM node:12.5.0-alpine

ARG ENV

WORKDIR /tmp
ADD package.json ./package.json
ADD package-lock.json ./package-lock.json

RUN npm ci

ADD . .

#RUN npm run build:ssr:$ENV
RUN npm run build:ssr

CMD ["npm", "run", "serve:ssr"]
