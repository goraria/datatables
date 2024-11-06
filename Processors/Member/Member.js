$(document).ready(function() {
    var table = $('#memberTable').DataTable();

    $('#btnAdd').click(function() {
        $('#memberForm')[0].reset();
        $('#memberModal').modal('show');
    });

    $('#memberTable').on('click', '.btnEdit', function() {
        var id = $(this).data('id');
        // Fetch member data and populate the form
        $.get('/Member/GetMember/' + id, function(data) {
            $('#IDMember').val(data.IDMember);
            $('#FullName').val(data.FullName);
            $('#Email').val(data.Email);
            $('#Gender').val(data.Gender);
            $('#Salary').val(data.Salary);
            $('#DateOfBirth').val(data.DateOfBirth.split('T')[0]);
            $('#DateOfStart').val(data.DateOfStart.split('T')[0]);
            $('#DateModified').val(data.DateModified.split('T')[0]);
            $('#memberModal').modal('show');
        });
    });

    $('#memberTable').on('click', '.btnDelete', function() {
        var id = $(this).data('id');
        if (confirm('Are you sure you want to delete this member?')) {
            $.ajax({
                url: '/Member/Delete/' + id,
                type: 'DELETE',
                success: function(result) {
                    table.row($(this).parents('tr')).remove().draw();
                }
            });
        }
    });

    $('#memberForm').submit(function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.post('/Member/Save', formData, function(data) {
            $('#memberModal').modal('hide');
            location.reload();
        });
    });
});
