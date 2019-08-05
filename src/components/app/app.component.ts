import { Component, Inject, Optional } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { environment } from "@environments/environment";

import { WINDOW } from "@ng-toolkit/universal";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  env = environment;
  title: string = "Angular SSR Example";
  pageSpeedURL: string = `https://developers.google.com/speed/pagespeed/insights/?url=${this.env.baseURL}`;
  window;

  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar,
    @Optional() @Inject(WINDOW) private window1: Window
  ) {
    if (window1) {
        this.window = window1;
    } else {
        this.window = window;
    }
    
    console.log(this.window.URL);

    //let test = document.createElement('audio');
    //console.log(!!test.canPlayType)
    //console.log(test)
    //console.log("test")
  }

  async getPageSpeed() {
    try {
      let pageSpeedAPIURL: string = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${this.env.baseURL}&strategy=mobile`;
      
      let response = await this.http.get<any>(pageSpeedAPIURL).toPromise();
      console.log(response.lighthouseResult.categories.performance.score);
    } catch (exception) {
      console.log(exception);
    }
  }
}
