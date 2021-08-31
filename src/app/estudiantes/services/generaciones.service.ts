import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GeneracionesService {

  private generaciones: geneInterf []  = [
    {
      id: 0,
      name: 'Seleccione una Opción'
    },
    {
      id: 1,
      name: 'Primera'
    },
    {
      id: 2,
      name: 'Segunda'
    },
    {
      id: 3,
      name: 'Tercera'
    },
    {
      id: 4,
      name: 'Cuarta'
    },
    {
      id: 5,
      name: 'Quinta'
    },
    {
      id: 6,
      name: 'Sexta'
    }/* ,
    {
      id: 7,
      name: 'Séptima'
    },
    {
      id: 8,
      name: 'Octava'
    },
    {
      id: 9,
      name: 'Novena'
    },
    {
      id: 10,
      name: 'Décima'
    },
    {
      id: 11,
      name: 'Décima Primera'
    },
    {
      id: 12,
      name: 'Décima Segunda'
    },
    {
      id: 13,
      name: 'Décima Tercera'
    },
    {
      id: 14,
      name: 'Décima Cuarta'
    } */
  ];

  private dataGeneraciones: dataGeneracionInterf [] = [
    {
      id: '168N1016',
      generacionId: 1,
      nombre: 'Ángel Díaz Méndez',
      director: 'Dra. Lucila Guadalupe Tobón Galicia',
      tutor: 'Dra. Magdalena Hernández Cortéz',
      tesis: 'Determinación de la eficiencia de las turbinas de vapor del Ingenio San Miguelito previo al análisis de consumo de vapor.'
    },
    {
      id: '168N1018',
      generacionId: 1,
      nombre: 'Félix Carrera Beristain',
      director: 'Dra. Leticia Vázquez Tzizihua',
      tutor: 'Dra. Lucila Guadalupe Tobón Galicia',
      tesis: 'Aplicación de modelo SERVQUAL en la empresa MEGASA'
    },
    {
      id: '168N1019',
      generacionId: 1,
      nombre: 'Isabel Estrada Onofre',
      director: 'Dra. María de Lourdes López Cruz',
      tutor: 'Dra. Viridiana Sánchez Vázquez',
      tesis: 'Identificación de fallas en el proceso de fuerza motriz de una planta ferrocarrilera del Estado de Veracruz, para la disminución de accidentes.'
    },    
    {
      id: '168N1020',
      generacionId: 1,
      nombre: 'Silverio Ángel Medrano',
      director: 'Dra. Lucila Guadalupe Tobón Galicia',
      tutor: 'Dra. Arleny Lobos Pérez',
      tesis: 'Optimización del proceso de secado para disminuir el fenómeno de aterronamiento en la producción de azúcar estándar.'
    },
    {
      id: '168N1022',
      generacionId: 1,
      nombre: 'Cenith Irandine Mendoza Rojas',
      director: 'Dr. Felipe Machorro Ramos',
      tutor: 'MII. María del Socorro Flores Serrano',
      tesis: 'Propuesta del cuadro de mando integral para el ITSTB.'
    },
    {
      id: '168N1024',
      generacionId: 1,
      nombre: 'Iván San Juan López',
      director: 'MC. Liliana Fuentes Rosas',
      tutor: 'Dra. María de Lourdes López Cruz',
      tesis: "Propuestas de mejoras en el proceso de cristalización para la reducción de pérdidas de sacarosa en un ingenio azucarero."
    }, 





    {
      id: '178N1048',
      generacionId: 2,
      nombre: 'Fredy Trinidad Rodríguez ',
      director: 'MC. Liliana Fuentes Rosas',
      tutor: 'MII. María del Socorro Flores Serrano',
      tesis: 'Mejora en la red logística de transporte de una empresa usando simulación en SIMIO. '
    },
    {
      id: '178N1051',
      generacionId: 2,
      nombre: 'Raúl Molina Domínguez ',
      director: 'MII. María del Socorro Flores Serrano',
      tutor: 'Dr. Jorge Estévez Lavín',
      tesis: 'Determinación de los factores significativos que optimizan la rentabilidad en la producción por toneladas mediante la aplicación del humus de lombriz en la siembra y desarrollo de semillas de sorgo Dekalb-47.'
    },
    {
      id: '178N1053',
      generacionId: 2,
      nombre: 'José Carlos Gómez Quevedo',
      director: 'Dra. Lucila Guadalupe Tobón Galicia',
      tutor: 'Dra. Viridiana Sánchez Vázquez',
      tesis: 'Análisis y control de riesgos de seguridad para una empresa productora de venenos para roedores.'
    },
    {
      id: '178N1055',
      generacionId: 2,
      nombre: 'Ernesto González Martínez ',
      director: 'MC. Liliana Fuentes Rosas',
      tutor: 'Dra. Leticia Vázquez Tzitzihua',
      tesis: 'Simulación en SIMIO para mejorar el proceso productivo de la empresa RODICS. '
    }, 
    {
      id: '178N1056',
      generacionId: 2,
      nombre: 'Alfredo Carrasco Francisco ',
      director: 'MII. María del Socorro Flores Serrano',
      tutor: 'Dra. Leticia Vázquez Tzitzihua',
      tesis: 'Aplicación de la metodología de DMAIC para la mejora del proceso y reducción de variabilidad en la torre separadora de aguas amargas (T-2202), en la empresa Braskem IDESA.'
    },
    {
      id: '178N1057',
      generacionId: 2,
      nombre: 'Ana Bertha Javier Domínguez ',
      director: 'Dra. Lucila Guadalupe Tobón Galicia',
      tutor: 'MC. Liliana Fuentes Rosas',
      tesis: 'Propuesta de un sistema de control de inventarios para mejorar la atención del servicio al cliente con respecto a la demanda de productos en Papelerías del Ahorro sucursal Coatzacoalcos'
    },
    {
      id: '178N1058',
      generacionId: 2,
      nombre: 'Arturo Tevera Vázquez',
      director: 'MII. María del Socorro Flores Serrano ',
      tutor: 'Dra. Magdalena Hernández Cortéz',
      tesis: 'Disminución de desperdicios que afectan la productividad en una empresa de sureste del Estado de Veracruz.'
    },
    {
      id: '178N1059',
      generacionId: 2,
      nombre: 'Asunción Yamileth Mendoza Vázquez ',
      director: 'Dra. Arleny Lobos Pérez',
      tutor: 'Dra. María de Lourdes López Cruz',
      tesis: 'Diseño del laboratorio de ergonomía e higiene y seguridad industrial, como proyecto de inversión para la carrera de Ingeniería Industrial del Instituto Tecnológico Superior de Coatzacoalcos.'
    },
    {
      id: '178N1060',
      generacionId: 2,
      nombre: 'Carlos Alejandro Hernández Acosta ',
      director: 'Dra. María de Lourdes López Cruz',
      tutor: 'MC. Liliana Fuentes Rosas',
      tesis: 'Estrategias para la mejora del cumplimiento del programa anual de indicadores de un instituto tecnológico superior del Estado de Veracruz.'
    },
    {
      id: '178N1061',
      generacionId: 2,
      nombre: 'Darinel Maximino Macario ',
      director: 'Dra. Viridiana Sánchez Vázquez',
      tutor: 'Dra. Leticia Vázquez Tzitzihua',
      tesis: 'Medición de la productividad de la energía eléctrica de un sistema trigenerador.'
    },
    {
      id: '178N1062',
      generacionId: 2,
      nombre: 'Eric De Jesús Mendoza Vázquez ',
      director: 'Dra. Leticia Vázquez Tzitzihua',
      tutor: 'Dr. Julio César Flores Contreras',
      tesis: 'Propuesta de mejora del programa actual de mantenimiento preventivo de una empresa productora de resinas termoplásticas.'
    },
    {
      id: '178N1063',
      generacionId: 2,
      nombre: 'Gustavo Solano Silva ',
      director: 'Dra. Arleny Lobos Pérez',
      tutor: 'Dra. Viridiana Sánchez Vázquez',
      tesis: 'Análisis de alternativas de inversión para el funcionamiento de la planta purificadora de agua del ITESCO.'
    },
    {
      id: '178N1065',
      generacionId: 2,
      nombre: 'Patricia del Carmen Cortéz Ávalos ',
      director: 'Dra. Viridiana Sánchez Vázquez',
      tutor: 'Dra. Leticia Vázquez Tzitzihua',
      tesis: 'Evaluación de las necesidades de capacitación y desempeño del personal docente del instituto Tecnológico Superior de Coatzacoalcos.'
    },
    {
      id: '178N1066',
      generacionId: 2,
      nombre: 'Pedro Hernández Gallegos ',
      director: 'Dra. Magdalena Hernández Cortéz',
      tutor: 'MC. Liliana Fuentes Rosas',
      tesis: 'Identificación, análisis y control de los factores de riesgos ergonómicos en una institución educativa del Estado de Veracruz mediante el método ERGOPAR.'
    },
    {
      id: '178N1074',
      generacionId: 2,
      nombre: 'José Román Jiménez Monola',
      director: 'Dra. Arleny Lobos Pérez',
      tutor: 'MII. María del Socorro Flores Serrano',
      tesis: 'Identificación y análisis que afectan la comunicación entre los estudiantes y los procesos.'
    },
    {
      id: '178N1076',
      generacionId: 2,
      nombre: 'José Leonel Sotelo Raygoza ',
      director: 'MC. Liliana Fuentes Rosas',
      tutor: 'Dra. Lucila Guadalupe Tobón Galicia',
      tesis: 'Propuesta de un mecanismo pertinente mediante un cuadro de mando integral que indique la efectividad y eficiencia en el cumplimiento de las metas institucionales del CETIS 79.'
    },
    {
      id: '178N1077',
      generacionId: 2,
      nombre: 'María De Los Ángeles Cruz Hernández',
      director: 'MC. Liliana Fuentes Rosas',
      tutor: 'Dr. Jorge Estévez Lavín',
      tesis: 'Identificación de variables latentes del Maslach burnout inventory (MBI), en trabajadores del sector salud mediante análisis factorial.'
    },




    {
      id: '188N1009',
      generacionId: 3,
      nombre: 'Anali Corcino Mereles ',
      director: 'MII. María del Socorro Flores Serrano',
      tutor: 'Dr. Jorge Estévez Lavín',
      tesis: 'Análisis técnico y financiero de un sistema de producción de moringa.'
    },
    {
      id: '188N1010',
      generacionId: 3,
      nombre: 'Alejandro Gallardo Morán',
      director: 'MII. María del Socorro Flores Serrano',
      tutor: 'MC. Liliana Fuentes Rosas',
      tesis: 'Disminución de piezas defectuosas en el proceso de decorado de botellas de vidrio a través de la metodología de DMAIC.'
    },
    {
      id: '188N1011',
      generacionId: 3,
      nombre: 'Giovanny Amador González Morales ',
      director: 'Dra. Lucila Guadalupe Tobón Galicia',
      tutor: 'Dra. María de Lourdes López Cruz',
      tesis: 'Evaluación de tres tipos de combustibles sólidos para la producción de vapor eficiente en la caldera Takoma de una empresa papelera.'
    },
    {
      id: '188N1015',
      generacionId: 3,
      nombre: 'Cynthia Jeannette Amores Mendoza',
      director: 'Dra. Magdalena Hernández Cortéz',
      tutor: 'Dra. Leticia Vázquez Tzitzihua',
      tesis: 'nálisis y diseño de un sistema de gestión en seguridad y salud ocupacional en una empresa del Estado de Veracruz.'
    },
    {
      id: '188N1017',
      generacionId: 3,
      nombre: 'Jesús Alberto Cruz Toy',
      director: 'Dra. Magdalena Hernández Cortéz',
      tutor: 'Dra. Viridiana Sánchez Vázquez',
      tesis: 'Implementación de un sistema de gestión de calidad, primera fase, en la empresa Bufete Peninsular S.A. de C.V.'
    },
    {
      id: '188N1018',
      generacionId: 3,
      nombre: 'Iris Zuleyma Chigo Rumayor ',
      director: 'Dra. Viridiana Sánchez Vázquez',
      tutor: 'Dra. Magdalena Hernández Cortéz',
      tesis: 'Determinación de los parámetros que afectan el crecimiento de la tilapia en el Centro Acuícola Aylin.'
    },
    {
      id: '188N1019',
      generacionId: 3,
      nombre: 'Hilén Escobar Castro ',
      director: 'MC. Liliana Fuentes Rosas',
      tutor: 'Dra. María de Lourdes López Cruz',
      tesis: 'Estandarización y mejora de los procesos productivos de una planta purificadora de agua mediante la aplicación de simulación en SIMIO.'
    },
    {
      id: '188N1021',
      generacionId: 3,
      nombre: 'Diego Antonio Juan López',
      director: 'Dra. Viridiana Sánchez Vázquez',
      tutor: '',
      tesis: 'Análisis técnico y financiero para la implementación de una empresa acuícola.'
    },
    {
      id: '188N1022',
      generacionId: 3,
      nombre: 'Érika López González ',
      director: 'Dra. Lucila Guadalupe Tobón Galicia',
      tutor: 'MC. Liliana Fuentes Rosas',
      tesis: 'Implementación de mejoras en la administración del mantenimiento en la empresa Play-Time.'
    },
    {
      id: '188N1025',
      generacionId: 3,
      nombre: 'Eliezer Romay Pérez ',
      director: 'Dra. María de Lourdes López Cruz',
      tutor: 'Dra. Lucila Guadalupe Tobón Galicia',
      tesis: 'Mejora de la productividad de un taller de torno y soldadura mediante la aplicación de la ingeniería de métodos.'
    },
    {
      id: '188N1027',
      generacionId: 3,
      nombre: 'Celeste Santos Martínez ',
      director: 'Dra. María de Lourdes López Cruz',
      tutor: 'Dra. Magdalena Hernández Cortéz',
      tesis: 'Propuesta de mejora en los indicadores en ventas y satisfacción del cliente en la empresa Prendinero mediante la utilización de pronósticos.'
    },
    





    {
      id: '198N0930',
      generacionId: 4,
      nombre: 'Miguel Jiménez Domínguez ',
      director: 'Dra. Viridiana Sánchez Vázquez',
      tutor: 'Dra. Magdalena Hernández Cortéz ',
      tesis: 'Disminución de la variabilidad del grosor del grano de maíz en el proceso de rolado de una fábrica procesadora de alimento para ganado.'
    },
    {
      id: '198N0932',
      generacionId: 4,
      nombre: 'Maribel Palmeros Morales',
      director: 'Dra. María de Lourdes López Cruz',
      tutor: 'MII. María del Socorro Flores Serrano ',
      tesis: 'Mejoramiento operativo en el manejo de la dirección de la empresa restaurante de mariscos Los Jarochitos en 2019 Xalapa, Ver.'
    },
    {
      id: '198N0933',
      generacionId: 4,
      nombre: 'David Ramírez Figueroa',
      director: 'Dra. María de Lourdes López Cruz',
      tutor: 'MC. Liliana Fuentes Rosas ',
      tesis: 'Análisis y reducción de tiempos de demora en trenes de carga en la empresa Ferrosur de 2019 Tierra Blanca.'
    },





    {
      id: '208N0335',
      generacionId: 5,
      nombre: 'Farid Alfredo Bielma López',
      director: 'MII. María del Socorro Flores Serrano',
      tutor: 'MII. Iván San Juan López ',
      tesis: 'Implementación de la metodología Seis Sigma para eliminar los desperdicios de tiempo de espera en la fabricación de software de la empresa Intekel Automatización.'
    },
    {
      id: '208N0336',
      generacionId: 5,
      nombre: 'Luis Manuel González Cos ',
      director: 'MC. Liliana Fuentes Rosas',
      tutor: 'Dr. Genaro Ochoa Cruz',
      tesis: 'Propuesta Ergonómica de Elaboración de Mobiliario ante el COVID-19 para el sistema de aeropuertos de la empresa Aeropuertos y Servicios Auxiliares.'
    },
    {
      id: '208N0337',
      generacionId: 5,
      nombre: 'Juan Francisco Gómez Valencia',
      director: 'Dra. Lucila Guadalupe Tobón Galicia',
      tutor: 'MII. Iván San Juan López ',
      tesis: 'Diseño experimental para elevar la productividad de la micropropagación de la germinación de las semillas de chile habanero (Capsicum chinense Jaqs).'
    },




    {
      id: '218N0004',
      generacionId: 6,
      nombre: 'Bertilde Lavoignet de los Santos',
      director: 'Baja temporal',
      tutor: 'Baja temporal',
      tesis: 'Baja temporal'
    },
    {
      id: '218N0005',
      generacionId: 6,
      nombre: 'Fernando Ríos Martínez ',
      director: 'MC. Liliana Fuentes Rosas',
      tutor: 'Pendiente',
      tesis: 'Propuesta de mejora en el proceso de atención al alumnado del programa educativo de ingeniería industrial.'
    },
    {
      id: '218N0006',
      generacionId: 6,
      nombre: 'Flor María Guevara Higareda',
      director: 'Dra. Viridiana Sánchez Vázquez',
      tutor: 'Pendiente',
      tesis: 'Aplicación de Minitab, como propuesta de mejora para la asignación de un dispensario exclusivo en servicio de motocicletas, en la gasolinera Vazmoy SA. De CV.'
    },

  ];


  constructor() { }

  getGeneraciones(){
    return this.generaciones;
  }

  getDataGeneraciones() {
    return this.dataGeneraciones;
  }


}


export interface geneInterf {
  id: number;
  name: string;
}

export interface dataGeneracionInterf {
  id: string;
  generacionId: number;
  nombre: string;
  director: string;
  tutor: string;
  tesis:string;
}



