// Script to the calendar drop-down function
$(document).ready(function () {
    $("#form-deadline").datepicker({
        format: 'yyyy-mm-dd'
    });

    $(".date-edit").datepicker({
        format: 'yyyy-mm-dd'
    });

    $('#form-deadline').change(function () {

    });

    $('.date-edit').change(function () {

    });

});


$(document).ready(() => {
    console.log("Loading page")
    // all the documents being added
    const jobTitle = $("input#form-title");
    const company = $("input#form-company");
    const formattedLocation = $("input#form-location");
    const snippit = $("input#form-snippit");
    const url = $("input#form-link");
    const salary = $("#form-salary");
    const deadline = $("#form-deadline");
    const notes = $("input#form-notes");
    const interested = $("#form-interest");
    const status = $("#form-status");
    const submit = $("#submit");
    // Add salary

    submit.on("click", e => {
        e.preventDefault();

        const jobInput = {
            jobtitle: jobTitle.val(),
            company: company.val(),
            formattedLocation: formattedLocation.val(),
            snippit: snippit.val(),
            url: url.val(),
            salary: parseFloat(salary.val()),
            interested: interested.val(),
            deadline: deadline.val(),
            notes: notes.val(),
            status: status.val(),
        }

        $.post("/api/home", jobInput)
        location.reload();

    })

    $('.save-button').on("click", function (e) {
        e.preventDefault()
        const id = parseInt(this.id)
        const jobTitleEdit = $("input#jobTitle-edit-" + id)
        const companyEdit = $("input#company-edit-" + id)
        const formattedLocationEdit = $("input#formattedLocation-edit-" + id)
        const snippetEdit = $("input#snippit-edit-" + id)
        const urlEdit = $("input#url-edit-" + id)
        const salaryEdit = $("#salary-edit-" + id)
        const interestedEdit = $("#interested-edit-" + id)
        const deadlineEdit = $("#deadline-edit-" + id)
        const notesEdit = $("input#notes-edit-" + id)
        const statusEdit = $("#status-edit-" + id)
        // location.reload();
        const jobUpdate = {
            id: e.target.id,
            jobtitle: jobTitleEdit.val(),
            company: companyEdit.val(),
            formattedLocation: formattedLocationEdit.val(),
            snippit: snippetEdit.val(),
            url: urlEdit.val(),
            salary: parseFloat(salaryEdit.val()),
            interested: interestedEdit.val(),
            deadline: deadlineEdit.val(),
            notes: notesEdit.val(),
            status: statusEdit.val(),
        }
        updateJobs(jobUpdate);
        location.reload();
    })

    function updateJobs(jobs) {
        $.ajax({
            method: "PUT",
            url: "/api/home/" + jobs.id,
            data: jobs
        }).then(jobs);
        location.reload();
    }


    $('.cancel-button').on("click", function (e) {
        location.reload();
    })


    $('.edit-button').on("click", function (e) {
        e.preventDefault()
        const id = e.target.id
        let editfields = document.querySelectorAll("#card-" + id + " .job-card-edit-field")
        let viewfields = document.querySelectorAll("#card-" + id + " .job-card-view-field")

        editfields.forEach(item => item.style.display = 'inline')
        viewfields.forEach(item => item.style.display = 'none')

    })

    $(`.delete-button`).on("click", function (e) {
        e.preventDefault();

        const id = parseInt(this.id)
        $.ajax({
            url: `/api/home/${id}`,
            method: "DELETE",
        })
        location.reload();
    })
});
