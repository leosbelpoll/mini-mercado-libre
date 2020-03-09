FROM node:10

# set working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN npm install

# Bundle app source
COPY . .

# Set default environment variables
ENV PORT 3001
ENV APP_NAME "API Mini Mercado Libre"
ENV API_URL https://api.mercadolibre.com
ENV AUTHOR_NAME Leosbel
ENV AUTHOR_LASTNAME Poll
ENV CACHE_MILISECONDS 60000
ENV ITEMS_LIMIT 4
EXPOSE 3001

CMD ["npm", "start"]
