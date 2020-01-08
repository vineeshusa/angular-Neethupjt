import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  save = function() {
    alert("saved");
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      FullName: [
        "",
        [Validators.required, Validators.minLength(3), Validators.maxLength(12)]
      ],
      email: ["", Validators.required],
      DOB: ["", Validators.required],
      PassWord: ["", Validators.required],
      CPassWord: ["", Validators.required]
    });
  }
  onSubmit(): void {
    console.log(this.registrationForm.value);
  }
}
