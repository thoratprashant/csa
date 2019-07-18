import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./../app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { FlexLayoutModule } from "@angular/flex-layout";


// import { FlexLayoutModule } from '@angular/flex-layout';
// import { TranslateModule } from '@ngx-translate/core';
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { 
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatOptionModule,
  MatSelectModule,
  MatMenuModule,
  MatSnackBarModule,
  MatGridListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatTabsModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatExpansionModule,
  MatSliderModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { LandingComponent } from 'app/views/landing/landing.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { PrimaryButtonDirective, SecondaryButtonDirective} from './directives/button.directive';
import { HttpClientModule } from '@angular/common/http';

var moduleToExport = [
    AppComponent,
    HeaderNavComponent,
    LandingComponent,
    SignInComponent,
    PrimaryButtonDirective,
    SecondaryButtonDirective,
   
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,    
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDialogModule,    
    MatFormFieldModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSliderModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    HttpClientModule
    // FlexLayoutModule,
    // TranslateModule,
    // PerfectScrollbarModule,
  ],
  entryComponents: [],
  providers: [],
  declarations: moduleToExport,
  exports: moduleToExport 
})
export class SharedModule { }
