let formulation = '';
function appendToOutput(number) {
    formulation += number;
    updateOutput();
}
function appendOperator(operator) {
    formulation += operator;
    updateOutput();
}
function calculateOutput() {
    try {
        const result = eval(formulation);
        formulation = result.toString();
        updateOutput();
    } catch (error) {
        formulation = '';
        updateOutput('Error');
    }
}
function updateOutput(value = '') {
    $("#output").val(value || formulation);
}
function clearOutput() {
    formulation = '';
    updateOutput();
}