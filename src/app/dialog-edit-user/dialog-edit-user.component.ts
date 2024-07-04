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
  birthdateAsDate!: Date;

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<DialogEditUserComponent>
  ) {}

  ngOnInit() {
    if (typeof this.user.birthdate === 'number') {
      this.birthdateAsDate = new Date(this.user.birthdate);
    }
  }

  onDateChange(newDate: Date) {
    this.birthdateAsDate = newDate; 
    this.user.birthdate = newDate.getTime();
  }
}
