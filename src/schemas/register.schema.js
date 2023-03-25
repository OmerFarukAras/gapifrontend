import {object} from 'yup';
import {passwordField, requiredField} from "./index";

export const registerSchema = object({
    name: requiredField(),
    email: requiredField().email(),
    password: passwordField(),
});
