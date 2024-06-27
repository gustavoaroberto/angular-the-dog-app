import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreedsService } from '../services/breeds.service';
import { DogsListComponent } from '../components/dogs-list/dogs-list.component';
import { SearchInputComponent } from '../components/search-input/search-input.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DogsListComponent, SearchInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
  breedsList$!: TDogBreed[];

  constructor(private breedsService: BreedsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: { [key:string] : string | string[] }) => {
      this.breedsService.getBreedsList(String(params['q'])).subscribe(res => {
        this.breedsList$ = res;
      });
    })
  }


}
