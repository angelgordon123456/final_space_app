import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../service/api.service";

@Component({
  selector: "app-locations",
  templateUrl: "./locations.page.html",
  styleUrls: ["./locations.page.scss"],
})
export class LocationsPage implements OnInit {

  locations: Array<any>;

  constructor(
    private service: ApiService,
    private router:Router) {}

  ngOnInit() {
    this.service.getLocations().then(response => {
        this.locations = response;
        console.log(this.locations)
      });
  }

  goLocation(id) {
    this.router.navigateByUrl(`location/${id}`)
  }
}
