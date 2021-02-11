import { SearchPipe } from './../shared/search.pipe';
import { MusicService } from './../shared/music.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  musics = []
  searchStr = ''
  constructor(private musicService: MusicService) { }
  
  ngOnInit(): void {
    this.musics = this.musicService.musicLike
  }

  

}
