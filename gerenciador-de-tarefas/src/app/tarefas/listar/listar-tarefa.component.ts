import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
})
export class ListarTarefaComponent implements OnInit {
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.tarefas = this.listarTodos();

    // teste listagem
    // this.tarefas = [
    //   new Tarefa(1, "Tarefa 1", true),
    //   new Tarefa(2, "Tarefa 2", false)
    // ]
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }
}
