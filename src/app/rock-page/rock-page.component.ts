import { Music } from './../shared/interfaces';
import { Observable } from 'rxjs';
import { MusicService } from './../shared/music.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock-page',
  templateUrl: './rock-page.component.html',
  styleUrls: ['./rock-page.component.scss']
})
export class RockPageComponent implements OnInit {
musics: Music[]
  // musics$: Observable<Music[]>

  constructor(public musicService: MusicService) { }

  ngOnInit(): void {
    // this.musics$ =
     this.musicService.getAll().subscribe(musics => {
        this.musics = musics
     })
  }

}
