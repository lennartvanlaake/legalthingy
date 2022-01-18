import { DB_NAME, LAWBRADOR_CLIENT } from "@lawbrador/shared/src/db/constants";
import { Umzug, MongoDBStorage } from "umzug";
import { ALL_COLLECTIONS } from '@lawbrador/shared/src/db/collections';

export const migrator = new Umzug({
  migrations: {
    glob: ["src/migrations/*.ts", { cwd: "." }],
    resolve: (params) => {
      if (params.path.endsWith(".ts")) {
        const getModule = () =>
          import(`file:///${params.path.replace(/\\/g, "/")}`);
        return {
          name: params.name,
          path: params.path,
          up: async (upParams) => (await getModule()).up(upParams),
          down: async (downParams) => (await getModule()).down(downParams),
        };
      }
      return {
        name: params.name,
        path: params.path,
        ...require(params.path),
      };
    },
  },
  storage: new MongoDBStorage({
    collection: LAWBRADOR_CLIENT.db(DB_NAME).collection("migrations"),
  }),
  logger: console,
});


migrator.on('beforeCommand', async () => {
	await LAWBRADOR_CLIENT.connect();
	Object.values(ALL_COLLECTIONS).forEach(c => c.connect(LAWBRADOR_CLIENT));
});
migrator.on('afterCommand', async () => {
	await LAWBRADOR_CLIENT.close();
});

export type Migration = typeof migrator._types.migration;
