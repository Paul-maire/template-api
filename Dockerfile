FROM node:12.18-alpine

RUN mkdir -p /template
COPY . /template
WORKDIR /template

RUN set -ex; \
	apk add postgresql-client; \
	yarn global add knex pg;

RUN yarn install

ENV NODE_ENV=development

COPY . /template

EXPOSE 4000
