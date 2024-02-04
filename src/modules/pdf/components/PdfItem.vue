<script setup lang="ts">
    import { ref } from 'vue';
    import { Pdf } from '../models/Pdf';
    import { usePdfStore } from '../store/pdf';
    import { DateHelper } from '@/utils/DateHelper';
    import PdfEdit from './PdfEdit.vue';

    const props = defineProps({
        pdf: {
            type: Pdf,
            required: true
        }
    });
    const store = usePdfStore();
    const isModalEditVisible = ref(false);

    const toggleEdit = () => {
        isModalEditVisible.value = !isModalEditVisible.value;
    };

    const handleDelete = async () => {
        if (props.pdf && confirm('Do you really want to delete this ?')) {
            await store.deletePdf(props.pdf.id);
        }
    };
</script>
<template>
    <td class="text-center" v-text="`${props['pdf']['id']}`"></td>
    <td class="text-center" v-text="`${props['pdf']['name']}`"></td>
    <td class="text-center" v-text="`${props['pdf']['description']}`"></td>
    <td class="text-center" v-text="`${props['pdf']['createdAt']}`"></td>
    <td>
        <div class="text-center space-x-5">
            <button
                @click="toggleEdit"
                class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-2 rounded w-9"
            >
                <v-icon icon="fa-solid fa-pen-to-square" class="icon" />
            </button>
            <button
                @click="handleDelete"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded w-9"
            >
                <v-icon icon="fa-solid fa-trash" class="icon" />
            </button>

            <v-dialog v-model="isModalEditVisible" width="30em">
                <PdfEdit :pdf="props.pdf" :toggleDialog="toggleEdit" />
            </v-dialog>
        </div>
    </td>
</template>
