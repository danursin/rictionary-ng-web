import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class RictionaryService {
    constructor(private dataService: DataService) {}

    private modelName = "Rictionary";
    private cache = new Map<number, Rictionary>();

    list(): Observable<{RictionaryID: number, RictionaryName: string}[]>{
        return this.dataService.query<{ RictionaryID: number, RictionaryName: string }>({
            model: this.modelName,
            attributes: ["RictionaryID", "RictionaryName"],
            order: [ ["RictionaryName", "ASC"] ]
        });
    }

    get(id: number): Observable<Rictionary> {
        return this.dataService.get<RictionaryDTO>(this.modelName, id)
        .map(dto => this.toRictionaryModel(dto));
    }

    toRictionaryModel(dto: RictionaryDTO): Rictionary {
        return {
            RictionaryID: dto.RictionaryID,
            RictionaryName: dto.RictionaryName,
            CreatedDate: dto.CreatedDate,
            CreatedBy: dto.CreatedBy,
            UpdatedDate: dto.UpdatedDate,
            UpdatedBy: dto.UpdatedBy,
            Values: [
                { letter: "A", value: dto.AValue },
                { letter: "B", value: dto.BValue },
                { letter: "C", value: dto.CValue },
                { letter: "D", value: dto.DValue },
                { letter: "E", value: dto.EValue },
                { letter: "F", value: dto.FValue },
                { letter: "G", value: dto.GValue },
                { letter: "H", value: dto.HValue },
                { letter: "I", value: dto.IValue },
                { letter: "J", value: dto.JValue },
                { letter: "K", value: dto.KValue },
                { letter: "L", value: dto.LValue },
                { letter: "M", value: dto.MValue },
                { letter: "N", value: dto.NValue },
                { letter: "O", value: dto.OValue },
                { letter: "P", value: dto.PValue },
                { letter: "Q", value: dto.QValue },
                { letter: "R", value: dto.RValue },
                { letter: "S", value: dto.SValue },
                { letter: "T", value: dto.TValue },
                { letter: "A", value: dto.AValue },
                { letter: "U", value: dto.UValue },
                { letter: "V", value: dto.VValue },
                { letter: "W", value: dto.WValue },
                { letter: "X", value: dto.XValue },
                { letter: "Y", value: dto.YValue },
                { letter: "Z", value: dto.ZValue }
            ]
        };
    }

    private 
}
