import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../firebase-services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatMenuModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  userId: string | null = null;
  selectedUser: User | undefined;

  constructor(public userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      const user = this.userService.users.find(
        (user) => user.id === this.userId
      );

      if (user) {
        this.selectedUser = user;
        /* console.log('USER ist ' + JSON.stringify(this.selectedUser)); */
      } else {
        console.error('User nicht gefunden');
      }
    }
  }

  editUserAddress() {}

  editUserInfo() {}
}
