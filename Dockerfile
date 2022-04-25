FROM alpine:3.14

RUN apk update && apk add nodejs yarn git 

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install --frozen-lockfile

RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start:dev" ]


