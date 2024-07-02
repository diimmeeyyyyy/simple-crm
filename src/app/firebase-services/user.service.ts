import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  doc,
  onSnapshot,
  addDoc,
} from '@angular/fire/firestore';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  unsubUsers;

  firestore: Firestore = inject(Firestore);

  constructor() {
    this.unsubUsers = this.subUserList();
    console.log('All USERS:' + this.users);
  }

  ngonDestroy(){
    this.unsubUsers();
  }

  subUserList() {
    return onSnapshot(this.getUsersRef(), (list) => {
      this.users = [];
      list.forEach((user) => {
        this.users.push(this.setUserObject(user.data()));
      });
    });
  }

  async addUser(user: {}) {
    await addDoc(this.getUsersRef(), user);
  }

  setUserObject(obj: any) {
    return {
      firstName: obj.firstName,
      lastName: obj.lastName,
      birthdate: obj.birthdate,
      street: obj.street,
      zipCode: obj.street,
      city: obj.street,
    };
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  getSingleUserRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}
