const initialState = {
    formData: {
        step1: {
            fname: "",
            lname: ""
        },
        step2: {
            email: "",
            phone: ""
        }
        ,
        step3: {
            laddress: "",
            paddress: ""
        }
        ,
        step4: {
            school: "",
            schoolper: ""
        }
        ,
        step5: {
            college: "",
            collegeper: ""
        }
        ,
        step6: {
            react: "",
            node: ""
        }
    },
    stepComplete: 1,
    currentStep: 1,
    formComplete: false
}
function reducer(state = initialState, action) {
    console.log('reducer', state, action);

    switch (action.type) {
        case 'CHANGE_VALUE':
            const { step, field, value } = action.payload;
            const { formData } = state;
            return {
                ...state,
                formData: {
                    ...formData,
                    [step]: { ...formData[step], [field]: value }
                }
            };
        case 'PREVIOUS':
            return {
                ...state, currentStep: state.currentStep - 1
            };
        case 'NEXT':
            var { stepComplete } = state;
            const currentStep = state.currentStep + 1;
            stepComplete = stepComplete < currentStep ? currentStep : stepComplete;
            return {
                ...state, currentStep, stepComplete
            };
        case 'SUBMIT':
            return { ...state, formComplete: true }
        default:
            return state;
    }
}
export default reducer;