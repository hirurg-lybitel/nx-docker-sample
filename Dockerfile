FROM node:17-alpine3.12

WORKDIR /app

COPY . .

RUN yarn install --immutable --immutable-cache --check-cache && yarn cache clean
# RUN npm install
# CMD ["yarn", "startall"]
