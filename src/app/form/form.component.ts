import { ContattiService } from './../contatti.service';
import { Persona } from 'src/persona';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { faUserPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit,DoCheck {
  user=faUserPlus;
  edit=faEdit
  idCatturato:number;
  isModifica:boolean=false;
  persona:Persona=new Persona()
  constructor(
    private ContattiService:ContattiService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) { }
  ngDoCheck(){
    this.ngOnInit()
  }

  ngOnInit() {
    let numero:number=+this.activatedRoute.snapshot.paramMap.get("id")
    this.idCatturato=numero
    console.log("idCatturato :"+this.idCatturato)
    if(this.idCatturato){
      this.isModifica=true
      if(this.persona.nome===undefined || this.persona.nome===null){
      this.ContattiService.getbyId(this.idCatturato).subscribe((persona)=>this.persona=persona)}

    }else{
      this.isModifica=false;
      this.persona=new Persona()
    }
  }

  aggiungi(persona){
    console.log(persona)
    this.ContattiService.post(persona).subscribe()
    //this.router.navigateByUrl("/")
    location.replace("/")

  }
  modifica(persona){
    this.ContattiService.put(this.idCatturato,persona).subscribe()
    //this.router.navigateByUrl("/")
    location.replace("/")

  }


}
