import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

    private apiUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) {}

    public all<T>(modelName: string): Observable<T[]>{
        return this.http.get<T[]>(`${this.apiUrl}/shared/${modelName}`);
    }

    public get<T>(modelName: string, id: number): Observable<T>{
        return this.http.get<T>(`${this.apiUrl}/shared/${modelName}/${id}`);
    }

    public query<T>(query: IQueryParams): Observable<T[]>{
        return this.http.post<T[]>(`${this.apiUrl}/shared/query`, query);
    }

    public create<T>(modelName: string, model: any): Observable<T>{
        return this.http.put<T>(`${this.apiUrl}/shared/${modelName}`, model);
    }

    public update<T>(modelName: string, id: number, model: any): Observable<T>{
        return this.http.put<T>(`${this.apiUrl}/shared/${modelName}/${id}`, model);
    }

    public delete<T>(modelName: string, id: number): Observable<T>{
        return this.http.delete<T>(`${this.apiUrl}/shared/${modelName}/${id}`);
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