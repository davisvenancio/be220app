import { Injectable } from '@angular/core';
import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { TrainingType } from '../models/training-type.model';
@Injectable({
  providedIn: 'root'
})
export class TrainingTypeService {

  constructor(private readonly firestore: Firestore) { }
  
  getTrainingTypes(): Observable<TrainingType[]> {
    return collectionData(collection(this.firestore, 'trainingTypes')).pipe(
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
