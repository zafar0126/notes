<template>
    <div class="notes__item">
        <h3 class="notes__name">{{note.title}}</h3>
        <span class="notes__date">{{note.date}}</span>
        <p class="notes__descr">
           {{note.text}}
        </p>
        <div class="notes__control">
            <a href="#" class="notes__edit" @click.prevent="edit(note)">
                <img src="../assets/img/edit.svg" alt="">
                {{lang[lg].change}}
            </a>
            <a href="#" class="notes__delete" @click.prevent="removeNote(note.id)">
                <img src="../assets/img/delete.svg" alt="">
                {{lang[lg].delete}}
            </a>
        </div>
    </div>
</template>
<script setup>
    import { computed } from '@vue/runtime-core';
    import {state, lang, removeNote} from '../store';
    const lg = computed(() => state.value.curLang);
    const props = defineProps({
        note: {
            type: Object,
            default: {}
        }
    });
    function edit(note) {
        state.value.modalTitle = note.title;
        state.value.modalDescr = note.text;
        state.value.curID = note.id;
        state.value.showModal = true;
    }
</script>