import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  // mutations唯一的目的就是修改state里的状态
  // mutations中每个方法尽可能完成的事件比较单一
  ADD_COUNTER(state, payload) {
    payload.count++
  },
  ADD_TO_CART(state,payload) {
    payload.isChecked = true
    state.cartList.push(payload)
  }
}