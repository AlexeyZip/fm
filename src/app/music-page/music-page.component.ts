import { Music } from './../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss']
})
export class MusicPageComponent implements OnInit {

@Input() music: Music

  constructor() { }

  ngOnInit(): void {
    console.log(this.music);
    
  }

  visibility: boolean = true

  toggle() {
    this.visibility = !this.visibility
  }

}
