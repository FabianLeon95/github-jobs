import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public jobs: any[] = [
    {id: 1, name: 'Front-End Software Engineer 1'},
    {id: 2, name: 'Front-End Software Engineer 2'},
    {id: 3, name: 'Front-End Software Engineer 3'},
    {id: 4, name: 'Front-End Software Engineer 4'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  public updateJobs(jobs: any[]): void {
    this.jobs = jobs;
  }

}
