import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

import { environment } from "@environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  env = environment;
  title: string = "Angular SSR Example";
  pageSpeedURL: string = `https://developers.google.com/speed/pagespeed/insights/?url=${this.env.baseURL}`;

  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar,
  ) {
    let test = document.createElement('audio');
    console.log(!!test.canPlayType)
    console.log(test)
    console.log("test")
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
