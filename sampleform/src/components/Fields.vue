<script setup>

import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';


import { ref } from 'vue';
const groupname = ref();
const caption = ref();
const name = ref();
const apifield = ref();
const datatype = ref();
const controltype = ref();
const minsize = ref(0);
const maxsize = ref(0);
const defaultvalue = ref();
// const dataTypeCheck = ref(false);
const controltypes = ref([]);
const displaytype = ref();
const tooltiptext = ref();
const bannertext = ref();
const behaviourtype = ref();

const groupnames = ref([
    { name: 'Leave Application Header', id: 'LAH' },
]);
const datatypes = ref([
    { name: 'Text', id: '1' },
    { name: 'Number', id: '2' },
    { name: 'Boolean', id: '3' },
    { name: 'Date', id: '4' },
    { name: 'Time', id: '5' },
    { name: 'Fraction', id: '6' },
    { name: 'Picture', id: '7' },
    { name: 'String List', id: '8' },
    { name: 'Number List', id: '9' },
    { name: 'Document Viewer', id: '10' },
    { name: 'Master', id: '11' },
    { name: 'Big Number', id: '12' },
    { name: 'External Table', id: '13' },
    { name: 'Small Number', id: '14' },
    { name: 'Tiny Number', id: '15' },
    { name: 'Gregorian', id: '16' },
    { name: 'Hijri', id: '17' },
    { name: 'InfoField', id: '18' },
]);

const TextTypes = ref([
    { name: 'Text Box', id: '1' },
    { name: 'Phone', id: '2' },
    { name: 'Email', id: '3' },
    { name: 'Website', id: '4' },
    { name: 'Text Area', id: '5' }
]);

const NumberTypes = ref([
    { name: 'Text Box', id: '1' },
    { name: 'Spinner', id: '2' },
]);
const BooleanTypes = ref([
    { name: 'Check Box', id: '1' },
]);
const DatePicker = ref([
    { name: 'Date Picker', id: '1' },
]);
const TimePicker = ref([
    { name: 'Time Picker', id: '1' },
]);
const Fraction = ref([
    { name: 'Text Box', id: '1' },
]);
const Picture = ref([
    { name: 'Picture Box', id: '1' },
]);
const StringList = ref([
    { name: 'Option Control', id: '1' },
]);
const NumberList = ref([
    { name: 'Option Control', id: '1' },
    { name: 'Radio Button', id: '2' },
]);
const DocumentViewer = ref([
    { name: 'Document Control', id: '1' },
]);
const Master = ref([
    { name: 'Option Control', id: '1' },
    { name: 'Check Combobox', id: '2' },
]);
const BigNumber = ref([
    { name: 'Text Box', id: '1' },
    { name: 'Spinner', id: '2' },
]);
const ExternalTable = ref([
    { name: 'Option Control', id: '1' },
    { name: 'Check Combobox', id: '2' },
]);
const SmallerNumber = ref([
    { name: 'Text Box', id: '1' },
]);
const TinyNumber = ref([
    { name: 'Text Box', id: '1' },
]);
const Gregorian = ref([
    { name: 'Date Picker', id: '1' },
]);
const Hijri = ref([
    { name: 'Date Picker', id: '1' },
]);
const InfoField = ref([
    { name: 'Picture Box', id: '1' },
]);
const BehaviourTypes = ref([
    { name: 'None', id: '1' },
    { name: 'Password Field', id: '2' },
    { name: 'Multi-Line', id: '3' },
    { name: 'Incremental', id: '4' }
]);



const displaytypes = ref([
    { name: 'None', id: '1' },
    { name: 'Read Only', id: '2' },
    { name: 'Mandatory', id: '3' },
    { name: 'Hidden', id: '4' },
    { name: 'Info Field', id: '5' }
]);

