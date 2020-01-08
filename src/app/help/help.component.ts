import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-help",
  templateUrl: "./help.component.html",
  styleUrls: ["./help.component.css"]
})
export class HelpComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  helpForm: FormGroup;
  validationMessages = {
    email: {
      required: "Email is required",
      emailDomain: "email domain should be dell.com"
    },
    phone: {
      required: "Phone Number is required.",
      minlength: "PassWord must be greater than 10 character"
    }
  };
  formErrors = { contactpreference: "", phone: "", email: "" };

  ngOnInit() {
    this.helpForm = this.fb.group({
      contactpreference: ["email"],
      email: ["", [Validators.required, emailDomain("dell.com")]],
      phone: ["", [Validators.required, Validators.minLength(10)]]
    });
    this.helpForm
      .get("contactpreference")
      .valueChanges.subscribe((data: string) => {
        this.onContactPreferenceChange(data);
      });
    this.helpForm.valueChanges.subscribe(data => {
      this.logValidationErrors(this.helpForm);
    });
  }
  onContactPreferenceChange(selectedValue: string) {
    const phoneFormControl = this.helpForm.get("phone");
    //const emailControl=this.helpForm.get('email');
    if (selectedValue === "phone") {
      phoneFormControl.setValidators([
        Validators.required,
        Validators.minLength(10)
      ]);
      // emailControl.clearValidators();
    } else {
      // emailControl.setValidators([Validators.required])
      phoneFormControl.clearValidators();
    }
    phoneFormControl.updateValueAndValidity();
  }

  logValidationErrors(group: FormGroup = this.helpForm): void {
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
          const Message = this.validationMessages[key];
          for (const errorkey in abstractControl.errors) {
            if (errorkey) {
              this.formErrors[key] += Message[errorkey] + ";";
            }
          }
        }
      }
    });
  }

  onSubmit(): void {
    console.log(this.helpForm.value);
    console.log(this.helpForm.touched);

    console.log(this.helpForm.controls.email.value);
    console.log(this.helpForm.controls.email.touched);
    console.log(this.helpForm.controls.phone.value);
    console.log(this.helpForm.controls.phone.touched);
  }
}
function emailDomain(domainName: string) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const email: string = control.value;
    const domain = email.substring(email.lastIndexOf("@" + 1));
    if (email === "" || domain.toLowerCase() === domainName.toLowerCase()) {
      return null;
    } else {
      return { emailDomain: true };
    }
  };
}
