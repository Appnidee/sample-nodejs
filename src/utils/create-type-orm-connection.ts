import { getConnectionOptions, createConnection } from 'typeorm';

export default async () => {
    const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);
    console.log("database connected " + process.env.NODE_ENV)
    console.log({ ...connectionOptions})
    return createConnection({ ...connectionOptions, name: 'default' });
};
