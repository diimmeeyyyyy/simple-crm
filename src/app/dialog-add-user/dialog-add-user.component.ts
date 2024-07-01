import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatDialogModule, MatDialogContent],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {}
