import { Component } from '@angular/core';
import { DatabaseService } from './data-access/database.service';
import { User } from './data-access/entities/user.entity';
import { Person } from './data-access/entities/person';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Loan App';

    users: User[] = [];
    displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Age'];

    firstName = '';
    lastName = '';
    age = '';

    constructor(private databaseService: DatabaseService) {
        this.getUsers();
        this.databaseService.connection.then(
            connection =>
                connection.manager.find(Person).then(
                    persons => console.log(persons)
                )
        );
    }

    getUsers() {
        this.databaseService
            .connection
            .then(() => User.find())
            .then(users => {
                this.users = users;
            });
    }

    addUser() {
        const user = new User();

        user.FirstName = this.firstName;
        user.LastName = this.lastName;
        user.Age = +this.age;

        this.databaseService
            .connection
            .then(() => user.save())
            .then(() => {
                this.getUsers();
            })
            .then(() => {
                this.firstName = '';
                this.lastName = '';
                this.age = '';
            });
    }

}
