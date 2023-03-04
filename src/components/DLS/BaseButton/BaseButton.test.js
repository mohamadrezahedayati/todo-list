import { describe, it, expect } from 'vitest';
import BaseButton from './BaseButton.vue';
import { shallowMount } from '@vue/test-utils'

const createWrapper = (options = {}) => {
    return shallowMount(BaseButton, options)
}

describe('rendering', () => {
    it('should render test class', () => {
        const wrapper = createWrapper({ attrs: { class: 'test' } });
        expect(wrapper.classes()).toContain('test')
    });

    it('slot is inserted in a button element', () => {
        const button = createWrapper({
            slots: {
                default: '<div class="fake-msg"></div>'
            }
        });

        expect(button.html()).toContain("fake-msg");
    });
});