FROM node:current AS build
WORKDIR /build
COPY . .
RUN npm i
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /build/public .
