import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {Room} from "../../../../core/models/room/room.interface";
import {RoomService} from "../../../../core/services/room.service";
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, OnDestroy {
  public rooms: Room[] = [];
  public filteredRooms: Room[] = [];
  public roomId!: number;
  public searchTerm = '';

  constructor(
    private roomService: RoomService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
      this.filteredRooms = rooms;
      console.log(this.rooms);
    });
  }
  ngOnDestroy() {
  }

  public editRoom(room: Room): void {
    this.router.navigate(['/admin/edit-room', room.id]);
  }
  public deleteRoom(): void {
    this.roomService.deleteRoom(this.roomId).subscribe(() => {
      this.rooms = this.rooms.filter(room => room.id !== this.roomId);
      this.filteredRooms = this.filteredRooms.filter(room => room.id !== this.roomId);
      this.modalService.dismissAll();
    });
  }

  public filterRooms(): void {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredRooms = this.rooms.filter(room =>
      room.name.toLowerCase().includes(searchLower)
    );
  }
  public openModal(content: TemplateRef<any>, roomId: number) {
    this.modalService.open(content);
    this.roomId = roomId;
  }
}
