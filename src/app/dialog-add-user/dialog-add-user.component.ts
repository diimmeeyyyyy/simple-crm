import { Component } from '@angular/core';
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
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  /* user: User = new User(); */
  firstName = '';
  lastName = '';
  birthdate!: Date;
  street = '';
  zipCode = '';
  city = '';

  constructor(private userService: UserService) {}

  saveUser() {
    /*  birthdate = this.birthdate.getTime();
    console.log(this.user); */

    let user = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthdate: this.birthdate.getTime(),
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
    };

    this.userService.addUser(user);
  }
}
