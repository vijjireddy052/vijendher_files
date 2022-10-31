<script setup>
import { ref } from 'vue';

import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Card from 'primevue/card';

import MultiSelect from 'primevue/multiselect';




const leaves = ref();
const conditions = ref(null);
const selectedleaves = ref();
const multicheckbox = ref([
    { name: 'Load', id: 'NY' },
    { name: 'New Record', id: 'RM' },
    { name: 'Edit', id: 'LDN' },
    { name: 'Before Save', id: 'IST' },
    { name: 'On Enter', id: 'PRS' },
    { name: 'On Leave', id: 'LDN' },

]);

</script>


<template>
    <div>

        <Card class="hcm" style="width:fit-content; height:fit-content;" :scrollable="true" scrollHeight="80px"
            scrollDirection="both">
            <template #header>

            </template>
            <template #content>
                <div class="col-1">
                    <label>Name</label>
                    <InputText type="text" v-model="Name" />
                </div>
                <p>Apply On</p>
                <div class="checkbox">
                    <MultiSelect v-model="selectedleaves" :options="multicheckbox" optionLabel="name"
                        placeholder="Select fields" />

                    <!-- <Checkbox name="leaves" value="Load" v-model="leaves"/>Load
    <Checkbox name="leaves" value="New Record" v-model="leaves"/>New Record
    <Checkbox name="leaves" value="Edit" v-model="leaves"/>Edit
    <Checkbox name="leaves" value="Before Save" v-model="leaves"/>Before Save
    <Checkbox name="leaves" value="Before Delete" v-model="leaves"/>Before Delete
    <Checkbox name="leaves" value="On Enter" v-model="leaves"/>On Enter
    <Checkbox name="leaves" value="On Leave" v-model="leaves"/>On Leave -->

                </div>
                <Checkbox name="leaves" value="nocondition" v-model="leaves" />No Condition
                <div>
                    <TabView class="data">
                        <TabPanel header="IF">
                            <h2>Conditions</h2>
                            <hr>

                            <div class="card">
                                <DataTable :value="conditions" editMode="cell" @cell-edit-complete="onCellEditComplete"
                                    class="editable-cells-table" responsiveLayout="scroll">

                                    <Column field="openbrackets" header="Open Brackets"></Column>
                                    <Column field="fields" header="Fields"></Column>
                                    <Column field="operator" header="Operator"></Column>
                                    <Column field="comparewith" header="Compare With"></Column>
                                    <Column field="values" header="Values"></Column>
                                    <Column field="linkid" header="Link Id"></Column>
                                    <Column field="closebrackets" header="Close Brackets"></Column>
                                    <Column field="conjuction" header="Conjuction"></Column>

                                </DataTable>
                            </div>

                            <h2>Actions</h2>
                            <hr>
                            <TabView>
                                <TabPanel header="Properties">
                                    <DataTable :value="conditions" editMode="cell"
                                        @cell-edit-complete="onCellEditComplete" class="editable-cells-table"
                                        responsiveLayout="scroll">

                                        <Column field="fields" header="Fields"></Column>
                                        <Column field="displaytype" header="Display Type"></Column>
                                        <Column field="changevalueto" header="Change Value To"></Column>
                                        <Column field="value" header="Value"></Column>
                                        <Column field="caption" header="Caption"></Column>

                                    </DataTable>
                                </TabPanel>
                                <TabPanel header="Messaging">
                                    <div class="">
                                        <label>Error Message</label>
                                        <InputText type="text" v-model="Name" style="width: 25rem;" />
                                    </div>
                                    <div>
                                        <label>Message Type</label>
                                        <InputText type="text" v-model="Name" style="width: 25rem;" />
                                    </div>
                                </TabPanel>
                            </TabView>

                        </TabPanel>
                        <TabPanel header="ELSE">
                            <h2>Actions</h2>
                            <TabView class="elsepart" :scrollable="true" scrollHeight="80px">
                                <TabPanel header="Properties">
                                    <DataTable :value="conditions" editMode="cell"
                                        @cell-edit-complete="onCellEditComplete" class="editable-cells-table"
                                        responsiveLayout="scroll">

                                        <Column field="fields" header="Fields"></Column>
                                        <Column field="displaytype" header="Display Type"></Column>
                                        <Column field="changevalueto" header="Change Value To"></Column>
                                        <Column field="value" header="Value"></Column>
                                        <Column field="caption" header="Caption"></Column>

                                    </DataTable>
                                </TabPanel>
                                <TabPanel header="Messaging">

                                    <div class="">
                                        <label>Error Message</label>
                                        <InputText type="text" v-model="Name" style="width: 25rem;" />
                                    </div>
                                    <div>
                                        <label>Message Type</label>
                                        <InputText type="text" v-model="Name" style="width: 25rem;" />
                                    </div>

                                </TabPanel>
                            </TabView>

                        </TabPanel>
                    </TabView>
                </div>
                <div>

                </div>

            </template>
        </Card>



    </div>
</template>

