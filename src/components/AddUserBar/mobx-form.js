import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

const plugins = { dvr: validatorjs };

const fields = {
    firstName: {
        rules: 'required|string|between:3,25',
        label: 'First Name'
    },
    lastName: {
        rules: 'required|string|between:3,25',
        label: 'Last Name'
    },
    nickName: {
        rules: 'required|string|between:3,25',
        label: 'Nick Name'
    },
    dateOfBirth: {
        rules: 'required',
        label: 'Date of birth'
    }

};

const hooks = {
    onSuccess(form) {
        form.handleSubmit();
    },
    onError(form) {

    }
};

export default new MobxReactForm({ fields }, { plugins, hooks });
