import { describe, it, expect } from 'vitest';
import BaseSelect from './BaseSelect.vue';
import { shallowMount } from '@vue/test-utils'

const createWrapper = (options = {}) => {
    return shallowMount(BaseSelect, options)
}

describe('rendering', () => {
    it('should show label when pass label to component', () => {
        const wrapper = createWrapper({
            props: {
                label: 'test label'
            }
        });
        expect(wrapper.html()).toContain('test label')
    });

    it("shold the same label's for attr with input's id attr", () => {
        const wrapper = createWrapper({
            props: {
                label: 'label for exist',
                id: 'id12345'
            }
        });

        expect(wrapper.get('label').attributes('for')).toEqual(wrapper.get('input').attributes('id'));
    });
});

describe('functionality', () => {
    // it("when type something text, should change value that", async () => {
    //     const wrapper = createWrapper({
    //         props: {
    //             modelValue: 'hello',
    //             type: 'text'
    //         }
    //     });
    //     await wrapper.setProps({ modelValue: 'set props' })
    //     await wrapper.find('input[type="text"]').setValue('hello!')
    //     expect(wrapper.attributes()).toEqual({})
    // })
})