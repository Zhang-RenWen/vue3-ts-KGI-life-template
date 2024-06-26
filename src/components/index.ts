import Header from './Header.vue'
import BreadCrumb from './BreadCrumb.vue'
import Drawer from './Drawer.vue'
import VueDraggableResizable from 'vue-draggable-resizable'
import InputLabel from './InputLabel.vue'
import InputTextField from './InputTextField.vue'
import InputTextArea from './InputTextArea.vue'
import InputNumber from './InputNumber.vue'
import InputNumberSteppers from './InputNumberSteppers.vue'
import InputFormat from './InputFormat.vue'
import InputAutoComplete from './InputAutoComplete.vue'
import Table from './Table.vue'
import Pagination from './Pagination.vue'
import Dialog from './Dialog.vue'
import Alert from './Alert.vue'
import Confirm from './Confirm.vue'
import Loading from './Loading.vue'
import IdleTracker from './IdleTracker.vue'
import type { App } from 'vue'

export function registerComponents(app: App) {
  app.component('Header', Header)
  app.component('BreadCrumb', BreadCrumb)
  app.component('Drawer', Drawer)
  app.component('InputLabel', InputLabel)
  app.component('InputTextField', InputTextField)
  app.component('InputTextArea', InputTextArea)
  app.component('InputNumber', InputNumber)
  app.component('InputNumberSteppers', InputNumberSteppers)
  app.component('InputFormat', InputFormat)
  app.component('InputAutoComplete', InputAutoComplete)
  app.component('Table', Table)
  app.component('Pagination', Pagination)
  app.component('Dialog', Dialog)
  app.component('Alert', Alert)
  app.component('Confirm', Confirm)
  app.component('Loading', Loading)
  app.component('IdleTracker', IdleTracker)
  app.component('VueDraggableResizable', VueDraggableResizable)
}
