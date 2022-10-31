<script setup>
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import Password from 'primevue/password';
import RadioButton from 'primevue/radiobutton';
import Checkbox from 'primevue/checkbox';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import { ref } from 'vue';

const userName = ref();
const firstName = ref();
const lastName = ref();
const age = ref();
const email_Id = ref();
const password =ref();
const confirmpassword = ref();
const gender = ref();
const certificates = ref();
const dateofbirth = ref();
const country = ref();
const index = ref();
const event = ref();
const forms = ref([{userName: "userName.value", firstName: "firstName.value", lastName: "lastName.value", age: 14, email_Id: "el_Id.value", password: "password.value", confirmpassword: "password.value", dateofbirth: "01/01/2000", gender:"male", certificates: "10th", country: "IND"}]);
const countries = ref([
    {name: 'India', code: 'IND'},
		{name: 'UnitedStates', code: 'USA'},
		{name: 'Russia', code: 'RUS'},
		{name: 'Australia', code: 'AST'},
		{name: 'UnitedKingdom', code: 'UK'}
]);

function saveForm(){
    forms.value.push({userName: userName.value, firstName: firstName.value, lastName: lastName.value, age: age.value, email_Id: email_Id.value, password: password.value, confirmpassword: confirmpassword.value, dateofbirth: dateofbirth.value, gender:gender.value, certificates: certificates.value, country: country.value});
    console.log(forms.value);
    reset();
}

function editForm(event) {
  event.value = event.data;
  index.value = event.index;
  userName.value = event.data.userName;
  firstName.value = event.data.firstName;
  lastName.value = event.data.lastName;
  age.value = event.data.age;
  email_Id.value = event.data.email_Id;
  password.value = event.data.password;
  confirmpassword.value = event.data.confirmpassword;
  gender.value = event.data.gender;
  certificates.value = event.data.certificates;
  country.value = event.data.country;
  dateofbirth.value=event.data.dateofbirth;

}

function deleteForm(){
  console.log(event.value)
   forms.value.splice((index.value), 1);
   reset();
}
function reset(){
  userName.value="";
  firstName.value="";
  lastName.value="";
  age.value=null;
  index.value=0;
  email_Id.value="";
  password.value="";
  confirmpassword.value="";
  gender.value=null;
  certificates.value=null;
  country.value=null;
  dateofbirth.value=null;
} 

</script>


<template>



	<div class="col-4">
    <Button class="pi pi-trash" @click="deleteForm" />
        <DataTable :value="forms" responsiveLayout="scroll" @row-click="editForm($event)">
            <Column field="userName" header="userName"></Column>
            <Column field="firstName" header="firstName"></Column>
            <Column field="lastName" header="lastName"></Column>
            <Column field="age" header="age"></Column>
            <Column field="email_Id" header="email_Id"></Column>
            <!-- <Column field="password" header="password"></Column>
            <Column field="confirmpassword" header="confirmpassword"></Column> -->
            <Column field="gender" header="gender"></Column>
            <Column field="certificates" header="certificates"></Column>
            <Column field="dateofbirth" header="dateofbirth"></Column>
            <Column field="country" header="country"></Column>
        </DataTable>
	</div>
<h1>Registration Form</h1>

  <div class="p-grid">  
    <div>
      <h5>Basic</h5>
      <AutoComplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" field="name" />
    </div>
    <div class="col-2" >
      <label>UserName</label>
      <InputText type="text" v-model="userName" />
    </div>
 
    <div class="col-4" >
      <label>FirstName</label>
      <InputText type="text" v-model="firstName" />
    </div>

    <div class="col-4">
      <label>LastName</label>
      <InputText type="text" v-model="lastName" />
    </div> 
  

    <div class="col-4">
      <label for="integeronly">Age</label>
      <InputNumber id="integeronly" v-model="age" />
    </div>


    <div class="col-4">
      <label>Email_ID</label>
      <InputText type="text" v-model="email_Id" />
    </div> 
  
    <div class="col-4">
      <label>Password</label>
      <Password v-model="password" />
    </div> 

    <div class="col-4">
      <label>ConfirmPassword</label>
      <Password v-model="confirmpassword" />
    </div> 

    <div>
      <label>Gender</label>
      <RadioButton name="gender" value="male" v-model="gender" />Male
      <RadioButton name="gender" value="female" v-model="gender" />Female
    </div>

    <div>
      <Checkbox name="certificates" value="10th" v-model="certificates" />10TH
      <Checkbox name="certificates" value="Inter" v-model="certificates" />INTER
      <Checkbox name="certificates" value="degree" v-model="certificates" />DEREE/B.TECH
      <Checkbox name="certificates" value="masters" v-model="certificates" />MASTERS DEGREE
    </div>

    <div>
      <label>DATE_OF_BIRTH</label>
      <Calendar v-model="dateofbirth" dateFormat="dd/mm/yy" />
    </div>

    <div>
      <Dropdown v-model="country" :options="countries" optionValue="code" optionLabel="name" placeholder="Select a country" />
    </div>

    <div>
        <Button label="Submit" @click="saveForm"/>
    </div>
    
 
 </div>
 
  
</template>