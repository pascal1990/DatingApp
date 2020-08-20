import { Injectable } from '@angular/core';
import * as alertity from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallback: () => any){
    alertity.confirm(message, (e: any) => {
      if(e){
        okCallback();
      }else{}
    });
  }

  success(message: string){
    alertity.success(message);
  }
  error(message: string){
    alertity.error(message);
  }
  warming(message: string){
    alertity.warming(message);
  }
  message(message: string){
    alertity.message(message);
  }

}
