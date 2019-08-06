// core.module.ts
// CoreModule contains code that will be used to instantiate app and load some core functionality.

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  MatBadgeModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatRippleModule, MatTabsModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatButtonToggleModule, 
  MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule, MatSelectModule,
  MatSnackBarModule, MatTableModule, MatToolbarModule, MatTooltipModule, MatSlideToggleModule, MatListModule, 
  MatChipsModule, MatProgressBarModule
} from '@angular/material';

// https://github.com/FortAwesome/angular-fontawesome
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { RouterModule } from '@angular/router';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

let modules = [
  BrowserAnimationsModule, FormsModule, HttpClientModule, MatBadgeModule,
  MatButtonModule, MatCardModule, MatCheckboxModule, MatRippleModule, MatTabsModule, MatDialogModule,
  MatDividerModule, MatExpansionModule, MatFormFieldModule, MatButtonToggleModule, MatGridListModule,
  MatIconModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule, MatSelectModule,
  MatSnackBarModule, MatTableModule, MatToolbarModule, MatTooltipModule, MatSlideToggleModule, MatListModule,
  ReactiveFormsModule, RouterModule, MatChipsModule, MatProgressBarModule
];

@NgModule({
  imports: [
    modules,
  ],
  exports: [
    modules,
  ],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}