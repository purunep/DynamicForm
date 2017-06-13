import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { Employee } from "app/employee.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = '';

public myForm:FormGroup;

constructor(private _fb: FormBuilder){}

   ngOnInit(): void {
     this.myForm = this._fb.group({
       name:['',[Validators.required, Validators.minLength(3)]],
       addresses:this._fb.array([])
     });

     this.addAddress();
    }


addAddress()
{
  const control = <FormArray>this.myForm.controls['addresses'];
  const addCtrl = this.initAddress();
  control.push(addCtrl);
}

initAddress()
{
return this._fb.group({
    street:['', Validators.required],
    postcode:['']
});

}

removeAddress(i: number) {
  const control = <FormArray>this.myForm.controls['addresses'];
  control.removeAt(i);
}


save(model: Employee) {
  // call API to save
  // ...
  console.log(model);
}

}


export class CustomValidator extends Validators
{


}
