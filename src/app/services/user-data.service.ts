import { Injectable } from '@angular/core';
import { DocumentData, Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { userData } from '../models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private readonly firestore: Firestore) { }

  getUserData(): Observable<userData[]> {
    return collectionData(collection(this.firestore, 'userData')).pipe(
      map((data: (DocumentData | (DocumentData & { id: string; name: string; levelUser: string; urlAvatar: string }))[]) => {
        return data.map(item => ({
          id: item.id,
          name: item.name,
          levelUser: item.levelUser,
          urlAvatar: item.urlAvatar,
        }));
      })
    );
  }
}
