import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MensFashionClothingService {
  public url = "https://api.jsonbin.io/b/5c8fd7a92d33133c4016218c";

  constructor(private http:HttpClient)  { }
}
