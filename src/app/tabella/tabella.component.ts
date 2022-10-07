import { Persona } from 'src/persona';
import { ContattiService } from './../contatti.service';
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit,OnChanges,OnDestroy {
  trash=faTrash
  edit=faEdit
  @Input() filtroRicevuto:string
  persone:Persona[]
  personeCopia:Persona[];
  subscription;

  constructor(private contattiService:ContattiService,
        private router:Router
    ) { }

  ngOnChanges(){
    this.filtra()
  }
  ngOnDestroy(){
    this.subscription.unsubscibe()
  }
  async ngOnInit() {
    //this.subscription=this.contattiService.getAll().subscribe((persone)=>{
    //this.persone=persone,
    //this.personeCopia=this.persone
   //})

    //this.contattiService.getPromise().then((response)=>{return response.json()}).then((result)=>this.persone=result)
    //this.contattiService.getPromise().then((value)=>{return console.log(value)})
    this.persone = await this.contattiService.getPromise()
  }
  modificaContatto(id:number) {
    this.router.navigateByUrl("form/"+id)

  }
  eliminaContatto(id:number){
    this.contattiService.cancella(id).subscribe(()=>{this.ngOnInit()})
  }
  filtra(){
    this.persone=this.personeCopia
    if(this.filtroRicevuto){
      this.persone=this.persone.filter((persona)=>persona.nome.toLowerCase().startsWith(this.filtroRicevuto.toLowerCase()))
    }

  }

}

