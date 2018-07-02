<div class="modal modal-signup">
    <div class="modal-overlay"></div>
    <div class="modal-content">
        <div class="modal-header">
            <span class="close">&times;</span>
        </div>
        <div class="modal-body">
            <h1>Sign in Shader Visual Position</h1>
            <p class="join-msg">Join us & share your caption !</p>
            <form action="core/services.php?action=addUser" method="POST" enctype="multipart/form-data">
                <div class="form-content">
                    <input type="text" name="name" placeholder="Name">
                </div>
                <div class="form-content">
                    <input type="password" name="password" placeholder="Password">
                </div>
                <div class="form-content">
                    <label>Add picture</label>
                    <input type="file" name="picture" placeholder="Add picture">
                </div>
                <button type="submit" class="submit-btn">Join us</button>
            </form>
        </div>
        <div class="modal-footer">
        </div>
    </div>

</div>