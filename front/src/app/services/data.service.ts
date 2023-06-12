import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private jsonElement: any;

  setJsonElement(json: any) {
    this.jsonElement = json;
  }

  getJsonElement() {
    return this.jsonElement;
  }
}
