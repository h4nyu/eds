import { Argv } from "yargs";
import { App } from "@app/server";

export default {
  command: "start",
  builder: (yargs: Argv) => {
    return yargs.option("port", {
      type: "number",
      alias: "p",
      demandOption: false,
      default: 80,
      describe: "Port",
    });
  },
  handler: async (argv: { port: number }) => {
    const app = App({
      logger: console,
    });
    app.listen({ port: argv.port, host: "0.0.0.0" }, (err, address) => {
      if (err) {
        app.log.error(err);
        process.exit(1);
      }
    });
  },
};
