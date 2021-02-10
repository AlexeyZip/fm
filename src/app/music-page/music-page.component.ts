import { MusicService } from './../shared/music.service';
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

  musicLike = this.musicService.musicLike

  constructor( private musicService: MusicService) { }

  ngOnInit(): void {
    console.log(this.music);
  }

  addLike() {
      this.musicService.addMusic(this.music)
      this.visibility = !this.visibility
      console.log(this.music);
  }

  visibility: boolean = true

  toggle() {
    
  }

}
