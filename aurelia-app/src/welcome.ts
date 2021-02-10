import { inject, NewInstance } from 'aurelia-dependency-injection';
import { bindable } from 'aurelia-framework';
import { ValidationRules,ValidationController} from 'aurelia-validation';


export interface IHired {
  key: number;
  value: string;
}
@inject(NewInstance.of(ValidationController))


export class Welcome {
  public heading = 'Applicant Details!';
  public firstName = '';
  public familyname = '';
  public address = '';
  public country = '';
  public email = '';
  public age = '';
  public hired = '';
  controller = null;
  public isValid = false;

  public isHired: IHired[]=[
    {
      key: 0, value: "True"
    },
    {
      key: 1, value: "False"
    }
  ]

  selectedValue: IHired = null;

  constructor(controller) {
    this.controller = controller;
  }
  // Getters can't be directly observed, so they must be dirty checked.
  // However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.


  public submit() {
    
    this.controller.validate()
      .then((validateFields) => {
       //alert("pass");
      })

  }
}
ValidationRules
  .ensure("firstName").required().minLength(5)
  .ensure("familyname").required().minLength(5)
  .ensure("address").required().minLength(10)
  .ensure("email").required().email()
  .ensure("age").required().minLength(20).maxLength(60)
  .ensure("isHired").required()
  .on(Welcome);




