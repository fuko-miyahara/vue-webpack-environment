import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    // use strict は、productionでは使用禁止. パフォーマンスの低下に繋がるため。
    strict: process.env.NODE_ENV !== 'production',
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        }
    }
})
