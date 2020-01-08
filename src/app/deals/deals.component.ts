import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-deals",
  templateUrl: "./deals.component.html",
  styleUrls: ["./deals.component.css"]
})
export class DealsComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  dealsForm: FormGroup;
  validationMessages = {
    fullName: {
      required: "User Name is required.",
      minlength: "User Name must be greater than 5 character",
      maxlength: "User Name must be less than 12 character"
    },
    PasswordGroup: { passwordmismatch: "passwords are mismatch" },
    PassWord: {
      required: "PassWord is required",
      minlength: "PassWord must be greater than 5 character"
    },
    CPassWord: {
      required: "Conform PassWord is required",
      minlength: "PassWord must be greater than 5 character"
    },

    email: { required: "Email is required" },
    DOB: { required: "Date of Birth is required." }
  };
  formErrors = {
    fullName: "",
    PassWord: "",
    PasswordGroup: "",
    CPassWord: "",
    DOB: "",
    email: ""
  };
  ngOnInit() {
    this.dealsForm = this.fb.group({
      fullName: [
        "",
        [Validators.required, Validators.minLength(5), Validators.max(12)]
      ],
      DOB: ["", [Validators.required]],
      email: ["", [Validators.required]],
      PasswordGroup: this.fb.group(
        {
          PassWord: ["", [Validators.required, Validators.minLength(5)]],
          CPassWord: ["", [Validators.required, Validators.minLength(5)]]
        },
        { validators: passwordmismatch }
      )
    });
    this.dealsForm.valueChanges.subscribe(data => {
      this.logValidationErrors(this.dealsForm);
    });
  }

  logValidationErrors(group: FormGroup = this.dealsForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
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
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }
  onSubmit(): void {
    console.log(this.dealsForm.value);
    console.log(this.dealsForm.touched);
    console.log(this.dealsForm.controls.email.value);
    console.log(this.dealsForm.controls.email.touched);
    console.log(this.dealsForm.controls.fullName.value);
    console.log(this.dealsForm.controls.fullName.touched);
    console.log(this.dealsForm.controls.DOB.value);
    console.log(this.dealsForm.controls.DOB.touched);
    console.log(this.dealsForm.controls.PassWord.value);
    console.log(this.dealsForm.controls.PassWord.touched);
    console.log(this.dealsForm.controls.CPassWord.value);
    console.log(this.dealsForm.controls.CPassWord.touched);
  }
}
function passwordmismatch(
  group: AbstractControl
): { [key: string]: any } | null {
  const passwordControl = group.get("PassWord");
  const CpasswordControl = group.get("CPassWord");
  if (
    passwordControl.value === CpasswordControl.value ||
    CpasswordControl.pristine
  ) {
    return null;
  } else {
    return { passwordmismatch: true };
  }
}
