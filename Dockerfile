FROM node:alpine AS build

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

FROM nginx:alpine AS runtime

COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]