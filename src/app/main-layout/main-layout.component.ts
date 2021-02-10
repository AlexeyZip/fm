import { MusicService } from './../shared/music.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  musics = []
  constructor(private musicService: MusicService) { }
  
  ngOnInit(): void {
    this.musics = this.musicService.musicLike
  }

}
