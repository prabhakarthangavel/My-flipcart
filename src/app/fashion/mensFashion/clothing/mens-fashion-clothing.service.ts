import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MensFashionClothingService {
  public getUrl = "https://api.jsonbin.io/b/5c926ad508b9a73c3abce0db/1";
  public updateUrl = "https://api.jsonbin.io/b/5c91135008b9a73c3abb8d6a";

  constructor(private http:HttpClient)  { }

  getItems(){
    return this.http.get(this.getUrl,{
      headers: new HttpHeaders().set("secret-key","$2a$10$H49/ucBrvgYM.dC4qGLrd.0OuECY6VVD8076HLH30y3DLgsAkE/Pu")
    }); 
  }

  putItems(post){
    return this.http.put(this.updateUrl,post,{
      headers: new HttpHeaders({
        "secret-key":"$2a$10$H49/ucBrvgYM.dC4qGLrd.0OuECY6VVD8076HLH30y3DLgsAkE/Pu",
        "Content-type":"application/json",
        "versioning":"false"
      })
    });
  }
}
