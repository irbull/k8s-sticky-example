import * as dockerNames from "https://deno.land/x/docker_names@v1.1.0/mod.ts";

const serverName = dockerNames.generateName();
function handler(_req: Request): Response {
  return new Response(
    `Welcome to ${serverName}! I'm running in Pod ${
      Deno.env.get("MY_POD_NAME")
    }`,
  );
}
Deno.serve(handler);
