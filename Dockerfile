FROM denoland/deno:1.35.3
EXPOSE 8000
WORKDIR /app
USER deno
COPY . .
RUN deno cache server.ts
RUN mkdir -p /var/tmp/log
CMD ["run", "--allow-all", "server.ts"]
