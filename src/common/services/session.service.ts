import { Injectable, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Model } from '../models/core/model';
import { Software } from '../models/software';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class SessionService implements OnInit {
  // Properties
  public sessionData: Observable<IDataSet<any>> = new Observable;
  private context: IDataSet<any> = {
    'Companies': [new Company('Microsoft'), new Company('Symantec'), new Company('Toshiba')],
    'Software': [new Software('Microsoft Office'), new Software('Active Directory'), new Software('RSA Token')],
  };

  // Constructor
  constructor() { }

  ngOnInit() { }

  public async getItem<T extends Model<T>>(dataSet: string, filter?: (value: T, index: number, array: T[]) => any, thisArg?: any): Promise<T> {
    return await new Promise<T>((resolve, reject) => {
      resolve(this.context[dataSet].find(filter) as T);
    });
  }
  public async getItems<T extends Model<T>>(dataSet: string, filter?: (value: T, index: number, array: T[]) => any, thisArg?: any): Promise<T[]> {
    return await new Promise<T[]>((resolve, reject) => {
      resolve(filter ? this.context[dataSet].filter(filter).slice() as T[] : this.context[dataSet].slice() as T[]);
    });
  }
}
export interface IDataSet<T extends Model<T>> {
  [key: string]: Model<T>[];
}