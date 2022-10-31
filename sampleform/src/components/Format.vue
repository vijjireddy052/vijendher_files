<script setup>
import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';



import { ref } from 'vue';

const rowspan = ref();
const colspan = ref();
const charectercasing = ref();
const textalignment = ref();

const charecter = ref([
    { name: 'None', ID: 'NA' },
    { name: 'Upper', ID: 'UP' },
    { name: 'Lower', ID: 'LW' },
    { name: 'Proper Sentence', ID: 'PS' },
]);
const alignment = ref([
    { name: 'Left', ID: 'LF' },
    { name: 'Center', ID: 'CT' },
    { name: 'Right', ID: 'RT' },
]);


</script>


<template>
    <div>
        <div>
            <label>Rowspan</label>
            <InputNumber id="integeronly" v-model="rowspan" />
        </div>
        <div>
            <label>Colspan</label>
            <InputNumber v-model="colspan" />
        </div>
        <div>
            <label>Charecter Casing</label>
            <Dropdown v-model="charectercasing" :options="charecter" optionLabel="name" placeholder="None" />
        </div>
        <div>
            <label>Text Alignment</label>
            <Dropdown v-model="textalignment" :options="alignment" optionLabel="name" placeholder="left" />
        </div>
    </div>
</template>