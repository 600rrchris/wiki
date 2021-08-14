# syntax=docker/dockerfile:1.2
ARG APP_PATH=/opt/outline
FROM node:14-alpine AS deps-common

ARG APP_PATH
WORKDIR $APP_PATH
COPY ./package.json ./package-lock.json ./

# ---
FROM deps-common AS deps-dev
RUN npm install --save-dev --no-optional && npm cache clean --force

# ---
FROM deps-common AS deps-prod
RUN npm install --save-prod && npm cache clean --force

# ---
FROM node:14-alpine AS builder

ARG APP_PATH
WORKDIR $APP_PATH

COPY . .
COPY --from=deps-dev $APP_PATH/node_modules ./node_modules
RUN npm run build

# ---
FROM node:14-alpine AS runner

ARG APP_PATH
WORKDIR $APP_PATH
ENV NODE_ENV production

COPY --from=builder $APP_PATH/build ./build
COPY --from=builder $APP_PATH/server ./server
COPY --from=builder $APP_PATH/public ./public
COPY --from=builder $APP_PATH/.sequelizerc ./.sequelizerc
COPY --from=deps-prod $APP_PATH/node_modules ./node_modules
COPY --from=builder $APP_PATH/package.json ./package.json

RUN addgroup -g 1001 -S nodejs && \
  adduser -S nodejs -u 1001 && \
  chown -R nodejs:nodejs $APP_PATH/build

USER nodejs

EXPOSE 3000
CMD ["npm", "start"]