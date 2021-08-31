import { Component, OnInit } from '@angular/core';
import { GeneracionesService, geneInterf, dataGeneracionInterf } from '../services/generaciones.service';

@Component({
  selector: 'app-generaciones',
  templateUrl: './generaciones.component.html',
  styleUrls: ['./generaciones.component.css']
})
export class GeneracionesComponent implements OnInit {

  public selectGeneracion: geneInterf = { id: 0, name: ''};
  public numGeneraciones: geneInterf[];
  public dataGen: dataGeneracionInterf [];




  constructor( private _generacionService: GeneracionesService ) {
   }

  ngOnInit(): void {
    this.numGeneraciones = this._generacionService.getGeneraciones();
  }

  onSelect( id: any) {
    this.dataGen = this._generacionService.getDataGeneraciones().filter(item => item.generacionId == id);



  }

}
