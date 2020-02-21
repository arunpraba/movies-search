import { Component } from "@angular/core";
import { WebService } from "./services/web.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  moviesList: any = [];
  noData: boolean = false;
  query: string = "";
  isLoading: boolean;

  constructor(private web: WebService) {}

  search() {
    if (this.query.length > 2) {
      this.isLoading = true;
      this.web.getMovies(this.query).subscribe(
        data => {
          const { Response, Search, totalResults: results } = data;
          if (Response === "False") {
            this.isLoading = false;
            this.moviesList = [];
            this.noData = true;
            return;
          }
          this.noData = false;
          this.moviesList = Search.slice(0, results > 5 ? 5 : results);
          this.isLoading = false;
        },
        error => {
          this.isLoading = false;
        }
      );
    }
  }

  clear() {
    this.query = "";
    this.moviesList = [];
    this.noData = false;
  }
}
