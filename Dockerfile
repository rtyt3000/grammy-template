FROM oven/bun:slim AS builder
LABEL authors="rtyt2000"

WORKDIR /usr/src/app

RUN apt-get update -y \
&& apt-get install -y openssl

COPY package.json bun.lock ./
COPY prisma ./prisma

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

CMD ["sh", "-c", "bun run db:deploy && bun run start"]