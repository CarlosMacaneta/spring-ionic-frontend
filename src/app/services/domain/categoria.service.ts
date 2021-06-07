import { CategoriaDTO } from './../../models/categoria.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriaService {

  constructor(public http: HttpClient) { }

  findAll(): Observable<CategoriaDTO[]> {
    return this.http.get<CategoriaDTO[]>(`${environment.apiUrl}/categorias`);
  }
}
