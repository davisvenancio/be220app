import { Injectable } from '@angular/core';
import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { ProgramsType } from '../models/programs-type.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramsTypeService {

  constructor(private readonly firestore: Firestore) { }

  getProgramsType(): Observable<ProgramsType[]> {
    return collectionData(collection(this.firestore, 'programsTypes')).pipe(
      map((data: (DocumentData | (DocumentData & { id: string; name: string; url_img: string; }))[]) => {
        return data.map(item => ({
          id: item.id,
          name: item.name,
          url_img: item.url_img,
        }));
      })
    );
  }
}
