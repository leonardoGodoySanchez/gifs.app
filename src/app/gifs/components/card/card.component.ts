import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs,interface';
import { LazyImageComponent } from "../../../shared/lazyImage/lazy-image.component";

@Component({
  selector: 'gifs-card',
  standalone: true,
  imports: [LazyImageComponent],
  templateUrl: './card.component.html',
  // styleUrl: './card.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CardComponent  implements OnInit
{ 
  @Input()
  public gif!: Gif;

  ngOnInit(): void 
  {
    if ( !this.gif ) throw new Error('Gif is required');
  }
}
