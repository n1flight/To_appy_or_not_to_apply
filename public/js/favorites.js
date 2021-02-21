$(document).ready(() => {
    console.log("Loading page")
    // all the documents being added
    const jobTitle = $("input#form-title").val();
    const company = $("input#form-company").val();
    const location = $("input#form-location").val();
    const snippit = $("input#form-snippit").val();
    const link = $("input#form-link").val();
    const deadline = $("input#form-deadline").val();
    const notes = $("input#form-notes").val();
    const interest = $("#form-interest").val();
    const status = $("#form-status").val();
    const submit = $("#submit");


    submit.on("click", e => {
        e.preventDefault();

        // console.log(jobTitle.val())

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
