import { mount } from '@vue/test-utils'
import SiteTopbar from './SiteTopbar.vue'
 
test('displays message', async () => {
  const wrapper = await mount(SiteTopbar)
})
