import { Consulta } from "./consulta";
import { Examen } from "./examen";

export interface ConsultaListaExamenDTO {
    consulta: Consulta;
    lstExamen: Examen[];
}
