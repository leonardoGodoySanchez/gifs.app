import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Gif } from '../../../interfaces/gifs,interface';
import { NgFor } from '@angular/common';
import { CardComponent } from "../../card/card.component";

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [NgFor, CardComponent],
  templateUrl: './card-list.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent 
{ 
  @Input() 
  public gifs: Gif[] = [];
}

/**
 * NOTA : EL NGFOR EN ANGULAR 18 SE TIENE QUE IMPORTAR EN IMPORTS DE COMPONENT.TS PARA QUE FUNCIONE
 */