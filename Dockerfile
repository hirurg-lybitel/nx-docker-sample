FROM node:17-alpine3.12 as build

WORKDIR /usr/apps

# RUN yarn add global nx

COPY ./dist/apps .
COPY package.json yarn.lock ./


RUN yarn install --production --immutable --immutable-cache --check-cache && yarn cache clean


# RUN npm install
# RUN yarn nx --version
# RUN npm install
# CMD ["yarn", "startall"]

FROM nginx:1.23-alpine
COPY --from=build /usr/apps/app-1 /usr/share/nginx/html
COPY --from=build /usr/apps/app-1 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
