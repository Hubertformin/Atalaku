import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatCardModule,
  MatTableModule,
  MatSelectModule,
  MatExpansionModule,
  MatDialogModule,
  MatStepperModule,
  MatTabsModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule, MatProgressBarModule, MatListModule, MatSliderModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatInputModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    MatStepperModule,
    MatTabsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatListModule,
    MatSliderModule
  ],
  exports: [
    MatMenuModule,
    MatInputModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    MatStepperModule,
    MatTabsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatListModule,
    MatSliderModule,
    MatListModule
  ]
})
export class CustomModule { }