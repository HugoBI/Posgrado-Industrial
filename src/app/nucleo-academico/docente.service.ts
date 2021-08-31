import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private docentes:Docente[] = [
    {
        nombre: "Dra. María de Lourdes López Cruz",
        mail: "maria.lopez@itstb.edu.mx",
        img: "assets/img/img-docentes/edit/export-madelourdes.png",
        img_modal: "assets/img/img-docentes/edit/modal-malourdes.png",
        puesto: "Doctorado en Administración y Desarrollo Empresarial",
        universidad: "Colegio de Estudios Avanzados de Iberoamerica",
        especialidad: "Sistemas de mejoramiento empresarial",
        especialidad1: "Profesor con perfil deseable PRODEP",
        especialidad2: "",
        especialidad3: "",
        especialidad4: ""
    },
    {
        nombre: "Dra. Lucila Guadalupe Tobón Galicia",
        mail: "lucila.tobon@itstb.edu.mx",
        img: "assets/img/img-docentes/edit/export-lucila.png",
        img_modal: "assets/img/img-docentes/edit/modal-lucila.png",
        puesto: "Doctorado en Administración y Desarrollo Empresarial",
        universidad: "Colegio de Estudios Avanzados de Iberoamerica",
        especialidad: "Diseño y mejora de productos y procesos",
        especialidad1: "Profesor con perfil deseable PRODEP",
        especialidad2: "",
        especialidad3: "",
        especialidad4: ""
    },
    {
        nombre: "Dra. Leticia Vázquez Tzitzihua",
        mail: "maria.lopez@itstb.edu.mx",
        img: "assets/img/img-docentes/edit/export-leticia.png",
        img_modal: "assets/img/img-docentes/edit/modal-leticia.png",
        puesto: "Doctorado en Administración y Desarrollo Empresarial",
        universidad: "Colegio de Estudios Avanzados de Iberoamerica",
        especialidad: "Sistemas de mejoramiento empresarial",
        especialidad1: "Profesor con perfil deseable PRODEP",
        especialidad2: "",
        especialidad3: "",
        especialidad4: ""
    },
    {
        nombre: "Dra. Viridiana Sánchez Vázquez",
        mail: "viridiana.sanchez@itstb.edu.mx",
        img: "assets/img/img-docentes/edit/export-viridiana.png",
        img_modal: "assets/img/img-docentes/edit/modal-viridiana.png",
        puesto: "Doctorado en Administración y Desarrollo Empresarial",
        universidad: "Colegio de Estudios Avanzados de Iberoamericao",
        especialidad: "Diseño y mejora de productos y procesos",
        especialidad1: "Profesor con perfil deseable PRODEP",
        especialidad2: "",
        especialidad3: "",
        especialidad4: "",
    },
    {
        nombre: "Dra. Magdalena Hernández Cortéz",
        mail: "magdalena.hernandez@itstb.edu.mx",
        img: "assets/img/img-docentes/edit/export-magdalena.png",
        img_modal: "assets/img/img-docentes/edit/modal-magdalena.png",
        puesto: "Doctorado en Administración y Desarrollo Empresarial",
        universidad: "Colegio de Estudios Avanzados de Iberoamerica",
        especialidad: "Sistemas de mejoramiento empresarial",
        especialidad1: "Profesor con perfil deseable PRODEP",
        especialidad2: "",
        especialidad3: "",
        especialidad4: ""
    },
    {
        nombre: "MC. Liliana Fuentes Rosas",
        mail: "liliana.fuentes@itstb.edu.mx",
        img: "assets/img/img-docentes/edit/export-liliana.png",
        img_modal: "assets/img/img-docentes/edit/modal-liliana.png",
        puesto: "Maestra En Ciencias De Ingenieria Administrativa",
        universidad: "Tecnologico Nacional de Mexico",
        especialidad: "Diseño y mejora de productos y procesos",
        especialidad1: "Profesor con perfil deseable PRODEP",
        especialidad2: "",
        especialidad3: "",
        especialidad4: ""
    },
    {
        nombre: "MII. María del Socorro Flores Serrano",
        mail: "maria.flores@itstb.edu.mx",
        img: "assets/img/img-docentes/edit/export-mariadelsocorro.png",
        img_modal: "assets/img/img-docentes/edit/modal-masocorro.png",
        puesto: "Maestría en Ingeniería Industrial",
        universidad: "Universidad Cristóbal Colón",
        especialidad: "Diseño y mejora de productos y procesos",
        especialidad1: "Profesor con perfil deseable PRODEP",
        especialidad2: "",
        especialidad3: "",
        especialidad4: ""
    }
];

    constructor() {

    }

    getDocentes():Docente[] {
        return this.docentes;
    }

    getDocente( idx ) {
      return this.docentes[idx];
    }

}

export interface Docente {
    nombre: string;
    mail: string;
    img: string;
    img_modal: string;
    puesto: string;
    universidad: string;
    especialidad: string;
    especialidad1: string;
    especialidad2: string;
    especialidad3: string;
    especialidad4: string;
};
