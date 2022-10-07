import { HttpMockRequestInterceptor } from './intercept/HttpInterceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabellaComponent } from './tabella/tabella.component';
import { FormComponent } from './form/form.component';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TabellaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
   {
     provide: HTTP_INTERCEPTORS,
     useClass: HttpMockRequestInterceptor,
     multi: true
   }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
