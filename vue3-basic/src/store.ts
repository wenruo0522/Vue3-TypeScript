import { createStore } from 'vuex'
import { testData, testPosts, ColumnProps, PostProps } from './testData'

interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
}

export interface GlobalDataProps {
    columns: ColumnProps[];
    posts: PostProps[];
    user: UserProps;
}

const store = createStore<GlobalDataProps>({
    state: {
        columns: testData,
        posts: testPosts,
        user: { isLogin: true, name: 'WuKong' }
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLogin: true, name: 'WuKong' }
        }
    },
    getters: {

        getColumnById: (state) => {
            return (id: number) => {
                return state.columns.find(c => c.id === id)
            }
        },
        getPostsByCid: (state) => {
            return (cid: number) => {
                return state.posts.filter(post => post.columnId === cid)
            }
        }
    }
})

export default store
