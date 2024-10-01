import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../../../core/models/user.model";
import {UserService} from "../../services/user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    FormsModule,
    NgClass,
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent implements OnInit, OnDestroy {
  public users!: User[];
  public filteredUsersList!: User[];
  public searchTerm: string = '';

  private subscription = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public filteredUsers(): User[] {
    if (!this.searchTerm) {
      return this.filteredUsersList;
    }
    const search = this.searchTerm.toLowerCase();
    return this.filteredUsersList.filter((user: User) =>
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.phoneNumber.includes(search)
    );
  }
  public showNormalUsers(): void {
    this.filteredUsersList = this.users.filter((user: User) => user.roles.includes('User') && !user.roles.includes('Admin'));
  }

  public showAdmins(): void {
    this.filteredUsersList = this.users.filter((user: User) => user.roles.includes('Admin'));
  }

  public resetFilter(): void {
    this.filteredUsersList = this.users;
  }

  public toggleAdminStatus(user: User): void {
    if (user.roles.includes('Admin')) {
      const updatedUser = {
        userEmail: user.email,
        roleName: 'Admin'
      };
      this.subscription.add(
        this.userService.deleteAdminRole(updatedUser).subscribe(
          () => {
            user.roles = user.roles.filter((role: string) => role !== 'Admin');
          },
          (error) => {
            console.error('Error deleting admin role for user:', 'Error:', error);
          }
        )
      );
    } else {
      const updatedUser = {
        userEmail: user.email,
        roleName: 'Admin'
      };
      this.subscription.add(
        this.userService.addAdminRole(updatedUser).subscribe(
          () => {
            user.roles.push('Admin');
          },
          (error) => {
            console.error('Error adding admin role for user:', 'Error:', error);
          }
        )
      );
    }
  }

  private getUsers(){
    this.subscription.add(
      this.userService.getUsers().subscribe((users: User[]) => {
        this.users = users;
        this.filteredUsersList = users;
      })
    );
  }
}


