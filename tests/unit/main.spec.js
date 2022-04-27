import { mount } from '@vue/test-utils';
import mainComponent from '../../src/App.vue';

test('displays image', () => {
    const wrapper = mount(mainComponent);

    expect(wrapper.html()).toContain('img');
});
