import { Component, OnInit } from "@angular/core";
import { ApiService } from "../service/api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {

  public characters: Array<any>;

  constructor(private ApiService: ApiService,
    private router:Router
    ) {}

  ngOnInit() {
    this.ApiService.getCharacters().then(result => {
      console.log(result)
      this.characters = result
    })
  }
  
  goCharacter(id) {
    this.router.navigateByUrl(`character/${id}`)
  }
}
