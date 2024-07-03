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
  user: any = {};
  userId: string | null = null;
  /*  selectedUser: User | undefined; */

  constructor(public userService: UserService, private route: ActivatedRoute) {}

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

  editUserAddress() {}

  editUserInfo() {}
}
