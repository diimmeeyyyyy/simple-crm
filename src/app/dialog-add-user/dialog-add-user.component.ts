import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../firebase-services/user.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
FormsModule;

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatDialogContent,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    CommonModule,
    FormsModule,
    MatProgressBarModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  firstName = '';
  lastName = '';
  birthdate!: Date;
  street = '';
  zipCode = '';
  city = '';
  loading: boolean = false;

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<DialogAddUserComponent>
  ) {}

  saveUser() {
    this.loading = true;
    let user = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthdate: this.birthdate.getTime(),
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
    };

    this.userService.addUser(user);
    this.clearInputfields();
    this.loading = false;
    this.dialogRef.close();
  }

  clearInputfields() {
    this.firstName = '';
    this.lastName = '';
    this.birthdate = new Date();
    this.street = '';
    this.zipCode = '';
    this.city = '';
  }
}
