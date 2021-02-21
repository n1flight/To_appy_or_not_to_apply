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
    const interest = $("#form-interest");
    const status = $("#form-status");
    const submit = $("#submit");


    submit.on("click", e => {
        e.preventDefault();

        console.log(jobTitle.val())

        const jobInput = {
            jobtitle: jobTitle.val(),
            company: company.val(),
            location: location.val(),
            snippit: snippit.val(),
            link: link.val(),
            deadline: deadline.val(),
            notes: notes.val(),
            interest: interest.val(),
            status: status.val(),
        }
        // submitForm(jobInput.val())
        console.log(jobInput)

        // function submitForm() {
        $.post("/home", {
            jobtitle: jobTitle,
            company: company,
            location: location,
            snippit: snippit,
            deadline: deadline,
            notes: notes,
        });
        // }
    })
});
