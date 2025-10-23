FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm in

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev", "--", "--host"]

