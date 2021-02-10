import { Component, OnInit } from '@angular/core';
import { MusicService } from '../shared/music.service';

@Component({
  selector: 'app-pop-page',
  templateUrl: './pop-page.component.html',
  styleUrls: ['./pop-page.component.scss']
})
export class PopPageComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  public readonly musics$ = this.musicService.getPop();

  ngOnInit(): void {
  }

}
