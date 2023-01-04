import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from 'src/app/_model/paciente';
import { PacienteService } from 'src/app/_service/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  dataSource: MatTableDataSource<Paciente> = new MatTableDataSource();
  displayedColumns: string[] = ['idPaciente', 'nombres', 'apellidos', 'acciones'];

  constructor(private pacienteService : PacienteService) { }

  ngOnInit(): void {
    this.pacienteService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

}
