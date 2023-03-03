import { createStore, createLogger } from 'vuex'
import tasks from './modules/tasks'

interface State {
  items: {
    text: string,
    id: string
  }
}
const debug = process.env.NODE_ENV !== 'production'

export default createStore<State>({
  modules: {
    tasks,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})