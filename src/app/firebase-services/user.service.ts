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
    
    /* if (this.users.length === 0) {
      console.log('All USERS EMPTY:');
    } else {
      console.log('All USERS:' + JSON.stringify(this.users));
    } */
  }

  ngonDestroy() {
    this.unsubUsers();
  }

  subUserList() {
    return onSnapshot(this.getUsersRef(), (list) => {
      this.users = [];
      list.forEach((user) => {
        this.users.push(this.setUserObject(user.data(), user.id));
      });
    });
  }

  setUserObject(obj: any, id: string): User {
    return {
      id: id || '',
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

  /* =================
FUNCTION TO USE 
==================*/
  async addUser(user: {}) {
    await addDoc(this.getUsersRef(), user);
  }
}
