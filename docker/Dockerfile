FROM cypress/included:15.16.0

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .