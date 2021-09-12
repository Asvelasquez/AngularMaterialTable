import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule
    
  ],exports: [
    CommonModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
