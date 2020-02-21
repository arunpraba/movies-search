import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WebService {
  constructor(private http: HttpClient) {}

  getMovies(query): any {
    const url = `http://www.omdbapi.com/?s=${query}&apiKey=46845d0d`;
    return this.http.get(url);
  }
}
