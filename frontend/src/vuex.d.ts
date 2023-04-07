import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    fetching: boolean
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}