import {HttpClient} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {loog} from "./functions.service";
const log = loog('██-PL-SERV-██');

@Injectable({ providedIn: "root" })
export class GuardServices {
  constructor(private http : HttpClient) {}

  list():       Observable<[]>     { return this.http.get<[]>      ('/api/info')   }
  time(d:any):  Observable<string> { return this.http.post<string> ('/api/time',d) }

}
