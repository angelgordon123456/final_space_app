import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: "app-character",
  templateUrl: "./character.page.html",
  styleUrls: ["./character.page.scss"],
})
export class CharacterPage implements OnInit {

  id = null;
  character = {};

  constructor(
    private activeRoute: ActivatedRoute,
    private services: ApiService
    ) { }

    ngOnInit() {
      this.id = this.activeRoute.snapshot.paramMap.get("id");
      console.log(this.id)

      this.services.getCharacter(this.id).then((character) => {
        this.character = character;
        console.log(this.character)
      });
    }
}
