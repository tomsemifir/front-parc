import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parc } from 'src/app/models/parc';
import { ParcService } from 'src/app/services/parc.service';

@Component({
  selector: 'app-parc',
  templateUrl: './parc.component.html',
  styleUrls: ['./parc.component.css']
})
export class ParcComponent implements OnInit {

  parcs : Parc[] = [];

  constructor(
    private service : ParcService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.parcs = data;
    })
  }

  afficheParc = (parc : Parc) => {
    alert(parc.nom);
  }

  delete = (parc : Parc) => {
    this.service.delete(parc).subscribe(parc => {
      this.ngOnInit();
    })
  }

  modifier = (id : number) => {
    this.router.navigate([`update/${id}`]);
  }

}
