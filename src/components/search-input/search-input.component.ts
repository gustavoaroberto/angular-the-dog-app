import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  search = new FormControl();

  constructor(  private router: Router, private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.search.setValue(params['q']);
    })

    this.search.valueChanges.pipe(debounceTime(800), distinctUntilChanged()).subscribe(change => {
      const queryParams: Params = { q: change };    

      this.router.navigate(
        [], 
        {
          relativeTo: this.activatedRoute,
          queryParams,
          replaceUrl: true,
          queryParamsHandling: 'merge', // remove to replace all query params by provided
        }
      );
    })
  }
}
