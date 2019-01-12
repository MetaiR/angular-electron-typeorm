import { Injectable } from '@angular/core';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { Settings } from './repositories/settings';
import { Person } from './entities/person';

@Injectable()
export class DatabaseService {

    public connection: Promise<Connection>;
    private readonly options: ConnectionOptions;

    constructor() {
        Settings.initialize();
        this.options = {
            type: 'mariadb',
            host: 'localhost',
            port: 3306,
            username: 'admin',
            password: '12514110',
            database: 'loan',
            entities: [
                Person
            ],
            synchronize: true,
            logging: false
        };
        this.connection = createConnection(this.options);
    }
}
