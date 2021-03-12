<template>
    <form class='validate-form-container'>
        <slot name='default'></slot>
        <div class='submit-area' @click.prevent='submitForm'>
            <slot name='submit'>
                <button type='submit' class='btn btn-primary'>提交</button>
            </slot>
        </div>
    </form>
</template>

<script lang='ts'>
import { defineComponent, onUnmounted } from 'vue'
import { emitter } from '@/utils/mitt'

type ValidateFunc = () => boolean
export default defineComponent({
    name: 'ValidateForm',
    emits: ['form-submit'],
    setup(props, context) {
        const funcArr: ValidateFunc[] = []
        const submitForm = () => {
            context.emit('form-submit', true)
        }
        const callback = (func?: ValidateFunc) => {
            if (func) {
                funcArr.push(func)
            }
        }
        emitter.on('form-item-created', callback)
        onUnmounted(() => {
            emitter.off('form-item-created', callback)
        })
        return {
            submitForm
        }
    }
})
</script>

<style scoped>

</style>