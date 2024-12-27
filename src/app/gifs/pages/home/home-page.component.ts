import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from "../../components/card-list/card-list/card-list.component";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs,interface';

@Component({
  selector: 'gifs-home-page',
  standalone: true,
  imports: [SearchBoxComponent, CardListComponent],
  templateUrl: './home-page.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomePageComponent 
{ 
  //se injecta el service aca para poder usarlo en el html home.page.component.html gif-card-list
  constructor(private gifsServices: GifsService) {}

  get gifs(): Gif[]
  {
    return this.gifsServices.gifList;
  }
}
