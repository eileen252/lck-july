import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserSummaryDialog } from './user-summary/user-summary-dialog.component';
import { ArtThumbnailComponent } from './art-thumbnail/art-thumbnail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    UserSummaryDialog,
    ArtThumbnailComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  providers: [UserSummaryDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
