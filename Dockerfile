FROM node:17-alpine3.12 as build
RUN echo "build"
WORKDIR /usr/apps

COPY . .
RUN yarn install --immutable --immutable-cache --check-cache && yarn cache clean
RUN rm -rf ./dist
RUN yarn build:all

FROM nginx:1.23-alpine as stage1
RUN echo "stage1"
COPY --from=build /usr/apps/dist/apps/app-1 /usr/share/nginx/html

FROM nginx:1.23-alpine as stage2
RUN echo "stage2"
COPY --from=build /usr/apps/dist/apps/app-2  /usr/share/nginx/html

FROM nginx:1.23-alpine as stage3
RUN echo "stage3"
COPY --from=build /usr/apps/dist/apps/app-3  /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]


FROM keymetrics/pm2:18-alpine as server
RUN echo "server"
WORKDIR /usr/app
COPY --from=build /usr/apps/dist/apps/api-1 src/
COPY --from=build /usr/apps/node_modules src/node_modules
COPY --from=build /usr/apps/pm2.config.js .

ENV PM2_PUBLIC_KEY 2g0zthb6mp3oq16
ENV PM2_SECRET_KEY 4ml4ivoyodxnapp

ENTRYPOINT ["pm2-runtime", "start", "pm2.config.js", "--env=production"]
