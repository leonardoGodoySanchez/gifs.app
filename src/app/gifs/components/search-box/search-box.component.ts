import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: true,
  template: `
    <h5>Buscar:</h5>
    <input type="text"
    class="form-control"
    placeholder="Buscar Gifs..."
    (keyup.enter)="searchTag()"
    #txtTaginput
    >
  `,
})
export class SearchBoxComponent 
{
  @ViewChild('txtTaginput')
  public tagInput!: ElementRef<HTMLInputElement>


  //se injecta el servicio en el costructor
  constructor( private gifsService: GifsService) {}

  // searchTag ( newTag: string)
  searchTag ()
  {
    const newTag = this.tagInput.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';//para limpiar caja de texto
    // console.log({ newTag })
  }
}
/*
(keydown) empieza a presionar la tecla
(keypress) presiona la tecla
(keyup) levanta la tecla
    #txtTaginput solo en el lado del template
    @ViewChild(myPredicate) myChildComponent; document.queryselector selector
@ViewChildren(myPredicate) myChildComponent; mas de un elemento ,el predicado es el selector
! indica que siempre va a tener un valor
    (keyup.enter)="searchTag( txtTaginput.value )" no se necesita declarar el txtTaginputo con la declaracion de const
    newTag

    tomar una referencia local viewChild solo uno
    viewChildren mas de un elemento devuelve una rreglo
*/
