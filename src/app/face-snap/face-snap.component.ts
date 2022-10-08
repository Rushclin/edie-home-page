import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent  implements OnInit {
  @Input() faceSnap!:FaceSnap;
  title!: string;
  description!: string;
  creationDate!: Date;
  snaps!: number;
  imgUrl!:string
  isSnapped!:boolean;

  // Initialisation des attributs
  ngOnInit() {
    this.title = "Rushclin Takam's";
    this.description = "La plus belle des creature de la terre, nous le decouvrirons";
    this.snaps = 10;
    this.creationDate = new Date()
    this.imgUrl='https://i.picsum.photos/id/724/200/300.jpg?hmac=MwcEnqDDOgKg6U3WYPytBPH_jurNEK2_2kcknpgP6wg'
    this.isSnapped=false
  }

  onAddSnap=()=> {
    this.snaps++;
    this.isSnapped=!this.isSnapped
  }
  onRemoveSnap=()=> {
    this.snaps--
    this.isSnapped=!this.isSnapped
  }
}
