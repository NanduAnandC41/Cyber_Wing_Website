import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScreenPages , CdrDataDTO} from '../models/state.constants';


@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {

  private baseUrl = "http://localhost:3002/api/v1/data/";
  private mappingName = "screenNames";
  private cdrDataMapName = "Cdr-Data"
  private listOfcdrDataMapName = "listOfCdrData"

  constructor(private http: HttpClient) { }

  getScreenNames(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl + this.mappingName}`);
  }


  submitCdrData(postObj: CdrDataDTO): Observable<any>{
    const form = new FormData;
    form.append('cdrDataDtoStr', JSON.stringify(postObj));
    return this.http.post<any>((`${this.baseUrl + this.cdrDataMapName}`), form);
  }

  getListOfCdrData(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl + this.listOfcdrDataMapName}`);
  }
}
