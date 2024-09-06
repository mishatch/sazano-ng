import {Component, ViewChild, OnDestroy, OnInit} from '@angular/core';
import { RoomDetailsComponent } from '../room-details/room-details.component';
import { RoomService } from '../../services/room.service';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageClassDirective } from '../../../../shared/directives/language-class.directive';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { LanguageService } from '../../../../shared/services/language.service';
import { Description } from '../../models/description.interface';
import { Room } from '../../models/room.interface';
import { Subscription } from 'rxjs';
import { Language } from '../../models/language.type';
@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    RoomDetailsComponent,
    TranslateModule,
    LanguageClassDirective,
    LoadingComponent,
  ],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, OnDestroy {
  rooms: Room[] = [];
  isLoading = true;
  description!: string;

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

  openRoomDetails(description: Description, images: string[], name: string) {
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
    this.isLoading = true;
    this.roomsSubscription = this.roomService.getRooms().subscribe(
      (data: Room[]) => {
        this.rooms = data;
        this.isLoading = false;
      },
      (error: any) => {
        this.isLoading = false;
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
