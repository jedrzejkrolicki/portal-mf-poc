import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyHttpService {

  private readonly params = {headers: {'Content-Type': 'application/json'}};

  constructor(public http: HttpClient) { }

  get(id: string): Observable<any> {
    return this.http.get(`${this.getBaseUrl()}/${id}`,
      this.params);
  }

  private getBaseUrl(): string {
    return `localhost:8080/policies`;
  }
}
