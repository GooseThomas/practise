import {HttpClient} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {Injectable} from "@angular/core";
import {loog} from "./functions.service";
const log = loog('██-PL-SERV-██');

@Injectable({ providedIn: "root" })
export class GuardServices {
  constructor(http : httpClient) {}

  list():       Observable<string[]>  { return this.http.get<string>   ('/api/info')      }

  static list() {

  }
}
