import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
} from 'vee-validate';
import {
  required,
  min,
  max,
  email,
  confirmed,
  min_value as minValue,
  max_value as maxValue,
  alpha_spaces as alphaSpaces,
  not_one_of as exclude,
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('email', email);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('min_value', minValue);
    defineRule('max_value', maxValue);
    defineRule('confirmed', confirmed);
    defineRule('not_one_of', exclude);
  },
};
