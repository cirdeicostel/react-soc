import { ErrorMessage, Field, Form, Formik } from "formik";

const AddCocktail = () => {

    return (<div className="add-cocktail-wrapper">
        <h2>Add cocktail form</h2>
        <Formik
            initialValues={{ cocktailName: '', cocktailGlass: '' }}
            validate={values => {
                const errors = {};
                if (!values.cocktailName) {
                    errors.cocktailName = 'Coktail name required';
                }
                if (!values.cocktailGlass) {
                    errors.cocktailGlass = 'Cocktail glass required';
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label htmlFor="cocktailName">
                        <div>Cocktail Name</div>
                        <Field name="cocktailName" placeholder="Cocktail Name" />
                        <ErrorMessage name="cocktailName" component="div" className="err-msg" />
                    </label>
                    <label htmlFor="cocktailGlass">
                        <div>Cocktail Glass</div>
                        <Field name="cocktailGlass" placeholder="Cocktail glass" />
                        <ErrorMessage name="cocktailGlass" component="div" className="err-msg" />
                    </label>
                    <label htmlFor="cocktailType">
                        <div>Cocktail Type</div>
                        <Field as="select" name="cocktailType" defaultValue="alcoholic">
                            <option value="alcoholic">Alcoholic</option>
                            <option value="non-alcoholic">Non Alcoholic</option>
                            <option value="ordinary-drink">Ordinary Drink</option>
                        </Field>
                    </label>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
           </button>
                </Form>
            )}
        </Formik>
    </div>);
}

export default AddCocktail;