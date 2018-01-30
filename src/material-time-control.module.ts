
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
    MatButtonModule, MatButtonToggleModule,
    MatDialogModule, MatIconModule, MatInputModule,
    MatSelectModule, MatToolbarModule,
    MatFormFieldModule
} from '@angular/material';

import {
  WMatTimePickerComponent,
  WTimeDialogComponent,
  WClockComponent,
  WTimeComponent
} from './time-control';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WMatTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
    WTimeComponent,
  ],
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    WMatTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
    WTimeComponent,
  ],
  entryComponents: [
    WMatTimePickerComponent,
    WTimeDialogComponent,
    WClockComponent,
    WTimeComponent,
  ]
})

export class MaterialTimeControlModule { }
