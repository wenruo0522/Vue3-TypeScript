<template>
    <div class="create-post-page">
        <h4>新建文章</h4>
        <validate-form @form-submit="onFormSubmit">
            <div class="mb-3">
                <label class="form-label">文章标题：</label>
                <validate-input v-model="titleVal"
                                type="text"
                                placeholder="请输入文章标题"
                                :rules="titleRules"
                />
            </div>
            <div class="mb-3">
                <label class="form-label">文章详情：</label>
                <validate-input v-model="contentVal"
                                type="password"
                                placeholder="请输入文章详情"
                                :rules="contentRules"
                />
            </div>
            <template #submit>
                <button class="btn btn-primary btn-large">创建</button>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ValidateForm from "@/components/ValidateForm.vue"
import ValidateInput, { RulesProp } from "@/components/ValidateInput.vue"

export default defineComponent({
    name: 'CreatePost',
    components: {
        ValidateForm,
        ValidateInput
    },
    setup() {
        const titleVal = ref('')
        const titleRules: RulesProp = [
            { type: 'required', message: '文章标题不能为空' }
        ]

        const contentVal = ref('')
        const contentRules: RulesProp = [
            { type: 'required', message: '文章详情不能为空' }
        ]
        const router = useRouter()
        const store = useStore()
        const onFormSubmit = (result: boolean) => {
            if (result) {
                router.push('/')
                store.commit('login')
            }
        }
        return {
            titleVal,
            titleRules,
            contentVal,
            contentRules,
            onFormSubmit
        }
    }
})
</script>

<style scoped>

</style>