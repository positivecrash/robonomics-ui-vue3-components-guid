<template>
    <table class="props">
        <thead>
            <th>Property</th>
            <th>Type</th>
            <th>Required</th>
            <th>Default</th>
            <th>Accepted values</th>
            <th>Description</th>
        </thead>
        <tbody>
            <slot />
        </tbody>
    </table>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Props'
})
</script>

<style>
    .props {
        font-size: 80%;
        width: 100%;
    }

    .props tr:not(:last-child) {
        border-bottom: 1px solid var(--color-gray);
    }

    .props tr:hover {
        background-color: rgb(245, 244, 244)
    }

    .props th {
        text-align: left;
        background-color: #e2e2e2;
    }

    .props th, .props td {
        padding: var(--space)
    }

    .props th:first-child, .props td:first-child {
        padding-left: 0;
    }

    .props .hljs {
        padding: 0;
        background: transparent;
    }
</style>