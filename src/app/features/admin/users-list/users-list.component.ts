import { Component } from '@angular/core';
import {User} from "../../../core/models/user.model";
import {UserService} from "../services/user.service";
import {LoadingComponent} from "../../../shared/components/loading/loading.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgClass, NgFor} from "@angular/common";

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    LoadingComponent,
    ReactiveFormsModule,
    RouterLink,
    FormsModule,
    NgClass,
    LoadingComponent,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  users!: User[];
  filteredUsersList!: User[];
  searchTerm: string = '';
  isLoading: boolean = true;
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      this.filteredUsersList = users;
      this.isLoading = false;
    });
  }

  filteredUsers(): User[] {
    if (!this.searchTerm) {
      return this.filteredUsersList;
    }
    const search = this.searchTerm.toLowerCase();
    return this.filteredUsersList.filter((user: User) => user.name.toLowerCase().includes(search));
  }

  showNormalUsers(): void {
    this.filteredUsersList = this.users.filter((user: User) => user.roles.includes('User') && !user.roles.includes('Admin'));
  }

  showAdmins(): void {
    this.filteredUsersList = this.users.filter((user: User) => user.roles.includes('Admin'));
  }

  resetFilter(): void {
    this.filteredUsersList = this.users;
  }

  toggleAdminStatus(user: User): void {
    if (user.roles.includes('Admin')) {
      const updatedUser = {
        userEmail: user.email,
        roleName: 'Admin'
      };
      this.isLoading = true;
      this.userService.deleteAdminRole(updatedUser).subscribe(
        (data) => {
          user.roles = user.roles.filter((role: string) => role !== 'Admin');
          this.isLoading = false;
        },
        (error) => {
          console.error('Error deleting admin role for user:', 'Error:', error);
          this.isLoading = false;
        }
      );
    } else {
      const updatedUser = {
        userEmail: user.email,
        roleName: 'Admin'
      };
      this.isLoading = true;
      this.userService.addAdminRole(updatedUser).subscribe(
        (data) => {
          user.roles.push('Admin');
          this.isLoading = false;
        },
        (error) => {
          console.error('Error adding admin role for user:', 'Error:', error);
          this.isLoading = false;
        }
      );
    }
  }
}


