$(document).ready(() => {

// all the documents being added
const jobTitle = $("input#form-title");
const company = $("input#form-company");
const location = $("input#form-location");
const snippit = $("input#form-snippit");
const deadline = $("input#deadline");
const notes = $("input#form-notes");
const submit = $("#submit");
// const interest = $("input#interest");
// const link = $("input#form-link");
// const status = $("input#status");

submit.on("submit", e =>{
    e.preventDefault();
    const jobInput = {
        jobtitle: jobTitle,
        company: company,
        location: location,
        snippit: snippit,
        deadline: deadline,
        notes: notes,
    }
    submitForm(jobInput.val())
})

function submitForm( ){
    $.post("/home", {
        jobtitle: jobTitle,
        company: company,
        location: location,
        snippit: snippit,
        deadline: deadline,
        notes: notes,
    });
}

});



