import { Component, OnInit } from '@angular/core';

import { Ativo } from '../shared/ativo.model';
import { AtivoService } from '../shared/ativo.service';

@Component({
  selector: 'app-ativo-list',
  templateUrl: './ativo-list.component.html',
  styleUrls: ['./ativo-list.component.css']
})
export class AtivoListComponent implements OnInit {

  ativos: Ativo[] = [];

  constructor(private ativoService: AtivoService) { }

  ngOnInit(): void {
    this.ativoService.getAll().subscribe(
      ativos => this.ativos = ativos,
      error => alert('Erro ao carregar lista')
    )
  }

}
