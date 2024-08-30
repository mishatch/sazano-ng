import { Component, ViewChild } from '@angular/core';
import { RoomDetailsComponent } from '../room-details/room-details.component';
import { RoomService } from '../../services/room.service';
import {NgForOf, NgIf} from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageClassDirective } from "../../../../shared/directives/language-class.directive";
import { LoadingComponent } from "../../../../shared/components/loading/loading.component";
import {LanguageService} from "../../../../core/services/language.service";
import {Description} from "../../models/description.interface";
import {Room} from "../../models/room.interface";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [RoomDetailsComponent, NgForOf, TranslateModule, LanguageClassDirective, LoadingComponent, NgIf],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  rooms: Room[] = [];
  isLoading = true;
  private currentLanguage: string = this.languageService.getCurrentLanguage();
  description!: string;
  @ViewChild('roomDetailsModal') roomDetails!: RoomDetailsComponent;

  constructor(private roomService: RoomService, private languageService: LanguageService) {
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

  openRoomDetails(description: Description, images: string[], name: string) {
    this.roomDetails.images = images;
    this.roomDetails.name = name;
    this.languageService.language$.subscribe((lang) => {
      this.currentLanguage = lang;
      if(this.currentLanguage === 'geo') {
        this.roomDetails.description = description.ka;
      } else if (this.currentLanguage === 'en') {
        this.roomDetails.description = description.en;
      } else {
        this.roomDetails.description = description.ru;
      }
    });
    this.roomDetails.openModal();
  }
}
