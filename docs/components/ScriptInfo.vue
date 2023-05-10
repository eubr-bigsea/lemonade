<template>
    <div class="alert-generated">
        <small>
            Esta página foi gerada automaticamente pelo <em>script</em> <code>{{ spec }}</code>.
            <br/>Não modifique-a diretamente!
        </small>
    </div>
</template>
<script setup>
import { defineProps} from 'vue';

const props = defineProps({
    spec: String
})
</script>
<style scoped>
    .alert-generated {
        border: 1px solid #eee;
        padding: 5px 10px;
    }
</style>