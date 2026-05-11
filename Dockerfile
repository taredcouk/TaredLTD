FROM node:24.8.0-alpine3.22
RUN addgroup app && adduser -S -G app app
WORKDIR /app
COPY package*.json .
RUN chown -R app:app /app
USER app
RUN npm install
COPY . .
EXPOSE 3001
ENTRYPOINT ["npm", "run", "start"]