import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() jobsChange = new EventEmitter();
  public jobs: any[] = [
    {id: 1, name: 'Front-End Software Engineer 1'},
    {id: 2, name: 'Front-End Software Engineer 2'},
    {id: 3, name: 'Front-End Software Engineer 3'},
    {id: 4, name: 'Front-End Software Engineer 4'},
    {id: 5, name: 'Front-End Software Engineer 5'},
    {id: 6, name: 'Front-End Software Engineer 6'},
    {id: 7, name: 'Front-End Software Engineer 7'},
    {id: 8, name: 'Front-End Software Engineer 8'},
  ];
  public filteredJobs: any[] = [];

  showAutocomplete = false;

  public searchTerm: string;

  constructor() {
  }

  public doSearch(term: string): void {
    this.filteredJobs = this.jobs.filter(item => item.name.toLowerCase().includes(term.toLocaleLowerCase()));
    this.jobsChange.emit(this.filteredJobs);
  }

  ngOnInit(): void {
  }

  public toggleAutocomplete(): void {
    setTimeout(() => {
      this.showAutocomplete = !this.showAutocomplete;
    }, 200);
  }

  public selectAutocompleteItem(term: string): void {
    console.log('hey');
    this.searchTerm = term;
    this.doSearch(term);
  }

}
