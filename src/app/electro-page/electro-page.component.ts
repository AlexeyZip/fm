import { Component, OnInit } from '@angular/core';
import { MusicService } from '../shared/music.service';

@Component({
  selector: 'app-electro-page',
  templateUrl: './electro-page.component.html',
  styleUrls: ['./electro-page.component.scss']
})
export class ElectroPageComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  public readonly musics$ = this.musicService.getElectro();

  ngOnInit(): void {
  }

}
