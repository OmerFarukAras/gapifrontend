import {object} from 'yup';
import { requiredField} from "./index";

export const PostSchema = object({
    title: requiredField(),
    content: requiredField(),
});
