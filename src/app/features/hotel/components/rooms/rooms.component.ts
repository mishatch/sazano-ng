import { Component, ViewChild } from '@angular/core';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomService } from '../../services/room.service';
import {NgForOf, NgIf} from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageClassDirective } from "../../../../shared/directives/language-class.directive";
import { LoadingComponent } from "../../../../shared/components/loading/loading.component";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomDetailsComponent, NgForOf, TranslateModule, LanguageClassDirective, LoadingComponent, NgIf],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  rooms: any[] = [];
  isLoading = true;

  @ViewChild('roomDetailsModal') roomDetails!: RoomDetailsComponent;

  constructor(private roomService: RoomService) {
    this.fetchRooms();
  }

  fetchRooms() {
    this.isLoading = true;
    this.roomService.getRooms().subscribe((data: any) => {
      this.rooms = data;
      this.isLoading = false;
      console.log(this.rooms);
    }, error => {
      this.isLoading = false;
      console.error('Error fetching rooms:', error);
    });
  }

  openRoomDetails(description: string, images: string[]) {
    this.roomDetails.images = images;
    this.roomDetails.description = description;
    this.roomDetails.openModal();
  }
}
