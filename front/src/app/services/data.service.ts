import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private jsonElement: any;
  private arrayEl1: any = [];
  private arrayEl2: any = [];

  setJsonElement(json: any) {
    this.jsonElement = json;
  }

  getJsonElement() {
    return this.jsonElement;
  }

  setArrayEl1(array: any) {
    this.arrayEl1 = array;
  }

  getArrayEl1() {
    return this.arrayEl1;
  }

  setArrayEl2(array: any) {
    this.arrayEl2 = array;
  }

  getArrayEl2() {
    return this.arrayEl2;
  }
}
