# ------------
# Build image
# ------------
FROM node:16

# Install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Copy over all files
COPY . .

RUN npm run build

# ------------
# Run image
# ------------
FROM node:16-slim

WORKDIR /app
COPY --from=0 /app .

EXPOSE 3000

CMD ["node", "./build"]
