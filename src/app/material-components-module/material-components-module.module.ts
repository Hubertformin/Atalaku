import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule, MatInputModule, MatButtonModule,
  MatDividerModule, MatCheckboxModule, MatSnackBarModule, MatCardModule,
  MatTableModule, MatSelectModule, MatExpansionModule, MatDialogModule, MatStepperModule, MatTabsModule
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
    MatCardModule
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
    MatCardModule
  ]
})
export class MaterialComponentsModuleModule { }
