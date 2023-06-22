import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProcurementService } from 'src/procurement.service';

@Component({
  selector: 'app-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.css']
})
export class ProcurementComponent {
  public getProcurementService: any;
  sendProcurementServiceForm: FormGroup;

  constructor(private result:ProcurementService){

  }
  ngOnInit(): void{
    this.getProcurementServiceMethod();
    this.sendProcurementServiceForm = new FormGroup({
      service : new FormControl(null)
    })
    this.sendProcurementMethod();
  }



  getProcurementServiceMethod(){
    this.result.getProcurements().subscribe(
      (data) => {
        console.log(data)
        this.getProcurementService = data
      }
    );
  }

  sendProcurementMethod(){
    const service = this.sendProcurementServiceForm.get('service').value;
    this.result.sendProcurements(service).subscribe();
    alert("service successful saved, reload the page")
    this.sendProcurementServiceForm.get('service').value(null)
  }

}
