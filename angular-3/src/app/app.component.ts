import { Component } from '@angular/core';
import { Construction } from './model/construction';
import { ConstructionService } from './service/construction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-3';

  constructions$ = this.cs.getAll();

  constructor(
    private cs: ConstructionService,
  )
  {

  }

  onDelete(construction:Construction) {
    this.cs.delete(construction.id);
    this.constructions$ = this.cs.getAll();
  }

}
