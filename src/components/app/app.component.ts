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
  pageSpeedScore: number = 0;
  pageSpeedClicked = false;
  pageSpeedLoading = true;
  gaugeClass: string = "slow";

  constructor(
    private http: HttpClient,
    public snack: MatSnackBar,
  ) {}

  async getPageSpeed() {
    this.pageSpeedClicked = true;
    try {
      let pageSpeedAPIURL: string = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${this.env.baseURL}&strategy=mobile`;
      let response = await this.http.get<any>(pageSpeedAPIURL).toPromise();
      this.pageSpeedScore = response.lighthouseResult.categories.performance.score * 100;

      if(this.pageSpeedScore >= 0 && this.pageSpeedScore < 50) {
        this.gaugeClass = "slow";
      } else if(this.pageSpeedScore >= 50 && this.pageSpeedScore < 90) {
        this.gaugeClass = "average";
      } else if(this.pageSpeedScore >= 90 && this.pageSpeedScore <= 100) {
        this.gaugeClass = "fast";
      }
    } catch (exception) {
      this.snack.open("Error getting PageSpeed Insights score");
      console.log(exception);
    } finally {
      this.pageSpeedLoading = false;
    }
  }
}
