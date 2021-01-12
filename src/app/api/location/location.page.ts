import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  id = null;
  location = {};
loadReady=false;
  constructor(
    private activeRoute: ActivatedRoute,
    private services: ApiService,
    private router:Router
  ) { }

  ngOnInit() {
    this.id = this.activeRoute.snapshot.paramMap.get("id");

    this.services.getLocation(this.id).then((location) => {
      this.location = location;
      console.log(this.location)
      this.loadReady=true;
      
    })
  }
    goCharacter(id) {
      this.router.navigateByUrl(`character/${id}`)
     
  }

}
