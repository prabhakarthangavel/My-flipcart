import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  public products:any = ["https://firebasestorage.googleapis.com/v0/b/my-music01.appspot.com/o/tshirt1.jpeg?alt=media&token=21d57ba2-6ac4-49f4-9e07-b350ae9db040",
                            "https://firebasestorage.googleapis.com/v0/b/my-music01.appspot.com/o/tshirt.jpeg?alt=media&token=a0980050-be09-4056-b7d7-1370a0e44a83",
                            "https://firebasestorage.googleapis.com/v0/b/my-music01.appspot.com/o/tshirt3.jpeg?alt=media&token=64eb2bb8-df5f-4e5d-8f3e-c5f5b18a4a8e",
                            "https://firebasestorage.googleapis.com/v0/b/my-music01.appspot.com/o/tshirt4.jpeg?alt=media&token=d882e672-ab90-4b21-86ff-2dc366411892"]
  public str = "tshirts fasdfasdfasdfasdasd";
  constructor() { }

  ngOnInit() {
  }

}
