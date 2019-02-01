import { Injectable } from '@angular/core';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { Person } from './entities/person';
import { User } from './entities/user';

@Injectable()
export class DatabaseService {

    public connection: Promise<Connection>;
    private readonly options: ConnectionOptions;

    constructor() {
        this.options = {
            type: 'mariadb',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'some_pass',
            database: 'some_db',
            entities: [
                Person,
                User
            ],
            synchronize: false,
            logging: false
        };
        this.connection = createConnection(this.options);
    }
}
