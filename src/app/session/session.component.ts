import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VideoItem } from '@core/models';
import { SeoService } from '@core/services/seo.service';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  playlist$: Observable<VideoItem[]> = EMPTY;

  constructor(private route: ActivatedRoute, private seo: SeoService) {
    this.playlist$ = this.route.data.pipe(map(data => data.videos));
  }

  ngOnInit() {
    this.seo.setText('Angular In Darija Playlist');
  }
}
