import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
   
  title = 'Show input form data';  
  isEmpty:String ="";
  addFormData = new FormGroup({
    firstname:new  FormControl(''),
    lastname: new FormControl(''),
    phonenumber:  new FormControl(''),  
  });
 
  storeFormValues : any =[] 
     SubmitForm( data:any) {  
      console.log(data, 'data')
      if((data.firstname ==""  || data.lastname == "" || data.phonenumber =="") || (data.firstname ==null || data.lastname == null || data.phonenumber ==null)){
          alert("any element can't be empty.")
          this.addFormData.reset()
       } else {
         this.storeFormValues= data?  [...this.storeFormValues , data]:  [...this.storeFormValues] 
         this.addFormData.reset()
       }
     
  }
    setReset() {
        this.storeFormValues=[]
        this.addFormData.reset()
    } 
}
