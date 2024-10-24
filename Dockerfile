# Don't try this at home, kids. This is a bad practice. (use multi-stage builds and run as non-root)
FROM node:lts
WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm install
COPY src ./src
EXPOSE 3000
CMD ["npx", "ts-node", "src/index.ts"]
