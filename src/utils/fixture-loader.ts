import * as path from 'path';
import { Builder, fixturesIterator, Loader, Parser, Resolver } from 'typeorm-fixtures-cli/dist';
import { getRepository } from 'typeorm';
import createConnection from './create-type-orm-connection';

const loadFixtures = async (fixturesPath: string) => {
    let connection;

    try {
        connection = await createConnection();
        await connection.synchronize(true);

        const loader = new Loader();
        loader.load(path.resolve(fixturesPath));

        const resolver = new Resolver();
        const fixtures = resolver.resolve(loader.fixtureConfigs);
        const builder = new Builder(connection, new Parser());

        for (const fixture of fixturesIterator(fixtures)) {
            const entity = await builder.build(fixture);
            // @ts-ignore
            await getRepository(entity.constructor.name).save(entity);
        }
        return connection;
    } catch (err) {
        throw err;
    }
};

export default loadFixtures;
