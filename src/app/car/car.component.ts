import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.css"]
})
export class CarComponent implements OnInit {
  dispaly: boolean;
  display = true;
  datePickerConfig: Partial<BsDatepickerConfig>;
  constructor(private fb: FormBuilder) {
    this.datePickerConfig = Object.assign(
      {},

      {
        containerClass: "theme-dark-blue",
        showWeekNumbers: true,
        minDate: new Date(2020, 0, 1),
        maxDate: new Date(2020, 12, 30)
      }
    );
  }
  carForm: FormGroup;
  more: FormArray;
  validationmessage = {
    name: { required: "Name is equired" },

    PhoneNo: { required: "phonenumber is required" }
  };
  formErrors = {};
  ngOnInit() {
    this.carForm = this.fb.group({
      name: ["", Validators.required],
      PhoneNo: ["", Validators.required],
      more: this.fb.array([this.addmoreformgroup()])
    });
    this.carForm.valueChanges.subscribe(data => {
      this.logValidationErrors(this.carForm);
    });
  }
  addcarbtn(): void {
    (<FormArray>this.carForm.get("more")).push(this.addmoreformgroup());
  }
  addmoreformgroup(): FormGroup {
    return this.fb.group({
      nameBdt: ["", Validators.required],
      nameRdt: ["", Validators.required]
    });
  }
  logValidationErrors(group: FormGroup = this.carForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = "";
        if (
          (abstractControl &&
            !abstractControl.valid &&
            abstractControl.touched) ||
          abstractControl.dirty
        ) {
          const Message = this.validationmessage[key];
          for (const errorkey in abstractControl.errors) {
            if (errorkey) {
              this.formErrors[key] += Message[errorkey] + ";";
            }
          }
        }
      }
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }
  addcar() {}
  deteteMoreclick(moreGroupIndex: number): void {
    (<FormArray>this.carForm.get("more")).removeAt(moreGroupIndex);
  }
  onSubmit(): void {
    console.log(this.carForm.value);
    console.log(this.carForm.touched);
    console.log(this.carForm.controls.name.value);
    console.log(this.carForm.controls.name.touched);
    console.log(this.carForm.controls.nameBdt.value);
    console.log(this.carForm.controls.nameBdt.touched);
    console.log(this.carForm.controls.nameRdt.value);
    console.log(this.carForm.controls.nameRdt.touched);
  }
}
