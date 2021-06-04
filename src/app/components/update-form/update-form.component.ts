import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Parc } from 'src/app/models/parc';
import { ParcService } from 'src/app/services/parc.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  parcForm : FormGroup = new FormGroup({
    nom : new FormControl(""),
    capacite : new FormControl(0)
  });

  parc : Parc = new Parc(0, " ", 0);

  constructor(
    private service : ParcService,
    private fb : FormBuilder,
    private router : Router,
    private route : ActivatedRoute
  ) {
    let id : number ;
    this.route.paramMap.subscribe(params => {
       id = Number(params.get("id"));
       this.service.getById(id).subscribe(parc => {
         this.parc = parc;
         this.parcForm = this.fb.group({
          nom : this.parc.nom,
          capacite : this.parc.capacite
        })
       })
    });
   }

  ngOnInit(): void {
    
  }

  modifier = () => {
    this.parc.nom = this.parcForm.value.nom;
    this.parc.capacite = this.parcForm.value.capacite;
    
    this.service.update(this.parc).subscribe(parc => {
      this.router.navigate(["home"]);
    })
  }

}
