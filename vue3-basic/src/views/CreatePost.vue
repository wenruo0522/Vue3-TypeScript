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
                                type="text"
                                tag="textarea"
                                rows="10"
                                placeholder="请输入文章详情"
                                :rules="contentRules"
                />
            </div>
            <template #submit>
                <button class="btn btn-primary btn-large">发表文章</button>
            </template>
        </validate-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDataProps, PostProps } from '@/store'
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
            {type: 'required', message: '文章标题不能为空'}
        ]

        const contentVal = ref('')
        const contentRules: RulesProp = [
            {type: 'required', message: '文章详情不能为空'}
        ]
        const router = useRouter()
        const store = useStore<GlobalDataProps>()
        const onFormSubmit = (result: boolean) => {
            if (result) {
                const { column } = store.state.user
                if (column) {
                    const newPost: PostProps = {
                        _id: new Date().getTime() + '',
                        title: titleVal.value,
                        content: contentVal.value,
                        column: column + '',
                        createdAt: new Date().toLocaleString()
                    }
                    store.commit('createPost', newPost)
                    router.push({ name: 'column', params: { id: column } })
                }

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