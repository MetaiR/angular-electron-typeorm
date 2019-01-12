import { Component } from '@angular/core';
import { DatabaseService } from './data-access/database.service';
import { Person } from './data-access/entities/person';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Loan App';

    constructor(private databaseService: DatabaseService) {
        this.databaseService.connection.then(
            connection =>
                connection.manager.find(Person).then(
                    persons => console.log(persons)
                )
        );
    }

}
