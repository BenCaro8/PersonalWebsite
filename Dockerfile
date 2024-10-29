FROM node:20.18.0-alpine
WORKDIR /personalwebsite/

COPY package.json /personalwebsite

COPY . .

RUN yarn && yarn build

FROM nginx:alpine

COPY --from=0 /personalwebsite/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]