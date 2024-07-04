import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../firebase-services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../../dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatMenuModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  user: any = {};
  userId: string | null = null;

  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      this.userId = paramMap.get('id');
      if (this.userId) {
        this.getUser(this.userId);
      }
    });
  }

  async getUser(userId: string) {
    this.user = await this.userService.getUserById(userId);
    if (!this.user) {
      console.error('User nicht gefunden');
    } else {
      console.log('RETRIEVED USER', this.user);
    }
  }

  formatBirthdate(milliseconds:number){
    const date = new Date(milliseconds);
    return date.toLocaleDateString('en-US');
  }

  editUserInfo() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = this.user;
  }

  editUserAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user;
  }
}
