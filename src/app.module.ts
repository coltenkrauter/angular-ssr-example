import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CoreModule } from "@core"; // Import libraries
import { AppRoutingModule } from "@router";
import { AppComponent } from "@components/app";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
