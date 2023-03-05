import { describe, it, expect } from 'vitest';
import BaseSelect from './BaseSelect.vue';
import { shallowMount } from '@vue/test-utils'

const createWrapper = (options = {}) => {
    return shallowMount(BaseSelect, options)
}

describe('BaseSelect.vue', () => {
    it('when passed options, should render values', async () => {
        const wrapper = createWrapper();
        const optionsList = [{ name: 'a', value: 'a' }, { name: 'b', value: 'b' }]
        await wrapper.setProps({
            options: optionsList
        })
        expect(wrapper.findAll('[data-testId="option"]').length).toEqual(optionsList.length)
    });

    it('when user click on element , should open options list', async () => {
        const wrapper = createWrapper();
        const optionsList = [{ name: 'a', value: 'a' }, { name: 'b', value: 'b' }]
        await wrapper.setProps({
          options: optionsList
        })
        const selectedItemElement = wrapper.find('[data-testId="selected-item"]')
        await selectedItemElement.trigger('click')
        expect(wrapper.vm.isOpenOptions).toBe(true)
      })
});