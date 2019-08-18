import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'Angular app';
  year: number = (new Date()).getFullYear();

  ngOnInit(){
    setTimeout(() => {
      this.title = 'Angular App++';
    }, 1500)
  }
}
