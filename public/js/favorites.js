// Script to the calendar drop-down function
$(document).ready(function () {
    $("#form-deadline").datepicker({
        format: 'yyyy-mm-dd'
    });

    $('#form-deadline').change(function () {

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
    // $(`.edit-button`).on("click", function (e) {
    //     e.preventDefault();
    //     const id = parseInt(this.id)
    //     fetch("api/home", {
    //         method: "POST",
    //         body: JSON.stringify({ 
    //             notes,
    //             status,
    //             interested
    //          }),
    //     })
    //     console.log(id)
    //     $.ajax({
    //         url: `/api/home/${id}`,
    //         method: "PUT",
    //     })
    //     location.reload();
    // })
    $('.save-button').on("click", function (e) {
        // e.preventDefault()
        const jobUpdate = {
            id: e.target.id,
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

        // const jobUpdate2 = {
        //     id: e.target.id,
        //     jobtitle: jobTitle.val(),
        //     company: company.val(),
        // }
        updateJobs(jobUpdate);
        location.reload();
    })

    function updateJobs (jobs) {
        $.ajax({
        method: "PUT",
        url: "/api/home/" + jobs.id,
        data: jobs
      }).then(jobs);
    }


    $('.cancel-button').on("click", function (e) {

    })




    $('.edit-button').on("click", function (e) {
        // e.preventDefault()
        var editfeilds = document.querySelectorAll(".job-card-edit-field")
        var viewfields = document.querySelectorAll(".job-card-view-field")
        
        editfeilds.forEach(item => item.style.display = 'inline')
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
