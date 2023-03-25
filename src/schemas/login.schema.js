import {object} from 'yup';
import {passwordField, requiredField} from "./index";

export const loginSchema = object({
    email: requiredField().email(),
    password: passwordField(),
});
