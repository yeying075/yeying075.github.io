import {computed, createApp, ref, toRefs} from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import mitt from "mitt";
import dayjs from 'dayjs'

const Mit : any = mitt()
declare module 'vue'{
    export interface ComponentCustomProperties{
        $Bus: typeof Mit
    }
}

const app = createApp(App)

app.use(router)

app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

interface UserOld {
    date: string
    name: string
    sex: string
    authenticity: string
}
interface User {
    date: object
    name: string
    sex: string
    authenticity: string
}

const tableDataOld : UserOld[] = [
    {
        date: '2023-11-15',
        name: '张三',
        sex: '男',
        authenticity: '86%',
    },
    {
        date: '2023-10-23',
        name: '李四',
        sex: '男',
        authenticity: '92%',
    },
    {
        date: '2023-12-25',
        name: '王五',
        sex: '男',
        authenticity: '25%',
    },
    {
        date: '2023-10-09',
        name: '赵六',
        sex: '女',
        authenticity: '86%',
    },
    {
        date: '2023-11-15',
        name: '张三',
        sex: '男',
        authenticity: '86%',
    },
    {
        date: '2023-10-23',
        name: '李四',
        sex: '男',
        authenticity: '92%',
    },
    {
        date: '2023-12-25',
        name: '王五',
        sex: '男',
        authenticity: '25%',
    },
    {
        date: '2023-10-09',
        name: '赵六',
        sex: '女',
        authenticity: '86%',
    },
    {
        date: '2023-11-15',
        name: '张三',
        sex: '男',
        authenticity: '86%',
    },
    {
        date: '2023-10-23',
        name: '李四',
        sex: '男',
        authenticity: '92%',
    },
    {
        date: '2023-12-25',
        name: '王五',
        sex: '男',
        authenticity: '25%',
    },
    {
        date: '2023-10-09',
        name: '赵六',
        sex: '女',
        authenticity: '86%',
    },
    {
        date: '2023-11-15',
        name: '张三',
        sex: '男',
        authenticity: '86%',
    },
    {
        date: '2023-10-23',
        name: '李四',
        sex: '男',
        authenticity: '92%',
    },
    {
        date: '2023-12-25',
        name: '王五',
        sex: '男',
        authenticity: '25%',
    },
    {
        date: '2023-10-09',
        name: '赵六',
        sex: '女',
        authenticity: '86%',
    },  {
        date: '2023-11-15',
        name: '张三',
        sex: '男',
        authenticity: '86%',
    },
    {
        date: '2023-10-23',
        name: '李四',
        sex: '男',
        authenticity: '92%',
    },
    {
        date: '2023-12-25',
        name: '王五',
        sex: '男',
        authenticity: '25%',
    },
    {
        date: '2023-10-09',
        name: '赵六',
        sex: '女',
        authenticity: '86%',
    },
    {
        date: '2023-11-15',
        name: '张三',
        sex: '男',
        authenticity: '86%',
    },
    {
        date: '2023-10-23',
        name: '李四',
        sex: '男',
        authenticity: '92%',
    },
    {
        date: '2023-12-25',
        name: '王五',
        sex: '男',
        authenticity: '25%',
    },
    {
        date: '2023-10-09',
        name: '赵六',
        sex: '女',
        authenticity: '86%',
    },
    {
        date: '2023-11-15',
        name: '张三',
        sex: '男',
        authenticity: '86%',
    },
    {
        date: '2023-10-23',
        name: '李四',
        sex: '男',
        authenticity: '92%',
    },
    {
        date: '2023-12-25',
        name: '王五',
        sex: '男',
        authenticity: '25%',
    },
    {
        date: '2023-10-09',
        name: '赵六',
        sex: '女',
        authenticity: '86%',
    },
    {
        date: '2023-11-15',
        name: '张三',
        sex: '男',
        authenticity: '86%',
    },
    {
        date: '2023-10-23',
        name: '李四',
        sex: '男',
        authenticity: '92%',
    },
    {
        date: '2023-12-25',
        name: '王五',
        sex: '男',
        authenticity: '25%',
    },
    {
        date: '2023-10-09',
        name: '赵六',
        sex: '女',
        authenticity: '86%',
    },
]

const tableData = ref<User[]>([])

for (let i = 0; i < tableDataOld.length; i ++) {
    tableData.value.push({
        date: dayjs(tableDataOld[i].date),
        name: tableDataOld[i].name,
        sex: tableDataOld[i].sex,
        authenticity: tableDataOld[i].authenticity
    })

}

const data = ref({
    date: dayjs(),
    name: '',
    sex: '',
    authenticity: ''
})

app.config.globalProperties.$tableData = tableData

app.config.globalProperties.$datax = data

app.config.globalProperties.$Bus = Mit

Mit.on('update:tableData', (form : User) => {
    app.config.globalProperties.$datax.value = form
    tableData.value.push(form)
})

app.mount('#app')
