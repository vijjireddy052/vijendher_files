<template>
  <div>
    <OverlayPanel
      ref="op"
      appendTo="body"
      :showCloseIcon="true"
      style="width: 550px"
      :breakpoints="{ '960px': '75vw' }"
    >
      <!-- <DataTable
        :value="data"
        selectionMode="single"
        :paginator="true"
        :rows="5"
        responsiveLayout="scroll"
        v-model:selection="selectedEmployee"
        @rowSelect="onEmployeeSelect"
      >
        <Column header="Image" style="width: 25%">
          <template #body="slotProps">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAADfCAMAAADcKv+WAAAAk1BMVEVPXXP39/f///9GUGL7+/pJWG8+T2hDU2tNW3L6+vpHVm5OXHM8TWdAUWlKVmo7TGa8wMfv8PE+SVxWY3g1QVZAS17p6uzN0NWqr7gwPVNMWW3CxsyIkJ18hZRweovi5OaRmKTX2t6coq1kcINteIl3gZGkqrRdaX2OlaJyeYWxtr7Iy9HR1NhgaHZ7gY0uQl9VXm5XafdQAAAOqElEQVR4nO2dCXPiOBOGbfmUwWBzGAjmMiEJhuTL//91nwxkAsay1a022UrlrdqarZ2dgSd96WhJhvnrZfz0F2hff4i/QX+Iv0F/iL9Bf4iE4ja3bX6S+NXmD/vg9hEFEWPMTFabwzyKcqEomh82q8QU/1mwtv4F2kQU1mI8mURZ+mwEnht6VwpdL3C2aRYdBardqk3bQuSc8dU8WxphKFh8o1K+E3hhaCyz+Yqz1jBbQRTG2+QLo+sFErYSqTCxscg3NmvFa+kROYvnqeF6jgrdt5zA9dN5zOhtSYzIWZIv+1C8f5hef5kn1JSUiDaLo6XrKTmnTL7nLqOY1GPpELm9eQuw9rulDNKNTQdJhWib0dYl4DvLcbe5SQVJgigyTOboOWhZvudkRLmHAFGkmHU3oOQ7K+iuSVKPPiJL3ug89FaOmybsxxHtOAtbAjxBhutYNyb1EG0+dVpw0WsFwZTreasOImeHodcuYCFveNAKSQ1Eluxc0iwqk+/udEISjcjtaZtBeCvHneInIlhEttp6nUcRGkbH266whsQhcpa3VShk8t0cGZEoRB7v3Aea8KJwiasfGEQ2cR5swrMcZ4JxVgQie+n+BGChboZgBCNyc/eAWiiTt4vBAQlFtFfDH3HSLznDFTQggYhsojNn8p0gKFYYA0e2Jqfwd3jQgIQhsryPpvNcd5tmeRRF+XS9GPZdz8Fl5X4OYwQhohNN4A7f5gm7Ft/kOw83Puq+gBghiGztYr6RHxrZhlWJHxYhJne5awgjANFOQwyguz1U8p0VT30EpJcCco46IlsgvovvPlcb8Eo5AtJbqDMqI6IIveGkCbDQSx8ck95C2VdVEe0UTuiLvKCmeAmOcnVGRUT2BicMhitFwsJbwbNr702RUQ2RZfBM46bqgEKrIXQRKFQcsCohsinYjzqiQMPEl1BHcadKjCqI9hxe8ft1lUIicFHqzlXyqgKivemCR1puY6moEnho0d8oMDYj8tgHj5lDFCEDh7zvK8ytFBC30KLVcY84QuGrwHh0ngkQEeWiP8cSMrYE/jwVSkcToh2BU42rWvArNQRGRTdqCscGRHsFXmpzFjqELAGmnI7btAzQhPgKTTV+R4uQsTmQ0X/VQmRrcCDiysW1Umg4NsweaxHtIzgQvUyXkHFoBu8ea+1Yb0UD7KZDbUKEqzZA1PweW4O3R7voingtaOUIal21BpHD3VQzm35pBV3n6x5rRgB1iOBsavST5u+vImjG8V9RiGwKzqYObIooF7Q4Gt5UnnHkiDF8RZHKiHAzdtwYjgj+FLJILLSC/nyDVJpxZIhikgglJKj633qG5oGudOooQwQn7iLm6QjZHJoInKXMjBJEPoFHogddrakTB5dkdyLJqhJEewvfHQtNQkT2BmX0txJPrUa0D3AjOjtKQnYEfwP3UM1YjcgQRvQiUkQGrsr+tjoaKxExkWh0Y1rEBTjfSaKxEhGesk8/Q1pFcDM+V5qxCpFvEEYMMmLEFaYwV5mxChExsBH5VGmbDSJExqsc4lQhxpgd/T5xKDK2g/+gK0eqFYj2FNMoTDHdv1UG/xpB1YSjApFDlzILEQ7BvwQewxXrKhXBeI/I4UVXKNBaH64UJum5FdP/e0RUsiEv/EIxokGkKuHcI8aolv2QZF3qVgGiu8q5Tzh3iDYiBIRcsgn/tzB9ct79ruodImLgVKhLOs04CzFQLtJeI2KM62r/Hz0hZhgp8t6dp5YRkX7anbaAiKj9VZ5aRsTl04Bw1eZbMapA3+XUMiJ8QcGgXZe6VoLxKKdcGUuINqbeOut2CBlitbpiulFGxIxPuy0UjLM4ZlZXHqeWENnyPzAZvhLm65RXG8uxiPFTqp2MCq0Ryc+tjUX7iBkXZu0hIiZUYihu1yFiQpF8SeMaEWHFcjDeIqJGb85be4iYKl0ew5WsiCm2Ir5bE3wXt5gX11kRvHV5ktcaYYw6+dKN5Yh8gjmmYPRbGtwwFqG+T3g79b9BtHPUdNhrbXSzx32fvAYR3oVSqGe1RJjMnjDfx1nbUkTcDM14GtEv3JyUDlCIpYX/21gcYv5Gwx9/tkKYjCzcGcCh3FExa15CHasdM36MLdT3MbxYhsjBfRIX9axxC4THmdXDfR93xWWIuJohgtEatJBULctChWKxhSRDtOFbehdZ1ox8HXU9sJB+ang3zdQ3iKj9mkI9yxoTrzIKN7V6yPsRbgfiN4iYqctZAnFPiyjcFGtEMfeRIr6hz7MLM45Iw3EzQkeiQHyTISIXwk8SP/MZ5VqqRiSWp1M3iIiVkos6TwUj4Lxik8YaRiwt39wgYjYRviRclbByTEbYmnhC3EoRMRPQfxJmHJEh7rEDmzPiazuIvkU3jotHOoR1iJhljW89WeN3IsSXgR7isCVEEY4zovn/CF31W0Y0euMPEsJIz0/rELVi0ShclaZufI410qnRXroxiokjiRnnI42a2ICoUxdP6lkjAjN+alUMo7Yu4kc3X6IYjUdaZf+EKB/daIxRL6JIqhpTjIvkY1SNmcaXfEt7qepF24g1Mw2N+eI/iSGO3lmGWGcW9YUony+iZ/3fEjOOkdb8/2Os7ad1s3702s2VLL3CcZjpG7Fm7Qa9AnctYcYZ/uoCLmbCupFYtwKHXke9UTFxRDdRfwhE/Ztz5euoZkxy26KFn3HkIwoj1qyGY/c0SsIvVa1G+jWxUM2eBnJnqiwLGY7cGpMYsW5nCrm/WNZpqQoxyHkf0xixbn8RuUt8J+Gq1gDcNVakGoJcU79LTFI1ConvOraAaXVdBCKBm9bv9WNOgVfKhzOeCCnctL5jA9d3U6UiHMcQX03pCOv7bgimUxcV4QjIOfsTofbI7aSG7imCgfhFBeNIFfFzQEdoBHltmx+mk1GiwoqqRjwRkqQao2grrkNE9aPKZI2fVRE/aGr+WfX9qBTLN98aKO/G6S/XfKupq5gwGCGnNuMZGWFjbzjqGLFEkIP+ezrnaerwx53TkHwWoIkDdWayWk3nNJCnbaoEa/zXXqX+UvNpG+SZqQp1QXMN+D1XEjWfmcKefLtTADzaQDWuaj75RjWG830OQzRpkoDK+UUiT4U3U0+wLyDcSOUUKvIscUldxJL4lCIcnTseshPht3IzOCHiquIKQqUT4bhz/TdSvvW9pEz7k9XO9eNuZ7iS30X3puSavlqeDcsQNcepgaOxw3gMtKJE9Y4N3E0pX3J3WhtTJvzBgusPV7wpRSfhBIHGbdNnzT20E6nfd4OebgS4TFpW5iIh1W8twi38+56XETVPm5mHeevpbjJcgwi/QcwPipeEaQBPkPkQ/jQg5AYxYAeO4HudErbbnrVZOzBK0D1wkNv8HK+/pec7a7IO3ED5hw27zU/1TkYndBcR+b1a19pkr321uATeySiisbE2Cvc01uQ3o1UoyZeuwvPqXeDNmk33oxbh99KSe1bInC+CsP6JOPD9qPW33BbppbVLJyTih7S2ksBvuRVDHGn9DbLH2e+GMnqVZkHEXcU1e41eq/mlXhvJzx1147SYcEhWOPxX4LIMoWSNiLh7w+W3vzvbn2KUPUJT+6YG6g7/n2KUPu6DvcO/5iUGZ/gT8Sh9Shf9EoMpfU/jyRoPHp5Uzc+xZBvZH9ZD1P1m9asoHcvC9kdpaDMYy/bKtV5FYVmlb5wZs0cS5rPTh1YdwvEaXvBreKFIklVPHzd6f1hAmueOjsqt5Nq3NBQQJe9M+acPHI8e5KyT8UBKWGo+hSNKXwuzzs768YDqwdOzk1YTar8WJn9q6vypg0FLN4h8KxqcTVidapoemVJBNPlz9aCpZ10istXysXo/R6GEkOTlPvn7ixfG8SxtLe3E6Wx8Iaz8CkTvL8pf0Xy6fPpglLUSkmY2uviorCuH6BVN+VuonUtAtgN5BSjrjiN7C7V4w142d+x9Q65J3TVJvwFlbUeu2qv2Soh17xJfQX6Q3SQ22c/+AUobHEnfJa59LvTp33cZzz4pVsTj6dNo/O8vlZ6bJn5duljKkTF2vg0pxjujD8SDxFeyo2sD1jT/kb8R3vDS+zdkQZliV1fN+cfsyoBWT77i1sJL7w2M/hWkiMrRRwRehFxN96Nrvtr2TW+hkkuhiKZd+8D1DWRhy8/1XDnHJlFqzQbXfHUWFISpOiEE0WzqGrmBPBnz82N6bOBMDtneunHPJguKatE8MEUimuylYafjySppPBjNxu/pdL5JSmMDc3WMXj7eB7PRYFz+Uw198N0XCCEMUYwBmrq4/F75+xacwqCj2cz6fN/vP/b7/fvnYDabjQTcHZ1Cj3hfreIjEU12bN4Je6qg/IK9SPo/9BoPMvjeBEYIRTTt1bB5H6xTQ1kjlf5wZ9j0mLQ2osnNndpZDhhms/lO8nZm8+xJF1Eh6QAxe4p4BjjRoBFNNnEgfQZPPRloD0An5ATQMEQjmjzeQR6A75z/eXoSsGeJf/X//Zaq3J3CFJ8K0eRiBoloIut0Oudf4H/UcMTsEEWIRBTOunqmOgqgoo63XWGcVAfR5HYeUh3paJQTTm2cCXUQRYlMdi7hITK5fHeXYE2ohygicjJ8gLd6wwMyCvURhSH51CE8KlelIJhy6HiGElFAxlmbIemE61gPUB9R5NbkDVNAlADdN50gJEMUIZmsuy24a9BdJ1pBSIdYQMaZg+kDlsv3nCymACRCFLLNaItt6b6XU/Qo68bgl6gQi7HA5i1QaKpslO8F6QZf6e9Ehygsycxop9I6WsvnLqOYUVmwECWiWVDG0bKPpXS8/jInSTHXIkY0T7lnnhpgYzqBa6RzogxzI3pEs7AlX+ULo+up9a77gecOF/mKk/rnP7WCKMQ548k8Wxph6AWOhNR3Ai8MjWU2L/Do7XdWW4iFuC3MmRyjLH3uCEOF3pVCV5h4m2bRMRF0reEVahPxLJvbxeJ3stoc5lGUC0XR/LBZJcVWpK05xFZR+4hf4gLH5ieJX1u1260eh/hj+kP8DfpD/A36Q/wN+kP8Dfo/V/VJyv2Rsp8AAAAASUVORK5CYII="
              :alt="slotProps.data.image"
              class="product-image"
              width="60"
            />
          </template>
        </Column>
        <Column field="Name" header="Name" style="width: 25%"></Column>
        <Column field="price" header="Price">
                <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
                </template>
            </Column>
        <Column field="rating" header="Rating" style="width: 50%">
          <template #body="slotProps">
            <Rating
              :modelValue="slotProps.data.rating"
              :readonly="true"
              :cancel="false"
            />
          </template>
        </Column>
      </DataTable> -->
      <Panel header="Core Employee">
        <ScrollPanel style="width: 100%; height: 50vh">
          <Accordion>
            <AccordionTab
              v-for="data in dataList"
              :key="data.image"
              :paginator="true"
              :rows="5"
            >
              <template #header style="align-items: center">
                <div style="width: 25%">
                  <img
                    src="data:image/png;base64,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"
                    :alt="data.image"
                    class="product-image"
                    width="40"
                  />
                </div>
                <div style="width: 25%">{{ data.Name }}</div>
                <Rating
                  :modelValue="data.rating"
                  :readonly="true"
                  :cancel="false"
                  style="width: 50%"
                />
              </template>
              <div class="grid align-items-center">
                <div style="width: 15%">
                  <img
                    src="data:image/png;base64,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"
                    :alt="data.image"
                    class="product-image"
                    width="60"
                  />
                </div>
                <div class="ml-3" style="width: 35%">
                  <h4>Name : {{ data.Name }}</h4>
                  <h4>JobRoll: Developer</h4>
                  <h4>year: 2021-22</h4>
                </div>
                <div style="width: 40%">
                  <h4>performance Rating</h4>
                  <Rating :modelValue="data.rating" :readonly="true" :cancel="false" />
                  <h4>Potential Rating</h4>
                  <Rating :modelValue="data.rating" :readonly="true" :cancel="false" />
                </div>
              </div>
            </AccordionTab>
          </Accordion>
        </ScrollPanel>
      </Panel>
    </OverlayPanel>
    <p
      class="origin-bottom-left rotate-90 text-white shadow-5 p-1 font-bold w-9 -mb-4 bg-orange-300"
    >
      &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Perfomance
      Assesment
    </p>
    <p class="origin-bottom-left rotate-90 shadow-2 font-bold w-8 ml-6">
      &emsp; &emsp; &emsp; High &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Moderate &emsp;
      &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;Low
    </p>
    <div class="grid" style="width: 44rem; height: 32rem; margin-left: 5rem">
      <div class="col-3 bg-orange-100 font-bold">
        1 of 3
        <Button
          :label="'employee(s)'"
          :badge="data1of3.length"
          @click="toggle(13)"
          aria-haspopup="true"
          aria-controls="overlay_panel"
          class="p-button-rounded p-button-secondary"
        />
      </div>
      <div class="col-3 bg-orange-100 font-bold">
        2 of 3
        <Button
          :label="'employee(s)'"
          :badge="data2of3.length"
          @click="toggle(23)"
          aria-haspopup="true"
          aria-controls="overlay_panel"
          class="p-button-rounded p-button-secondary"
        />
      </div>
      <div class="col-3 bg-orange-100 font-bold">
        Efficient employee
        <Button
          :label="'employee(s)'"
          :badge="data3of3.length"
          @click="toggle(33)"
          aria-haspopup="true"
          aria-controls="overlay_panel"
          class="p-button-rounded p-button-Primary"
        />
      </div>
      <div class="col-3 bg-orange-100 font-bold">
        1 of 2
        <Button
          :label="'employee(s)'"
          :badge="data1of2.length"
          @click="toggle(12)"
          aria-haspopup="true"
          aria-controls="overlay_panel"
          class="p-button-rounded p-button-secondary"
        />
      </div>
      <div class="col-3 bg-orange-100 font-bold">
        Core employee
        <Button
          :label="'employee(s)'"
          :badge="data2of2.length"
          @click="toggle(22)"
          aria-haspopup="true"
          aria-controls="overlay_panel"
          class="p-button-rounded p-button-success"
        />
      </div>
      <div class="col-3 bg-orange-100 font-bold">
        3 of 2
        <Button
          :label="'employee(s)'"
          :badge="data3of2.length"
          @click="toggle(32)"
          aria-haspopup="true"
          aria-controls="overlay_panel"
          class="p-button-rounded p-button-secondary"
        />
      </div>
      <div class="col-3 bg-orange-100 font-bold">
        Under Performer
        <Button
          :label="'employee(s)'"
          :badge="data1of1.length"
          @click="toggle(11)"
          aria-haspopup="true"
          aria-controls="overlay_panel"
          class="p-button-rounded p-button-danger"
        />
      </div>
      <div class="col-3 bg-orange-100 font-bold">
        2 of 1
        <Button
          :label="'employee(s)'"
          :badge="data2of1.length"
          @click="toggle(21)"
          aria-haspopup="true"
          aria-controls="overlay_panel"
          class="p-button-rounded p-button-secondary"
        />
      </div>
      <div class="col-3 bg-orange-100 font-bold">
        3 of 1
        <Button
          :label="'employee(s)'"
          :badge="data3of1.length"
          @click="toggle(31)"
          aria-haspopup="true"
          aria-controls="overlay_panel"
          class="p-button-rounded p-button-secondary"
        />
      </div>
    </div>
  </div>
  <p class="origin-bottom shadow-5 font-bold w-8 ml-8 mt-2">
    &emsp; &emsp; &emsp; Low &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; Moderate
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; High &emsp;
  </p>
  <p class="origin-bottom text-white shadow-5 p-1 font-bold w-9 bg-orange-300 ml-6 mt-3">
    &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Potential
    Assesment
  </p>
