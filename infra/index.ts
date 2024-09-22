import fastify from "fastify";
import postgres from "postgres";
import { Lock } from "@oniku/lockfile"
import swagger from "@fastify/swagger";
import { z } from "zod";

export const App = (props: { logger: any }) => {
  const app = fastify({
    maxParamLength: 5000,
  });

  const lock = Lock({ dir: "/tmp", filename: "app.lock" });

  app.ready(async () => {
    props.logger.log(app.printRoutes());
  });
  return app;
};
