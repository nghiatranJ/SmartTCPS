import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
export class DHTValue {
  public am: number;
  public nhiet: number;
  constructor(DHTValue?: any) {
    DHTValue = DHTValue || {};
    this.am = DHTValue.am || null;
    this.nhiet = DHTValue.nhiet || null;
  }
}
export class RolesValue {
  public role1: boolean;
  public role2: boolean;
  public role3: boolean;
  public role4: boolean;

  constructor(RolesValue?: any) {
    RolesValue = RolesValue || {};
    this.role1 = RolesValue.role1 || null;
    this.role2 = RolesValue.role2 || null;
    this.role3 = RolesValue.role3 || null;
    this.role4 = RolesValue.role4 || null;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SmartTCPS';
  public dht: DHTValue = new DHTValue();
  public roles: RolesValue = new RolesValue();
  constructor(db: AngularFireDatabase) {
    db.object<DHTValue>('/DHT22').valueChanges().subscribe(dht => {
      this.dht = dht;
      console.log(dht);
    });
    db.object<RolesValue>('/role').valueChanges().subscribe(roles => {
      this.roles = roles;
      console.log(this.roles);
    });

  }
}
