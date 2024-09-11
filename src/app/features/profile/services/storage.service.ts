import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  getUserData() {
    if(
      !localStorage.getItem('userName') ||
      !localStorage.getItem('userSurname') ||
      !localStorage.getItem('userPhone') ||
      !localStorage.getItem('userEmail'))
    {
    return null;
    }
    return {
      userName: localStorage.getItem('userName'),
      userSurname: localStorage.getItem('userSurname'),
      userPhone: localStorage.getItem('userPhone'),
      userEmail: localStorage.getItem('userEmail'),
    };
  }

  setUserData(userData: { name: string; surName: string; phoneNumber: string; email: string }) {
    localStorage.setItem('userName', userData.name);
    localStorage.setItem('userSurname', userData.surName);
    localStorage.setItem('userPhone', userData.phoneNumber);
    localStorage.setItem('userEmail', userData.email);
  }
  clearUserData() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userSurname');
    localStorage.removeItem('userPhone');
    localStorage.removeItem('userEmail');
  }
}
