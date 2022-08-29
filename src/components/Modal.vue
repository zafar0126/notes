<template>
   <transition name="modal">
        <div class="modal" @click="cleanModal">
            <div class="modal__content" @click.stop>
                <h3 class="modal__title">{{id ? lang[lg].edit : lang[lg].add}} {{lang[lg].note}}</h3>
                <form action="" class="modal__form" @submit.prevent="send">
                    <input type="text" placeholder="Title" required class="modal__input" v-model="title">
                    <textarea class="modal__input modal__area" placeholder="Content" required v-model="text"></textarea>
                    <div class="modal__btns">
                        <a href="#" class="modal__cancel" @click.prevent="cleanModal">{{lang[lg].cancel}}</a>
                        <button class="modal__btn">{{id ? lang[lg].edit : lang[lg].add}}</button>
                    </div>
                </form>
            </div>
        </div>
   </transition>
</template>
<script setup>
    import {state, lang, editNote, addNote} from '../store';
    import {v4 as uuidv4} from 'uuid';
    import { computed } from '@vue/runtime-core';
    const title = computed({
        get: () => state.value.modalTitle,
        set: val => state.value.modalTitle = val
    });
    const text = computed({
        get: () => state.value.modalDescr,
        set: val => state.value.modalDescr = val
    });
    const id = computed({
        get: () => state.value.curID,
        set: val => state.value.curID = val
    });
    const lg = computed(() => state.value.curLang);
    function send(){
        const obj = {
            title: title.value,
            text: text.value,
            date: new Date().toLocaleDateString(),
            id: id.value || uuidv4()
        };
        if(id.value) editNote(id.value, obj)
        else addNote(obj);
        cleanModal();
    }
    function cleanModal(){
        title.value = '';
        text.value = '';
        id.value = null;
        state.value.showModal = false;
    }

</script>