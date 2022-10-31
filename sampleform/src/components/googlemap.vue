<script setup>

import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Textarea from 'primevue/textarea';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';


import { ref } from 'vue';
const name = ref();
const selectcalender = ref();
const designation = ref();
const remark = ref();
const latitude = ref(0);
const longitude = ref(0);
const radius = ref(0);


</script>

<template>
    <h1>General</h1>
    <hr>
    <div class="p-grid">

        <div class="p-col-6">
            <field-label>Name</field-label>
            <InputText type="text" v-model="name" />
        </div>
        <div class="p-col-6">
            <field-label>Date</field-label>
            <Calendar id="calendar" v-model="selectcalender" :showIcon="true" />
        </div>
        <div class="p-col-">
            <field-label>Designation</field-label>
            <Dropdown v-model="selectdesignation" :options="designation" optionp="designation" :editable="true"
                class="p-invalid" />
        </div>
        <div class="p-col-4">
            <field-label>Remark</field-label>
            <Textarea v-model="remark" rows="3" cols="20" />
        </div>
        <div class="">
            <field-label>Latitude</field-label>
            <InputNumber id="locale-user" v-model="latitude" mode="decimal" :minFractionDigits="0"/>
        </div>
        <div class="">
            <field-label>Longitude</field-label>
            <InputNumber id="locale-user" v-model="longitude" mode="decimal" :minFractionDigits="2" />
        </div>
        <div class="">
            <field-label>Radius(in Meters)</field-label>
            <InputNumber id="locale-user" v-model="radius" mode="decimal" :minFractionDigits="2" />
        </div>
        <div class="">
            <Button label="Refresh" />
        </div>
        

    </div>
</template>