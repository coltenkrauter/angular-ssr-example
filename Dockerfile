# https://dev.to/avatsaev/create-efficient-angular-docker-images-with-multi-stage-builds-1f3n

# STAGE 1: Build
FROM node:12.5.0-alpine as builder

ARG ENV=dev

WORKDIR /tmp
ADD package.json ./package.json
ADD package-lock.json ./package-lock.json

RUN npm ci

ADD . .

RUN npm run build -- --configuration=$ENV --output-path=dist

# STAGE 2: Run
FROM nginx:1.17.2-alpine

# From "builder" stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /tmp/dist /usr/share/nginx/html
ADD nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD nginx -g "daemon off;"
