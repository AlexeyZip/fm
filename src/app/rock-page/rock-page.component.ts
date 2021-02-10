import { Music } from './../shared/interfaces';
import { Observable } from 'rxjs';
import { MusicService } from './../shared/music.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rock-page',
  templateUrl: './rock-page.component.html',
  styleUrls: ['./rock-page.component.scss']
})
export class RockPageComponent implements OnInit {
// musics: Music[] = []
// @Input() music: Music
  // musics$: Observable<Music[]>
  // music: Music
  constructor(private musicService: MusicService) { }

  public readonly musics$ = this.musicService.getRock();

  ngOnInit() {
    
    // this.musicService.getAll()
    // this.musics$ =
    //  this.musicService.getAll().subscribe(musics => {
    //     this.musics = musics
    //  })
  // return this.musicService.getAll().subscribe(data => this.musics = data)
  }




}
