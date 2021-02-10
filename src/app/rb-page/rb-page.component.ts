import { Component, OnInit } from '@angular/core';
import { MusicService } from '../shared/music.service';

@Component({
  selector: 'app-rb-page',
  templateUrl: './rb-page.component.html',
  styleUrls: ['./rb-page.component.scss']
})
export class RbPageComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  public readonly musics$ = this.musicService.getRb();

  ngOnInit(): void {
  }

}
