import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  public products:any = ["https://firebasestorage.googleapis.com/v0/b/my-music01.appspot.com/o/tshirt1.jpeg?alt=media&token=21d57ba2-6ac4-49f4-9e07-b350ae9db040",
                           "https://firebasestorage.googleapis.com/v0/b/my-music01.appspot.com/o/tshirt.jpeg?alt=media&token=7c52dfd0-ee58-4eec-9665-223d4a692335"]

  constructor() { }

  ngOnInit() {
  }

}
