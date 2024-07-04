import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { User } from '../interfaces/user.interface';
import { FormsModule } from '@angular/forms';
import { UserService } from '../firebase-services/user.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatDialogContent,
    MatProgressBarModule,
    MatDatepicker,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss',
})
export class DialogEditUserComponent{
  loading: boolean = false;
  user!: User;
  /* formattedBirthdate!: any; */

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<DialogEditUserComponent>
  ) {}

  /* ngOnInit() {
    this.updateFormattedBirthdate();
  }

  updateFormattedBirthdate() {
    if (this.user.birthdate) {
      this.formattedBirthdate = this.getUserBirthdate(); // Nutzt Ihre vorhandene Funktion
    }
  }

  getUserBirthdate() {
    const timestamp: number | undefined = this.user.birthdate;
    if (timestamp) {
      const date: Date = new Date(timestamp * 1000);

      const year: number = date.getUTCFullYear();
      const month: string = ('0' + (date.getUTCMonth() + 1)).slice(-2);
      const day: string = ('0' + date.getUTCDate()).slice(-2);
      const formattedDate: string = `${month}/${day}/${year}`;
      return formattedDate;
    } else {
      return console.error('not found');
    }
  } */
}
