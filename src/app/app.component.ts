import { Component, OnInit } from '@angular/core';
import { CardFormationModel } from './models/card-formation.model';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
mySnap!:FaceSnap;
myFirstSnap!:FaceSnap;
faceSnaps!:FaceSnap[];

ngOnInit(){
  
  this.faceSnaps=[
    {
      title:"Rushclin Le boy", 
      description: "Rushclin's est un prodige de la fete", 
      dateCreation: new Date(), 
      snaps:10, 
      imgUrl:'https://i.picsum.photos/id/724/200/300.jpg?hmac=MwcEnqDDOgKg6U3WYPytBPH_jurNEK2_2kcknpgP6wg', 
      location: "Douala"
    }, 
    {
      title:"Rushclin Makam", 
      description: "Rushclin's est un prodige de la fete", 
      dateCreation: new Date(), 
      snaps:10, 
      imgUrl:'https://i.picsum.photos/id/724/200/300.jpg?hmac=MwcEnqDDOgKg6U3WYPytBPH_jurNEK2_2kcknpgP6wg', 
    }, 
    {
      title:"Rushclin Takam", 
      description: "Rushclin's est un prodige de la fete", 
      dateCreation: new Date(), 
      snaps:10, 
      imgUrl:'https://i.picsum.photos/id/724/200/300.jpg?hmac=MwcEnqDDOgKg6U3WYPytBPH_jurNEK2_2kcknpgP6wg', 
      
    }
  ]

  this.mySnap={
    title:"Rushclin Le boy", 
    description: "Rushclin's est un prodige de la fete", 
    dateCreation: new Date(), 
    snaps:10, 
    imgUrl:'https://i.picsum.photos/id/724/200/300.jpg?hmac=MwcEnqDDOgKg6U3WYPytBPH_jurNEK2_2kcknpgP6wg', 
    location: "Douala"
  }

  this.myFirstSnap={
    title:"Rushclin Takam", 
    description: "Rushclin's est un prodige de la fete", 
    dateCreation: new Date(), 
    snaps:10, 
    imgUrl:'https://i.picsum.photos/id/724/200/300.jpg?hmac=MwcEnqDDOgKg6U3WYPytBPH_jurNEK2_2kcknpgP6wg', 
    
  }

}
}