</template>
<script setup>
import { ref, onMounted, defineProps, computed, defineEmits } from "vue";
import OverlayPanel from "primevue/overlaypanel";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Rating from "primevue/rating";
import Tooltip from "primevue/tooltip";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Panel from "primevue/panel";
import ScrollPanel from "primevue/scrollpanel";

const op = ref();
const dataList = ref([]);
const selectedEmployee = ref();
const data1of3 = ref([
  { Key: 1, Name: "Vengal", rating: 5 },
  { Key: 2, Name: "Murali", rating: 4 },
  { Key: 3, Name: "Narender", rating: 4 },
  { Key: 4, Name: "Anil", rating: 3.5 },
  { Key: 5, Name: "Suresh", rating: 4 },
  { Key: 6, Name: "Vishal", rating: 4 },
  { Key: 7, Name: "Shireesha", rating: 3 },
  { Key: 8, Name: "Padma", rating: 2 },
  { Key: 9, Name: "Kshitesh", rating: 4 },
  { Key: 10, Name: "Vijendher", rating: 5 },
  { Key: 11, Name: "Jegadeesh", rating: 3 },
]);
const data2of3 = ref([
  { Key: 1, Name: "Kshitesh", rating: 4 },
  { Key: 2, Name: "Vijendher", rating: 2 },
  { Key: 3, Name: "Jegadeesh", rating: 5 },
  { Key: 4, Name: "Basha", rating: 2 },
  { Key: 5, Name: "Naveen", rating: 4 },
  { Key: 6, Name: "Shireesha", rating: 2 },
]);
const data3of3 = ref([
  { Key: 3, Name: "Vengal", rating: 4 },
  { Key: 4, Name: "Murali", rating: 2 },
  { Key: 5, Name: "Narender", rating: 4 },
]);
const data1of2 = ref([
  { Key: 7, Name: "REDDY", rating: 1 },
  { Key: 8, Name: "VIJEN", rating: 4 },
  { Key: 9, Name: "VIJJI", rating: 5 },
  { Key: 10, Name: "VIJEN", rating: 2 },
]);
const data2of2 = ref([
  { Key: 5, Name: "vijed", rating: 4 },
  { Key: 6, Name: "VIJAY", rating: 2 },
  { Key: 7, Name: "REDDY", rating: 5 },
]);
const data3of2 = ref([
  { Key: 4, Name: "Reddy", rating: 2 },
  { Key: 5, Name: "vijed", rating: 4 },
  { Key: 6, Name: "VIJAY", rating: 2 },
  { Key: 7, Name: "REDDY", rating: 1 },
  { Key: 8, Name: "VIJEN", rating: 4 },
]);
const data1of1 = ref([
  { Key: 8, Name: "VIJEN", rating: 4 },
  { Key: 1, Name: "vijay", rating: 4 },
  { Key: 2, Name: "vijen", rating: 3 },
  { Key: 9, Name: "VIJJI", rating: 5 },
  { Key: 10, Name: "VIJEN", rating: 2 },
]);
const data2of1 = ref([
  { Key: 5, Name: "vijed", rating: 4 },
  { Key: 6, Name: "VIJAY", rating: 2 },
  { Key: 7, Name: "REDDY", rating: 5 },
]);
const data3of1 = ref([
  { Key: 3, Name: "vijji", rating: 3 },
  { Key: 4, Name: "Reddy", rating: 2 },
  { Key: 1, Name: "vijay", rating: 4 },
  { Key: 2, Name: "vijen", rating: 3 },
  { Key: 9, Name: "VIJJI", rating: 5 },
  { Key: 8, Name: "VIJEN", rating: 4 },
]);
function toggle(index) {
  dataList.value = [];

  switch (index) {
    case 13:
      dataList.value = data1of3.value;
      break;
    case 23:
      dataList.value = data2of3.value;
      break;
    case 33:
      dataList.value = data3of3.value;
      break;
    case 12:
      dataList.value = data1of2.value;
      break;
    case 22:
      dataList.value = data2of2.value;
      break;
    case 32:
      dataList.value = data3of2.value;
      break;
    case 11:
      dataList.value = data1of1.value;
      break;
    case 21:
      dataList.value = data2of1.value;
      break;
    case 31:
      dataList.value = data3of1.value;
      break;
  }
  op.value.toggle(event);
}
const onEmployeeSelect = (event) => {
  dataList.value = [];
};
</script>
