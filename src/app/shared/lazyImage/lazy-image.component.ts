import { NgIf, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [NgIf, NgStyle],
  templateUrl: './lazy-image.component.html',
  // styleUrl: './lazyImage.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})

//lógica para poder colocar un cargando en la mpagina 

export class LazyImageComponent implements OnInit
{ 
  @Input()
  public url!: string;

  @Input()
  public alt: string = "";
  
  public hasLoaded: boolean = false;

  ngOnInit(): void 
  {
    if ( !this.url ) throw new Error('Url Property is required.');
  }

  onLoad()
  {
    console.log('Image loaded');
    this.hasLoaded = true;
  }
}

