import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CoreModule } from "@core"; // Import libraries
import { AppRoutingModule } from "@router";
import { AppComponent } from "@components/app";

import { GaugeModule } from "angular-gauge";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    GaugeModule.forRoot(),
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
