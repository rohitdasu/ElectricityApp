import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private placementUrl: string =
    "https://el-backend-ohs2vesm3q-lz.a.run.app/api/placements";
  constructor(private http: HttpClient) {}
  getPlacements() {
    return this.http.get(this.placementUrl, {
      // headers: { Accept: "*/*", "Content-Type": "application/json" },
    });
  }
}
