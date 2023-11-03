const responseRestNumber = (props) => {
    const { counterState, numberArgument } = props;
    return counterState - numberArgument;
};

const responseSumNumber = (props) => {
    const { counterState, numberArgument } = props;
    return counterState + numberArgument;
};

export default {
    responseRestNumber,
    responseSumNumber,
}