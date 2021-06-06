import * as yup from "yup"

const initialValues = {
  screenName: "",
}

const validationSchema = yup.object().shape({
  screenName: yup
    .string()
    .min(4, "minimum 4 characters required")
    .max(15, "maximum 15 characters allowed"),
})

export default {
  initialValues,
  validationSchema,
}
