import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs,interface';

@Injectable({providedIn: 'root'})//servicio disponible en toda la aplicacion que ijecten ese servicio 

export class GifsService 
{
    public gifList: Gif[] = [];

    private _tagsHistory: string[] = [];
    private apiKey:       string = 'lDDLswcMsSkN5I1OYygMn0Na6s9nXlAl';//POSTMAN
    private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';//POSTMAN
    
    /*      GET POSTMAN 
        *   https://api.giphy.com/v1/gifs/search?api_key=lDDLswcMsSkN5I1OYygMn0Na6s9nXlAl&q=valorant&limit=10
    */

    //revisar app.config.ts providers : provideHttpClient()
    constructor( private http: HttpClient) 
    {
        this.loadLocalStorage();
        console.log('gifs service ready')
    } 

    get tagsHistory()
    {
        return [...this._tagsHistory];//operador spread para crear copia de tagshistory
    }

    private organizeHistory (tag: string)
    {
        tag = tag.toLowerCase(); //key sensite por ts

        /** lógica pára eliminar el antiguo y dejar elnuevo registro buscado */
        if ( this._tagsHistory.includes(tag))
        {
            this._tagsHistory = this._tagsHistory.filter( (oldTag) => oldTag !== tag )
        }

        this._tagsHistory.unshift( tag );
        this._tagsHistory = this.tagsHistory.splice(0,10);
        this.saveLocalStorage(); //se hace el llamado cuando se modifica o cambia el taghistory
    }

    /**
     *  Método para guardar en el localstogare 
     */
    private saveLocalStorage(): void
    {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory));//tiene que serializar el arreglo en string
    }

    /**
     * Método para leer el localstorage 
     */

    private loadLocalStorage(): void
    {
        if( !localStorage.getItem('history')) return;

        this._tagsHistory = JSON.parse( localStorage.getItem('history')! );//recupera el objeto transformado en string
        
        // con la validación tomamos el ultimo registroy lo guardamos para mostrarlos ultimos o la ultima busqueda vista
        if (this._tagsHistory.length === 0) return;
        this.searchTag( this._tagsHistory[0] );
    }

    /**
     * 
     * @param tag  Metodo buscar tag en base a la api de giphy
     * @returns 
     */
    searchTag ( tag: string):void
    {
        if(tag.length === 0) return;

        this.organizeHistory( tag );

        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q', tag);

        this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params })//esto es un observable: objeto que a lo largo del tiempo puede emitir valores
            .subscribe( resp => 
            {
                this.gifList = resp.data;
                // console.log({gif: this.gifList});+
            });
    }
}

// this._tagsHistory.unshift( tag );
// console.log(this.tagsHistory); esto se ve en consola de navegador
// fetch('https://api.giphy.com/v1/gifs/search?api_key=lDDLswcMsSkN5I1OYygMn0Na6s9nXlAl&q=valorant&limit=10')
// .then( resp => resp.json() )
// .then( data => console.log(data) );
/**
 *  search response de interfaces 
 */