import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from'@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
clickedsign=function()
{
  alert("sign in")
  
}
  constructor(private fb:FormBuilder) {

   }
homeForm: FormGroup;

validationMessages={
  'userName':{'required':'User Name is required.',
  'minlength':'User Name must be greater than 5 character',
  'maxlength':'User Name must be less than 12 character'},
  'PassWord':{'required': 'PassWord is required',
  'minlength':'PassWord must be greater than 5 character'}
}
formErrors =
{'userName':'',
'PassWord':'',
};
  ngOnInit() {
    this.homeForm=this.fb.group({
      userName:['',[ Validators.required , Validators.minLength (5),Validators.maxLength(12)] ],
     PassWord: ['',Validators.required,Validators.minLength(5),Validators.maxLength(15)]
    });
    
    this.homeForm.valueChanges.subscribe((data)=>{this.logValidationErrors(this.homeForm)});
    }

    logValidationErrors (group:FormGroup = this.homeForm) : void
    {
     Object.keys(group.controls).forEach((key :string) => 
     {const abstractControl=group.get(key);
   if(abstractControl instanceof FormGroup)
   {this.logValidationErrors(abstractControl)}
   else
   {this.formErrors[key]=''
    if(abstractControl && ! abstractControl.valid && abstractControl.touched || abstractControl.dirty)
    {const Message=this.validationMessages[key];
      for (const errorkey in abstractControl.errors)
        {
        if(errorkey)
        {
       this.formErrors[key] += Message[errorkey]+';'
        }
      }
    }
   }
 });
 }
  
  
  onSubmit():void
  
  {
 console.log(this.homeForm.value);
console.log(this.homeForm.touched);
console.log(this.homeForm.controls.userName.value);
console.log(this.homeForm.controls.userName.touched);
console.log(this.homeForm.controls.PassWord.value);
console.log(this.homeForm.controls.PassWord.touched);


  }
}