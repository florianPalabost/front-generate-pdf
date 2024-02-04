<script setup lang="ts">
    import { ToastService } from '@/services/ToastService';
    import { PdfForm } from '../models/Pdf';
    import { usePdfStore } from '../store/pdf';
    import { PdfService } from '../services/PdfService';
    import { ref } from 'vue';

    const props = defineProps<{ toggleDialog: () => void }>();
    const newPdf = ref(new PdfForm());
    const store = usePdfStore();

    const validate = (): boolean => {
        return PdfService.validate(newPdf.value);
    };

    const handleSave = async (): Promise<void> => {
        if (!validate()) {
            ToastService.getInstance().error('Please fill correctly all the fields');
            return;
        }

        props.toggleDialog();
        await store.createPdf(newPdf.value);
    };
</script>
<template>
    <div class="bg-white p-8">
        <h1 class="text-2xl mb-4">Add</h1>

        <v-text-field
            v-model="newPdf.id"
            label="id*"
            required
            type="string"
        ></v-text-field>
        <v-text-field
            v-model="newPdf.name"
            label="name*"
            required
            type="string"
        ></v-text-field>
        <v-text-field
            v-model="newPdf.description"
            label="description*"
            required
            type="string"
        ></v-text-field>
        <v-text-field
            v-model="newPdf.createdAt"
            label="createdAt*"
            required
            type="Date"
        ></v-text-field>
        

        <div class="flex flex-row gap-x-8 justify-center">
            <div class="">
                <v-btn color="primary" block @click="props.toggleDialog">Close Dialog</v-btn>
            </div>
            <div class="">
                <v-btn color="primary" block @click="handleSave">Save</v-btn>
            </div>
        </div>
    </div>
</template>
