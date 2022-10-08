import { Component, Input, OnInit } from '@angular/core';
import { CardFormationModel } from '../models/card-formation.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {
@Input() cardFormation!:CardFormationModel

}
