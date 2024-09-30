import {Component, ViewChild, OnDestroy, OnInit} from '@angular/core';
import { RoomDetailsComponent } from '../room-details/room-details.component';
import { RoomService } from '../../../../core/services/room.service';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageClassDirective } from '../../../../shared/directives/language-class.directive';
import { LanguageService } from '../../../../shared/services/language.service';
import { Description } from '../../../../core/models/room/description.interface';
import { Room } from '../../../../core/models/room/room.interface';
import { Subscription } from 'rxjs';
import { Language } from '../../../../core/models/room/language.type';
@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    RoomDetailsComponent,
    TranslateModule,
    LanguageClassDirective,
  ],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, OnDestroy {
  public rooms: Room[] = [];

  public description!: string;

  private currentLanguage!: Language;
  private languageSubscription!: Subscription;
  private roomsSubscription!: Subscription;

  @ViewChild('roomDetailsModal', { static: false })
  roomDetails!: RoomDetailsComponent;

  constructor(
    private roomService: RoomService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.fetchRooms();
    this.getCurrentLanguage();
  }

  ngOnDestroy() {
    this.languageSubscription.unsubscribe();
    this.roomsSubscription.unsubscribe();
  }

  public openRoomDetails(description: Description, images: string[], name: string) {
    this.roomDetails.images = images;
    this.roomDetails.name = name;

    const descriptions: { [key in Language]: string } = {
      geo: description.ka,
      en: description.en,
      ru: description.ru,
    };

    this.roomDetails.description = descriptions[this.currentLanguage];
    this.roomDetails.openModal();
  }

  private fetchRooms() {
    this.roomsSubscription = this.roomService.getRooms().subscribe(
      (data: Room[]) => {
        this.rooms = data;
        console.log('Rooms:', this.rooms);
      },
      (error) => {
        console.error('Error fetching rooms:', error);
      }
    );
  }
  private getCurrentLanguage() {
    this.languageSubscription = this.languageService.language$.subscribe(
      (lang: string) => {
        this.currentLanguage = lang as Language;
      }
    );
  }
}
