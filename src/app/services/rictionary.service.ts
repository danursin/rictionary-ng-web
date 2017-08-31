import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class RictionaryService {
    constructor(private dataService: DataService) {}

    private modelName: string = "Rictionary";

    list(): Observable<{RictionaryID: number, RictionaryName: string}[]>{
        return this.dataService.query<{RictionaryID: number, RictionaryName: string}>({
            model: this.modelName,
            attributes: ["RictionaryID", "RictionaryName"],
            order: [ ["RictionaryName", "ASC"] ]
        });
    }

    get(id: number): Observable<Rictionary> {
        return this.dataService.get(this.modelName, id);
    }
}

export interface Rictionary {
    RictionaryID: number,
    RictionaryName: string,
    CreatedDate: Date,
    LastModifiedDate: Date,
    CreatedBy: string,
    LastModifiedBy: string
    AValue: string,
    BValue: string,
    CValue: string,
    DValue: string,
    EValue: string,
    FValue: string,
    GValue: string,
    HValue: string,
    IValue: string,
    KValue: string,
    LValue: string,
    MValue: string,
    NValue: string,
    OValue: string,
    PValue: string,
    QValue: string,
    RValue: string,
    SValue: string,
    TValue: string,
    UValue: string,
    VValue: string,
    WValue: string,
    XValue: string,
    YValue: string,
    ZValue: string
}