import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { RoomService } from '../../../../core/services/room.service';
import { Room } from '../../../../core/models/room/room.interface';
import {NgFor} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit, OnDestroy {
  public addRoomForm!: FormGroup;
  public roomId!: number;
  public isEditMode: boolean = false;
  public errorMessage: boolean = false;

  private subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initRoomForm();
    this.checkIfEditMode();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onSubmit(): void {
    if (this.addRoomForm.valid) {
      const roomData = this.addRoomForm.value;

      if (this.isEditMode) {
        this.subscription.add(
          this.roomService.updateRoom(this.roomId, roomData).subscribe(
            (res) => {
              this.router.navigate(['/admin/rooms']);
              this.errorMessage = false;
            },
            () => {
              this.errorMessage = true;
            }
          )
        );
      } else {
        this.subscription.add(
          this.roomService.addRoom(roomData).subscribe(
            () => {
              this.router.navigate(['/admin/rooms']);
              this.errorMessage = false;
            },
            () => {
              this.errorMessage = true;
            }
          )
        );
      }
    }
  }

  public addModalImage(): void {
    this.modalImages.push(this.fb.control('', Validators.required));
  }

  public removeModalImage(index: number): void {
    this.modalImages.removeAt(index);
  }

  get modalImages(): FormArray {
    return this.addRoomForm.get('modalImages') as FormArray;
  }

  get name() {
    return this.addRoomForm.get('name');
  }

  get price() {
    return this.addRoomForm.get('price');
  }

  get cardImage() {
    return this.addRoomForm.get('cardImage');
  }

  get ka() {
    return this.addRoomForm.get('description.ka');
  }

  get en() {
    return this.addRoomForm.get('description.en');
  }

  get ru() {
    return this.addRoomForm.get('description.ru');
  }

  private initRoomForm(): void {
    this.addRoomForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      cardImage: ['', Validators.required],
      description: this.fb.group({
        ka: ['', Validators.required],
        en: ['', Validators.required],
        ru: ['', Validators.required],
      }),
      modalImages: this.fb.array([]),
    });
  }

  private checkIfEditMode(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.roomId = +id;
        this.loadRoomData(this.roomId);
      }
    });
  }

  private loadRoomData(id: number): void {
    this.subscription.add(
      this.roomService.getRoomById(id).subscribe((room: Room) => {
        this.addRoomForm.patchValue({
          name: room.name,
          price: room.price,
          cardImage: room.cardImage,
          description: {
            ka: room.description.ka,
            en: room.description.en,
            ru: room.description.ru,
          },
        });
        this.setModalImages(room.modalImages);
      })
    );
  }

  private setModalImages(images: string[]): void {
    const imagesArray = this.addRoomForm.get('modalImages') as FormArray;
    images.forEach((image) => {
      imagesArray.push(this.fb.control(image));
    });
  }
}
