import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";

import { AppModule } from "@app";
import { AppComponent } from "@components/app";
import { ModuleMapLoaderModule } from "@nguniversal/module-map-ngfactory-loader";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
