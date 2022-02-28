import { Component } from '@angular/core';
import { DrugService } from './service/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drugstore';
  constructor(
    //private drugService: DrugService,
  ) {
    //drugService.getAll().subscribe(console.log);
   }
}
