import { Component, ViewChild } from '@angular/core';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomService } from '../../services/room.service';
import { NgForOf } from "@angular/common";
import {translate} from "@angular/localize/tools";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageClassDirective} from "../../../../shared/directives/language-class.directive";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomDetailsComponent, NgForOf, TranslateModule, LanguageClassDirective],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  rooms: any[] = [];

  @ViewChild('roomDetailsModal') roomDetails!: RoomDetailsComponent;

  constructor(private roomService: RoomService) {
    this.roomService.getRooms().subscribe((data: any) => {
      this.rooms = data;
      console.log(this.rooms);
    });
  }

  openRoomDetails(description: string, images: string[]) {
    this.roomDetails.images = images;
    this.roomDetails.description = description;
    this.roomDetails.openModal();
  }

}
