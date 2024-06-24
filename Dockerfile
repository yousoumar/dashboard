FROM node:18

WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY pnpm-lock.yaml pnpm-workspace.yaml ./

COPY frontend/package.json ./frontend/
COPY backend/package.json ./backend/

RUN pnpm install --filter "./frontend/" --filter "./backend/"

COPY frontend/ ./frontend/
COPY backend/ ./backend/

EXPOSE 3000 4200

CMD pnpm -r start:dev