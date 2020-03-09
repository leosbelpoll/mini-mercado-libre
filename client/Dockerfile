# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add default environment variables
ENV REACT_APP_APP_NAME Mini Mercado Libre
ENV REACT_APP_AUTHOR_NAME Leosbel
ENV REACT_APP_AUTHOR_LASTNAME Poll

ENV REACT_APP_API_URL http://localhost:3001

# ex; 1.233,20 or , for 1,233.20
ENV REACT_APP_NUMBER_FORMATED_SEPARATOR .

# install and cache app dependencies
COPY . /app
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

# start app
CMD ["npm", "start"]