const onChangeDataType = function (event) {
    controltype.value = null;
    switch (Number(datatype.value)) {
        case 1: {
            controltypes.value = TextTypes.value;
        } break;
        case 2: {
            controltypes.value = NumberTypes.value;
        } break;
        case 3: {
            controltypes.value = BooleanTypes.value;
        } break;
        case 4:{
            controltypes.value = DatePicker.value;
            }
        case 5: {
            controltypes.value = TimePicker.value;
        } break;
        case 6: {
            controltypes.value = Fraction.value;
        } break;
        case 7: {
            controltypes.value = Picture.value;
        } break;
        case 8:{
            controltypes.value = StringList.value;
            }
        case 9: {
            controltypes.value = NumberList.value;
        } break;
        case 10: {
            controltypes.value = DocumentViewer.value;
        } break;
        case 11: {
            controltypes.value = Master.value;
        } break;
        case 12:{
            controltypes.value = BigNumber.value;
            }
        case 13: {
            controltypes.value = ExternalTable.value;
        } break;
        case 14: {
            controltypes.value = SmallerNumber.value;
        } break;
        case 15: {
            controltypes.value = TinyNumber.value;
        } break;
        case 16:{
            controltypes.value = Gregorian.value;
            }
        case 17: {
            controltypes.value = Hijri.value;
        } break;
        case 18:{
            controltypes.value = InfoField.value;
            }
    }
}

function onChangeControlType(event) {

}

</script>

<template>
    <div class="card">
        <h1>Details</h1>
        <hr>

        <div class="p-fluid p-formgrid p-grid layoutGrid">

            <div class="p-col-5 p-field p-col p-float-label">
                <label>Group Name</label>
                <Dropdown v-model="groupname" :options="groupnames" optionLabel="name"
                    placeholder="Select a Groupname" />
            </div>

            <div>
                <label>Caption</label>
                <InputText type="text" v-model="caption" />
            </div>
            <div>
                <label>Name</label>
                <InputText type="text" v-model="name" />
            </div>
            <div>
                <label>Api Field</label>
                <InputText type="text" v-model="apifield" />
            </div>
            <div>
                <label>Data Type</label>
                <Dropdown v-model="datatype" :options="datatypes" optionLabel="name" optionValue="id"
                    placeholder="Select a Datatype" @change="onChangeDataType($event)" />
            </div>
            <div>
                <label>Control Type</label>
                <Dropdown v-model="controltype" :options="controltypes" optionLabel="name" optionValue="id"
                    placeholder="Select a Controltype" @change="onChangeControlType($event)" />
            </div>
            <div>
                <label v-if="datatype != '2'">Min.Size</label>
                <label v-if="datatype == '2'">Minimum Value</label>
                <InputNumber v-model="minsize" />
            </div>
            <div>
                <label v-if="datatype != '2'">Max.Size</label>
                <label v-if="datatype == '2'">Maximum Value</label>
                <InputNumber v-model="maxsize" />
            </div>
            <div>
                <label>Default Value</label>
                <InputNumber v-model="defaultvalue" />
            </div>
            <div>
                <label>Display Type</label>
                <Dropdown v-model="displaytype" :options="displaytypes" optionLabel="name" placeholder="None" />
            </div>
            <div>
                <label>Tooltip Text</label>
                <InputText type="text" v-model="tooltiptext" />
            </div>
            <div>
                <label>Banner Text</label>
                <InputText type="text" v-model="bannertext" />
            </div>
            <div v-if="controltype == '1' && datatype == '1'">
                <label>Behaviour</label>
                 <Dropdown v-model="behaviourtype" :options="BehaviourTypes" optionLabel="name" placeholder="Multi-Line" />
            </div>
        </div>
        <p></p>
        <div class="flex flex-wrap align-items-center justify-content-center card-container" v-if="datatype == '1'">
            <h1>Validation</h1>
            <hr>

            <div>
                <label>Regular Expression</label>
                <InputText type="text" v-model="regularexpression" />
            </div>
            <div>
                <label>Error Message</label>
                <InputText type="text" v-model="errormessage" />
            </div>
        </div>

    </div>

    <div>
        <Button label="Save" @click="handleClick($event)" />

        <Button label="Cancel" @click="handleClick($event)" />
    </div>
</template>