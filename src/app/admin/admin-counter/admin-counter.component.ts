import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IRemoteConfigCounters, initialRemoteConfigCounters } from 'src/app/data/remote-config-counters.interface';
import { RemoteConfigService } from 'src/app/service/remoteConfig/remote-config.service';

@Component({
  selector: 'app-admin-counter',
  templateUrl: './admin-counter.component.html',
  styleUrls: ['./admin-counter.component.scss'],
})
export class AdminCounterComponent implements OnInit {

  constructor(private remoteConfigService: RemoteConfigService, private formBuilder: FormBuilder) { }

  countersForm: FormGroup;

  ngOnInit(): void {
      this.reloadFormGroup(initialRemoteConfigCounters);

      this.remoteConfigService.getCounters().subscribe(res => {
          this.reloadFormGroup(res);
      });
  }

  reloadFormGroup(res){
    this.countersForm = this.formBuilder.group({
      numberOfMeal: res.numberOfMeal,
      numberOfCooker: res.numberOfCooker ,
      quantityOfBioWaste: res.quantityOfBioWaste ,
    });
  }

  apply(value){
    this.remoteConfigService.saveCouters(value);
  }

}
