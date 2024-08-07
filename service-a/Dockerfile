FROM node:14
WORKDIR /app
COPY package.json package-lock.json ./
RUN apt-get update
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.json"]