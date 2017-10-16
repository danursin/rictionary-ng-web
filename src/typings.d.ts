/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface RictionaryDTO {
  RictionaryID: number,
  RictionaryName: string,
  AValue: string,
  BValue: string,
  CValue: string,
  DValue: string,
  EValue: string,
  FValue: string,
  GValue: string,
  HValue: string,
  IValue: string,
  JValue: string,
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
  ZValue: string,
  CreatedDate: Date,
  CreatedBy: string,
  UpdatedDate: Date,
  UpdatedBy: string
}

interface LetterValuePair { letter: string, value: string }

interface Rictionary {
  RictionaryID: number,
  RictionaryName: string,
  CreatedDate: Date,
  CreatedBy: string,
  UpdatedDate: Date,
  UpdatedBy: string,
  Values: LetterValuePair []
}
