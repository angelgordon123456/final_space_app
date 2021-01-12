import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {

  id = null;
  episode = {};
  loadReady=false;

  constructor(
    private activeRoute: ActivatedRoute,
    private services: ApiService,
    private router:Router
  ) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get("id");

    this.services.getEpisode(this.id).then((episode) => {
      this.episode = episode;
      console.log(this.episode);
      this.loadReady=true;
    })
  }
    goCharacter(id) {
      this.router.navigateByUrl(`character/${id}`)
  }

}
