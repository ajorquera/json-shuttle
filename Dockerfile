FROM node:20-alpine
WORKDIR /app
COPY package.json /app
COPY . /app
RUN yarn 
RUN yarn build

CMD ["node","./dist/index.js"]