import { Argv } from "yargs";

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
  handler: async () => {}
};
