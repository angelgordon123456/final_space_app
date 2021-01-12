import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-cita',
  templateUrl: './cita.page.html',
  styleUrls: ['./cita.page.scss'],
})
export class CitaPage implements OnInit {
  public citas: Array<any>;

  constructor(private ApiService: ApiService,
    private router:Router) { }

  ngOnInit() {
    this.ApiService.getCita().then(result => {
      console.log(result)
      this.citas = result
  })
}

}
