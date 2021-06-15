/**
 *  栅格系统和layout全局导入插件
 */
import Col from 'vant/lib/col'
import Row from 'vant/lib/row'

import 'vant/lib/col/index.css'
import 'vant/lib/row/index.css'

import { App } from 'vue'

const components = {
    CRow: Row,
    CCol: Col
}

const install = (app: App<Element>): void => {
    Object.keys(components).forEach((key) => {
        app.component(key, components[key])
    })
}

export default { install }