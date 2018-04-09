import { Injectable } from '@angular/core';

@Injectable()
export class NgServiceService {
  loaded:boolean = false;

  constructor() { }

  Load() {
    this.loaded = true;
  }

  IsLoaded() {
    return this.loaded;
  }
}
