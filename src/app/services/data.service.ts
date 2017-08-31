import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    private apiUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) {}

    public all<T>(modelName: string): Observable<T[]>{
        return this.http.get(`${this.apiUrl}/shared/${modelName}`).map((res: T[]) => res);
    }

    public get<T>(modelName: string, id: number): Observable<T>{
        return this.http.get(`${this.apiUrl}/shared/${modelName}/${id}`).map((res: T) => res);
    }

    public query<T>(query: IQueryParams): Observable<T[]>{
        return this.http.post(`${this.apiUrl}/shared/query`, query).map((res: T[]) => res);
    }

    public create<T>(modelName: string, model: any): Observable<T>{
        return this.http.put(`${this.apiUrl}/shared/${modelName}`, model).map((res: T) => res);
    }

    public update<T>(modelName: string, id: number, model: any): Observable<T>{
        return this.http.put(`${this.apiUrl}/shared/${modelName}/${id}`, model).map((res: T) => res);
    }

    public delete<T>(modelName: string, id: number): Observable<T>{
        return this.http.delete(`${this.apiUrl}/shared/${modelName}/${id}`).map((res: T) => res);
    }
}

export interface IQueryParams {
    model: string,
    attributes?: Array<string|string[]>,
    include?: any[],
    where?: Object,
    order?: string[][],
    offset?: number,
    limit?: number
}