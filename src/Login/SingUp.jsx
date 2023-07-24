import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SingUp = () => {
    const {createUser}=useContext(AuthContext);
    const handleSingUp=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(()=>{
            Swal.fire({
              position: 'top-end',
              icon: 'SingUp success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex ">
            <div className="text-center w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold">SingUp now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card  w-1/2 max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSingUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input required type="text" name="name" placeholder="name" className="input input-bordered" />
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input required type="email" name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input required type="password" name="password" placeholder="password" className="input input-bordered" />
                    </div>
                   

                    <div className="form-control mt-6">
                        <input required className="btn btn-primary" type="submit" value="SingUp" />
                    </div>
                </form>
                <p>You have already acount please<Link to='/singIn'>Login</Link></p>
            </div>
        </div>
    </div>
    );
};

export default SingUp;