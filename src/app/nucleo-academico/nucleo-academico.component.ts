import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Docente, DocenteService } from './docente.service';

@Component({
  selector: 'app-nucleo-academico',
  templateUrl: './nucleo-academico.component.html',
  styleUrls: ['./nucleo-academico.component.css']
})
export class NucleoAcademicoComponent implements OnInit {

  docentes: Docente[] = [];
  docente: any = {};


  constructor( private _docenteService: DocenteService,
               private _activateRoute: ActivatedRoute
             ) {

             }

  ngOnInit(): void {
    this.docentes = this._docenteService.getDocentes();
    console.log(this.docentes);
  }

verMas (id) {
this.docente = this._docenteService.getDocente(id);
        console.log(this.docente);
}

}

