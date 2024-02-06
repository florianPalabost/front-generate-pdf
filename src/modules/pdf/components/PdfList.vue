<script setup lang="ts">
    import PdfItem from './PdfItem.vue';
    import PdfAdd from './PdfAdd.vue';
    import { usePdfStore } from '../store/pdf';
    import { ref } from 'vue';
    import { storeToRefs } from 'pinia';
    import { Pdf } from '../models/Pdf';
    import { ToastService } from '@/services/ToastService';

    const isModalAddVisible = ref(false);
    const store = usePdfStore();

    await store.fetchPdfs();
    const { pdfs } = storeToRefs(store);

    const toggleAdd = () => {
        isModalAddVisible.value = !isModalAddVisible.value;
    };
</script>
<template>
    <button
        @click="toggleAdd"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded align-bottom"
    >
        <v-icon icon="fas fa-plus" class="icon" />
    </button>
    <v-dialog v-model="isModalAddVisible" width="30em">
        <PdfAdd :toggleDialog="toggleAdd" />
    </v-dialog>

    <table id="pdf_list_table" class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
            <tr>
                <th>id</th>
                <th>name</th>
                <th>description</th>
                <th>createdAt</th>
                <th>Action(s)</th>
            </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
            <tr v-for="pdf in pdfs" :key="pdf.id" :class="pdf.id >= 0 ? 'bg-green-300' : 'bg-red-300'">
                <PdfItem :pdf="pdf" />
            </tr>
        </tbody>
    </table>
</template>
