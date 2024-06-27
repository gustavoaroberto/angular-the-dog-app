import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dogs-list',
  standalone: true,
  imports: [NgFor, NgOptimizedImage],
  templateUrl: './dogs-list.component.html',
  styleUrl: './dogs-list.component.css'
})
export class DogsListComponent {
  @Input() breedsList: TDogBreed[] = [];
}
