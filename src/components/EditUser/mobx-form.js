import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

export default function configureMobxForEditUserBar(user) {

    const plugins = { dvr: validatorjs };

    const fields = {
        firstName: {
            rules: 'required|string|between:3,25',
            label: 'First Name',
            value: user.firstName
        },
        lastName: {
            rules: 'required|string|between:3,25',
            label: 'Last Name',
            value: user.lastName
        },
        nickName: {
            rules: 'required|string|between:3,25',
            label: 'Nick Name',
            value: user.nickName
        },
        dateOfBirth: {
            rules: 'required',
            label: 'Date of birth',
            value: user.dateOfBirth
        }

    };

    const hooks = {
        onSuccess(form) {
            form.handleSubmit();
        },
        onError(form) {

        }
    };

    return new MobxReactForm({ fields }, { plugins, hooks });

}
