import { Injectable, Injector } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import * as response from '../intercept/response.json'

const urls=[
  {
    mock:false,
    url:'http://localhost:3000/Persona',
    json:response
  }
]
@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor{
    constructor(private injector: Injector){}

    intercept(request:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      for(const element of urls){
        if(!element.mock){
          continue
          }
        if(request.url==element.url){
          return of(new HttpResponse({status:200, body:((element.json) as any).default}))
          }
      }

      return next.handle(request);
  }


}
