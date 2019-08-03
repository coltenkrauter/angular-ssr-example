import { enableProdMode } from "@angular/core";

import { environment } from "@environments/environment";

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from "@app-server";
export { ngExpressEngine } from "@nguniversal/express-engine";
export { provideModuleMap } from "@nguniversal/module-map-ngfactory-loader";

