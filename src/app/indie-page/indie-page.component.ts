import { Component, OnInit } from '@angular/core';
import { MusicService } from '../shared/music.service';

@Component({
  selector: 'app-indie-page',
  templateUrl: './indie-page.component.html',
  styleUrls: ['./indie-page.component.scss']
})
export class IndiePageComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  public readonly musics$ = this.musicService.getIndie();

  ngOnInit(): void {
  }

}
