import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl: string = "https://el-backend-ohs2vesm3q-lz.a.run.app";

  constructor(private http: HttpClient) {}
  getPlacements() {
    return this.http.get(this.apiUrl + "/api/placements", {
      headers: { Accept: "*/*" },
    });
  }
  postCable(x: any) {
    return this.http.post(this.apiUrl + "/api/cable", x, {
      headers: {
        Accept: "*/*",
      },
    });
  }
  postLaying(x) {
    return this.http.post(this.apiUrl + "/api/layingprocedure", x, {
      headers: {
        Accept: "*/*",
      },
    });
  }
  postLoad(x: any) {
    return this.http.post(this.apiUrl + "/api/load", x, {
      headers: {
        'Content-Type':'application/json'
      },
    });
  }
}
