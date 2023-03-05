import { describe, it, expect } from 'vitest';
import BaseTextArea from './BaseTextArea.vue';
import { shallowMount } from '@vue/test-utils'
import { nextTick } from 'vue';

const createWrapper = (options = {}) => {
    return shallowMount(BaseTextArea, options)
}

describe('BaseTextArea.vue', () => {
    it('should show label when pass label to component', () => {
        const wrapper = createWrapper({
            props: {
                label: 'test label'
            }
        });
        expect(wrapper.html()).toContain('test label')
    });

    it("shold the same label's for attr with textarea's id attr", () => {
        const wrapper = createWrapper({
            props: {
                label: 'label for exist',
                id: 'id12345'
            }
        });

        expect(wrapper.get('label').attributes('for')).toEqual(wrapper.get('textarea').attributes('id'));
    });

    it("when a user type something, should emitted value", async () => {
        const wrapper = createWrapper({
            props: {
                id: 'id12345',
            }
        });
        const textExp = 'new text'
        const textarea = wrapper.find('textarea')
        await textarea.setValue(textExp)
        await nextTick();
        expect(wrapper.emitted('update:modelValue')[0]).toEqual([textExp])

    });
});