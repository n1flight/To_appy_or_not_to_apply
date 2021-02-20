$(document).ready(() => {
    console.log("Loading page")
    // all the documents being added
    const jobTitle = $("input#form-title");
    const company = $("input#form-company");
    const location = $("input#form-location");
    const snippit = $("input#form-snippit");
    const link = $("input#form-link");
    const deadline = $("input#form-deadline");
    const notes = $("input#form-notes");
    const interest = $("input#form-interest");
    const status = $("input#form-status");
    const submit = $("#submit");


    submit.on("submit", e => {
        console.log(submit.id)
        e.preventDefault();
        const jobInput = {
            jobtitle: jobTitle,
            company: company,
            location: location,
            snippit: snippit,
            link: link,
            deadline: deadline,
            notes: notes,
            interest: interest,
            status: status,
        }
        console.log(jobInput)
        submitForm(jobInput.val())
    })

    function submitForm() {
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
