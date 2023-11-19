import { Link, useNavigate } from "react-router-dom";
import { BASEURL, LOGIN } from "../../routes";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import Select, { SingleValue } from 'react-select';
import { NationalityOption, nationalities } from "../../utils/nationalitiesOptions";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  datenaissance: string;
  nationality: string;
  adress: string;
  username: string;
  password: string;
  confirmPassword: string;
}

function Register() {

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const [formdata, setFormdata] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    datenaissance: "",
    nationality: "",
    adress: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formdata.password !== formdata.confirmPassword) {
      console.error('Password and Confirm Password do not match');
      return;
    }

    const userEntityDto = {
      firstname: formdata.firstname,
      lastname: formdata.lastname,
      email: formdata.email,
      datenaissance: formdata.datenaissance,
      nationality: formdata.nationality,
      adress: formdata.adress,
      username: formdata.username,
      password: formdata.password,
    };

    try {
      await axios.post(`${BASEURL}auth/register`, userEntityDto).then(() => {
        navigate(LOGIN);
      })
    } catch (error) {
      setErrorMessage("Erreur lors de la creation du compte!");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormdata((prevFormData) => {
      if (prevFormData === null) {
        return null;
      }

      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  return (
    <div className="bg-main h-screen flex items-center justify-center">
      <div className="p-5 bg-white rounded-lg container mx-auto max-w-[850px] px-2 text-white flex justify-center flex-wrap">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="w-1/2 mx-auto mb-4 max-w-xs" src="/UMS-logo.png" alt="Your Company" />

          <h2 className="m-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 text-main">
            Create an Account
          </h2>
        </div>
        {errorMessage && <div className="p-2 rounded-lg bg-red-100 w-full text-red-400 font-bold flex justify-center max-w-lg">{errorMessage}</div>}
        <div className="p-5 w-full">
          <form className="container min-w-sm" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="firstname" className="block text-sm text-main font-bold leading-6 text-gray-900">
                  First Name
                </label>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="lastname" className="block text-sm text-main font-bold leading-6 text-gray-900">
                  Last Name
                </label>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="datenaissance" className="block text-sm text-main font-bold leading-6 text-gray-900">
                  Date Of Birth
                </label>
                <input
                  id="datenaissance"
                  name="datenaissance"
                  type="date"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mb-4 ">
                <label htmlFor="nationality" className="block text-sm text-main font-bold leading-6 text-gray-900">
                  Date Of Birth
                </label>
                <Select id="nationality" name="nationality" className="text-main font-bold" options={nationalities} onChange={(e: SingleValue<NationalityOption>) => { setFormdata(prev => ({ ...prev, "nationality": e.value })) }} />
              </div>

              <div className="mb-4">
                <label htmlFor="adress" className="block text-sm text-main font-bold leading-6 text-gray-900">
                  Address
                </label>
                <input
                  id="adress"
                  name="adress"
                  type="text"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm text-main font-bold leading-6 text-gray-900">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-main font-bold leading-6 text-gray-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm text-main font-bold leading-6 text-gray-900">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm text-main font-bold leading-6 text-gray-900">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-main px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:scale-105 hover:border-2 hover:border-blue-300 hover:bg-white hover:text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500 text-main font-bold">
            Already have an account?
            <Link to={LOGIN} className="font-semibold leading-6 text-indigo-600 hover:text-main text-second font-bold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
