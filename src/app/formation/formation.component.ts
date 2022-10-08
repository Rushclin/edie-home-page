import { Component, Input, OnInit } from '@angular/core';
import { CardFormationModel } from '../models/card-formation.model';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})

export class FormationComponent implements OnInit {
  
cardFormations!:CardFormationModel[]

  ngOnInit() {

    this.cardFormations=[
      {
        icon: 'edit', 
        title: 'UI/UX Design', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.'
      }, 
      {
        icon: 'code_off', 
        title: 'Front End', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.'
      }, 
      {
        icon: 'widgets', 
        title: 'Back End',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.'
      }
    ]
  }

}
