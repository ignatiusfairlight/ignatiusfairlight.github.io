FROM node:24
RUN npm i -g pnpm
WORKDIR /app
COPY . .
RUN pnpm install
EXPOSE 5173
CMD ["pnpm", "run", "dev", "--", "--host", "0.0.0.0"]
