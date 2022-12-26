import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/_model/paciente';
import { PacienteService } from 'src/app/_service/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  constructor(private pacienteService:PacienteService){}

   pacientes:Paciente[] = [];

  ngOnInit(): void {
    this.pacienteService.listar().subscribe(data => this.pacientes  = data);
  }

}
