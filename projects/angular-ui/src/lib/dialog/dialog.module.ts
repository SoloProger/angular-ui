import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InsertionDirective } from './lib/directives/insertion.directive';
import { DialogService } from './services/dialog.service';
import { DialogComponent } from './ui/dialog.component';

@NgModule({
  imports: [CommonModule],
  exports: [DialogComponent],
  declarations: [DialogComponent, InsertionDirective],
  providers: [DialogService],
})
export class DialogModule {}
