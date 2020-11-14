import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { IRemoteConfigCounters } from 'src/app/data/remote-config-counters.interface';
import { DB_CONFIG_KEY_COUNTERS, DB_NODE_REMOTE_CONFIG } from '../FireBaseConst';

@Injectable({
  providedIn: 'root',
})
export class RemoteConfigService {


  constructor(public db: AngularFireDatabase) {
  }

  getCounters(){
    return this.db.object<IRemoteConfigCounters>(`${DB_NODE_REMOTE_CONFIG}/${DB_CONFIG_KEY_COUNTERS}`).valueChanges();
  }
}
