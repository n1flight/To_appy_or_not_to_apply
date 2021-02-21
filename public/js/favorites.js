$(document).ready(() => {
    console.log("Loading page")
    // all the documents being added
    const jobTitle = $("input#form-title");
    const company = $("input#form-company");
    const formattedLocation = $("input#form-location");
    const snippit = $("input#form-snippit");
    const url = $("input#form-link");
    const deadline = $("input#form-deadline");
    const notes = $("input#form-notes");
    const interested = $("#form-interest");
    const status = $("#form-status");
    const submit = $("#submit");
// Add salary

    submit.on("click", e => {
        e.preventDefault();

        // console.log(jobTitle.val())

        const jobInput = {
            jobtitle: jobTitle.val(),
            company: company.val(),
            formattedLocation: formattedLocation.val(),
            snippit: snippit.val(),
            url: url.val(),
            // salary
            interested: interested.val(),
            // deadline: deadline.val(),
            notes: notes.val(),
            status: status.val(),
        }
        // submitForm(jobInput.val())
        console.log(jobInput)

        // function submitForm() {
        $.post("/api/favorites", jobInput) 
        // {
            // jobtitle: jobTitle,
            // company: company,
            // location: location,
            // snippit: snippit,
            // deadline: deadline,
            // notes: notes,
        // }
        // );







    })
});
