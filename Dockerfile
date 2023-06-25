FROM node:18

# Create app directory
WORKDIR /app
COPY . .
RUN npm install package.json
RUN npx tsc
# RUN npx prisma migrate dev --name init // the command cannot run when there is NO database

EXPOSE 3001
CMD [ "node", "./src/index.js" ]
