FROM node:16-alpine

# create destination directory
RUN mkdir -p /usr/src/todo-list-app
WORKDIR /usr/src/todo-list-app

# # update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/todo-list-app
COPY package.json .
COPY package-lock.json .
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# expose 5000 on container
EXPOSE 5000

# start the app
CMD [ "npm", "run", "start" ]