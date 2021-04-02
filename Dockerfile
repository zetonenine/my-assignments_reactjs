FROM node:15.13.0-alpine
 
WORKDIR /usr/src
 
# Copy files
COPY . .
 
# Install dependencies, use frozen lockfile
RUN npm ci
 
# Run build
RUN npm run build
 
EXPOSE 8080
 
CMD [ "npm", "start" ]
