import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from '../shared/music.service';

@Component({
  selector: 'app-hip-hop-page',
  templateUrl: './hip-hop-page.component.html',
  styleUrls: ['./hip-hop-page.component.scss']
})
export class HipHopPageComponent implements OnInit {
  // searchStr = ''
  @Input() searchStr: string;
  constructor(private musicService: MusicService) { }

  public readonly musics$ = this.musicService.getHipHop();

  ngOnInit(): void {
  }

}
