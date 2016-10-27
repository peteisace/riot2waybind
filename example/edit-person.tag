<edit-person>
    <fieldset>
        <legend>Edit person</legend>
        <input type="text" name="firstName" value="{ opts.model.firstName }" placeHolder="Enter first name" />
        <input type="text" name="lastName" value="{ opts.model.lastName }" placeHolder="Enter last name" />
        <input type="text" name="jobTitle" value="{ opts.model.jobTitle }" placeHolder="Enter the job title" />
        <input type="text" name="address" value="{ opts.model.address }" placeHolder="Enter the address" />
    </fieldset>
    <div>
        <p>{ opts.model.firstName }</p>
        <p>{ opts.model.lastName }</p>
        <p>{ opts.model.jobTitle}</p>
        <p>{ opts.model.address}</p>
    </div>
    <script>
        this.mixin(window.mixin);        
    </script>
</edit-person>