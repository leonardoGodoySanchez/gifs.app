import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { NgFor } from '@angular/common';
import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [NgFor, TitleCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush, se comenta, no permitia ver cambios al apretar enter en el buscador
})
export class SidebarComponent 
{
  // private class gifsService
  constructor( private gifsService: GifsService){ }

  get tags(): string[]
  {
    return this.gifsService.tagsHistory; //para hacerlo publico y llevarlo al html
  }

  // método para hacer click en la búsqueda anterior y traer los gifs
  searchTag(tag: string): void
  {
    this.gifsService.searchTag( tag );
  }
}

/**
 * TO DO:
 * INJECTAR EL SERVICIO EN SIDEBARCOMPONENT
 * 
 * EN EL HTML DUPLICAR  CON NGFOR DEPENDIENDO DE CUANTOS ELEMENTOS TENGA ENE L SERVICIO
 * 
 * importar pipes en angular 18 
 */
