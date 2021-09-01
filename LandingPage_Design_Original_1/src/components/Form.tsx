import React from 'react'

function Form() {
    return (
        <div className="container Form">
            <form className="bottom-0 col-11 col-md-4 position-absolute py-5 rounded shadow">
                <div className="col-10 offset-1">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button type="button" className="btn btn-info float-end">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
