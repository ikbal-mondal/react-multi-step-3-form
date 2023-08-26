import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import "../Component/Date.css";

const StepForm = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState(null);
  const handleNavigate = () => {
    navigate("/OrderSuccess");
  };

  // calender handle

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const getTdStyle = (date) => {
    if (date === selectedDate) {
      return " bg-blue-600 text-white ";
    }
    return "";
  };

  //

  // handle date

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const getTdStyleTime = (time) => {
    if (time === selectedTime) {
      return "bg-blue-600 text-white";
    }
    return "";
  };

  //

  const next = () => {
    setFormNo(formNo + 1);
  };

  const onSubmit = (data) => {
    if (!selectedDate || !selectedTime) {
      setError("Please select both date and time.");
      return;
    }

    setError(" ");
    next();

    if (formNo === 3) {
      handleNavigate();
    }
  };

  const pre = () => {
    setFormNo(formNo - 1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-24 mx-4">
        <div
          style={{ boxShadow: "0px 0px 9px #58585847" }}
          className="card lg:w-[70%] md:w-[80%] sm:w-[95%]    mx-auto rounded-2xl shadow-2xl bg-white p-5"
        >
          <div className="flex justify-center items-center">
            {formArray.map((v, i) => (
              <>
                <div
                  className={`w-[35px] border-4 border-white my-3 text-white rounded-full ${
                    formNo - 1 === i ||
                    formNo - 1 === i + 1 ||
                    formNo === formArray.length
                      ? "bg-blue-500"
                      : "bg-[#C7C7C7]"
                  } h-[35px] flex justify-center items-center`}
                ></div>
                {i !== formArray.length - 1 && (
                  <div
                    className={`w-[45%]  h-[8px] ${
                      formNo === i + 2 || formNo === formArray.length
                        ? "bg-blue-500"
                        : "bg-[#EBEBEE]"
                    }`}
                  ></div>
                )}
              </>
            ))}
          </div>
          {formNo === 1 && (
            <div>
              <section className="grid lg:grid-cols-2 mg:grid-cols-6 justify-center">
                <div className="">
                 <div className="pl-3">
                 <h1 className="lg:text-3xl md:text-2xl sm:xl font-bold">
                    Select date of service{" "}
                  </h1>
                  <p className="text-sm text-slate-500 my-2">
                    Your services will take approx. 30 mins
                  </p>
                 </div>
                  <div className="">
                    <div className="container">
                      <div className="calendar">
                        <table>
                          <tbody>
                            <tr>
                              <td
                                className={getTdStyle("30")}
                                onClick={() => handleDateClick("30")}
                              >
                                <p>Mon</p>
                                30
                              </td>
                              <td
                                className={getTdStyle("31")}
                                onClick={() => handleDateClick("31")}
                              >
                                <p>Sun</p>
                                31
                              </td>
                              <td
                                className={getTdStyle("1")}
                                onClick={() => handleDateClick("1")}
                              >
                                <p>Tue</p>1
                              </td>
                              <td
                                className={getTdStyle("2")}
                                onClick={() => handleDateClick("2")}
                              >
                                <p>Wed</p>2
                              </td>
                            </tr>
                            <tr>
                              <td
                                className={getTdStyle("03")}
                                onClick={() => handleDateClick("03")}
                              >
                                <p>Thu</p>
                                03
                              </td>
                              <td
                                className={getTdStyle("04")}
                                onClick={() => handleDateClick("04")}
                              >
                                <p>Fri</p>
                                04
                              </td>
                              <td
                                className={getTdStyle("05")}
                                onClick={() => handleDateClick("05")}
                              >
                                <p>Sat</p>
                                05
                              </td>
                              <td>
                                <i className="fa-solid fa-chevron-right"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                 <div className="pl-3">
                 <h1 className="lg:text-3xl md:text-2xl sm:xl  font-bold">
                    Time to start the service
                  </h1>
                  <p className="text-sm text-slate-500 my-2">
                    Select the best hour for you
                  </p>
                 </div>
                  <div className="container">
                    <div className="calendar">
                      <table>
                        <tbody>
                          <tr>
                            <td
                              className={getTdStyleTime("01:00")}
                              onClick={() => handleTimeClick("01:00")}
                            >
                              <p>PM</p>
                              01:00
                            </td>
                            <td
                              className={getTdStyleTime("02:00")}
                              onClick={() => handleTimeClick("02:00")}
                            >
                              <p>PM</p>
                              02:00
                            </td>
                            <td
                              className={getTdStyleTime("02:30")}
                              onClick={() => handleTimeClick("02:30")}
                            >
                              <p>PM</p>
                              02:30
                            </td>
                            <td
                              className={getTdStyleTime("03:00")}
                              onClick={() => handleTimeClick("03:00")}
                            >
                              <p>PM</p>
                              03:00
                            </td>
                          </tr>
                          <tr>
                            <td
                              className={getTdStyleTime("04:00")}
                              onClick={() => handleTimeClick("04:00")}
                            >
                              <p>PM</p>
                              04:00
                            </td>
                            <td
                              className={getTdStyleTime("05:00")}
                              onClick={() => handleTimeClick("05:00")}
                            >
                              <p>PM</p>
                              05:00
                            </td>
                            <td
                              className={getTdStyleTime("06:00")}
                              onClick={() => handleTimeClick("06:00")}
                            >
                              <p>PM</p>
                              06:00
                            </td>
                            <td>
                              <i className="fa-solid fa-chevron-right"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
              { error &&
                (!selectedDate || !selectedTime) &&
                <p className="text-red-600 text-center">Please select both date and time.</p>
               
              }
              <div className="mt-4 flex gap-6 justify-center items-center">
                <button
                  disabled
                  className="px-3 py-2 text-lg rounded-md  text-blue-500 border-2 uppercase"
                >
                  Calicle
                </button>
                <button
                  className="
                bg-gradient-to-r from-[#0066CF] to-[#3CBDFF] hover:from-[#3CBDFF]  hover:to-[#0066CF] font-semibold
                px-4 py-2 text-lg rounded-md  text-white uppercase"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {formNo === 2 && (
            <div>
              <section className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
                <div className="">
                  <h1 className="lg:text-3xl md:text-2xl sm:xl  font-bold">
                    Personal Details{" "}
                  </h1>
                  <p className="text-sm text-slate-500 my-2">
                    Name and contact email
                  </p>
                  <div className="">
                    <div className="flex flex-col mb-2">
                      <input
                        {...register("firstName", { required: true })}
                        className="p-2  bg-[#EAF2FB]  outline-0 focus:border-blue-500 rounded-md"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        id="firstName"
                      />
                      {errors.firstName?.type === "required" && (
                        <p className="text-red-700 text-sm" role="alert">
                          First name is required
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col mb-2">
                      <input
                        {...register("lastName", { required: true })}
                        className="p-2 my-3 bg-[#EAF2FB] outline-0 focus:border-blue-500 rounded-md"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        id="lastName"
                      />
                      {errors.lastName?.type === "required" && (
                        <p className="text-red-700 text-sm" role="alert">
                          Last name is required
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col mb-2">
                      <input
                        {...register("email", { required: true })}
                        className="p-2 bg-[#EAF2FB] outline-0 focus:border-blue-500 rounded-md"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Work Email"
                      />
                      {errors.email?.type === "required" && (
                        <p className="text-red-700 text-sm" role="alert">
                          {" "}
                          Email is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="hidden lg:block md:block">
                    <div className="mt-4  flex flex-wrap gap-6 items-center lg:justify-end md:justify-center sm:justify-center">
                      <button
                        onClick={pre}
                        className="px-4 py-2 text-lg rounded-md text-blue-500  border-2 uppercase"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 text-lg rounded-md  text-white bg-gradient-to-r from-[#0066CF] to-[#3CBDFF] hover:from-[#3CBDFF]  hover:to-[#0066CF] uppercase"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <h1 className="lg:text-3xl md:text-2xl sm:xl  font-bold">
                      Billing Address{" "}
                    </h1>
                    <p className="text-sm text-slate-500 my-2">
                      Address and location
                    </p>
                    <div className="">
                      <div className="flex flex-col mb-2">
                        <input
                          className="p-2  bg-[#EAF2FB] outline-0 focus:border-blue-500 rounded-md"
                          type="text"
                          name="Address1"
                          placeholder="Billing Address line 1"
                          id="Address1"
                          {...register("Address1", { required: true })}
                        />
                        {errors.Address1?.type === "required" && (
                          <p className="text-red-700 text-sm" role="alert">
                            Address1 is required
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col mb-2">
                        <input
                          className="p-2 border my-3 bg-[#EAF2FB] outline-0  rounded-md"
                          type="text"
                          name="Address2"
                          placeholder="Billing Address line 2"
                          id="Address2"
                          {...register("Address2", { required: true })}
                        />
                        {errors.Address2?.type === "required" && (
                          <p className="text-red-700 text-sm" role="alert">
                            Address2 is required
                          </p>
                        )}
                      </div>
                      <div className="grid lg:grid-cols-2 md:gird-cols-2 sm:grid-cols-1 gap-4">
                        <div className="">
                          <input
                            className="p-2 w-full  bg-[#EAF2FB]  outline-0 focus:border-blue-500 rounded-md"
                            type="text"
                            name="town"
                            id="town"
                            placeholder="town"
                            {...register("town", { required: true })}
                          />
                          {errors.town?.type === "required" && (
                            <p className="text-red-700 text-sm" role="alert">
                              town is required
                            </p>
                          )}
                        </div>
                        <div className="">
                          <input
                            className="p-2  w-full bg-[#EAF2FB] outline-0 focus:border-blue-500 rounded-md"
                            type="text"
                            name="postcode"
                            id="postcode"
                            placeholder="Postcode"
                            {...register("postcode", { required: true })}
                          />
                          {errors.postcode?.type === "required" && (
                            <p className="text-red-700 text-sm" role="alert">
                              postcode is required
                            </p>
                          )}
                        </div>
                        <div className="form-control mt-3">
                          <label className=" flex items-center cursor-pointer">
                            <input
                              name="Terms"
                              type="checkbox"
                              className="checkbox rounded-full bg-[#0068cfb5] text-sky-500"
                              {...register("Terms", { required: true })}
                            />
                            <span className="ml-1">Terms and conditions</span>
                          </label>
                          {errors.Terms?.type === "required" && (
                            <p className="text-red-700 text-sm" role="alert">
                              {" "}
                              required true
                            </p>
                          )}
                        </div>
                        <div className="lg:hidden md:hidden">
                          <div className="mt-4  flex flex-wrap gap-6 items-center lg:justify-end md:justify-center sm:justify-center">
                            <button
                              onClick={pre}
                              className="px-4 py-2 text-lg rounded-md text-blue-500  border-2 uppercase"
                            >
                              Back
                            </button>
                            <button
                              type="submit"
                              className="px-4 py-2 text-lg rounded-md  text-white bg-gradient-to-r from-[#0066CF] to-[#3CBDFF] hover:from-[#3CBDFF]  hover:to-[#0066CF] uppercase"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {formNo === 3 && (
            <div>
              <section className="grid lg:grid-cols-2 md:gird-cols-2 sm:grid-cols-1 gap-6">
                <div className="">
                  <h1 className="lg:text-3xl md:text-2xl sm:xl  font-bold">
                    Basket details{" "}
                  </h1>
                  <p className="text-sm text-slate-500 my-2">
                    Fill basket details
                  </p>
                  <div className="">
                    <div className="flex flex-col mb-2">
                      <div className="p-3 bg-[#EAF2FB] outline-0  rounded-md flex justify-between">
                        <span>Credit:x 100</span>
                        <span>$100</span>
                      </div>
                    </div>
                    <div className="flex gap-2 my-4">
                      <input
                        className="p-3 w-full bg-[#EAF2FB] mt-1 outline-0  rounded-md"
                        type="text"
                        name="discount"
                        placeholder="Discount code"
                        id="discount"
                      />
                      <button
                        disabled
                        className="bg-blue-500 px-5 text-white  rounded-lg"
                      >
                        Apply
                      </button>
                    </div>
                    <div className="flex flex-col mb-2">
                      <div className="p-3 border  outline-0 bg-[#EAF2FB] rounded-md flex justify-between">
                        <span>Subtotal</span>
                        <span>$100</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <h1 className="lg:text-3xl md:text-2xl sm:xl  font-bold">
                      Payment options{" "}
                    </h1>
                    <p className="text-sm text-slate-500 my-2">
                      Select payment options
                    </p>
                    <div className="">
                      <div className="flex flex-col mb-2">
                        <div className=" border bg-[#EAF2FB] outline-0 rounded-md flex justify-between">
                          <div className="form-control">
                            <label className="label cursor-pointer">
                              <input
                                {...register("radio", { required: true })}
                                type="radio"
                                name="radio"
                                className="radio bg-[#D3D4DB]  border-4 border-white radio-primary"
                              />

                              <span className="label-text ml-3 text-lg">
                                Cash On delivery
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col mb-2">
                        <div className=" border my-3 bg-[#EAF2FB] outline-0 rounded-md flex justify-between">
                          <div className="form-control ">
                            <label className="label cursor-pointer">
                              <input
                                {...register("radio", { required: true })}
                                type="radio"
                                name="radio"
                                className="radio border-4 border-white bg-[#D3D4DB]  radio-primary"
                              />

                              <span className="label-text ml-3 text-lg">
                                Credit card (stipe)
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col mb-2">
                        <div className=" border  bg-[#EAF2FB] outline-0 rounded-md flex justify-between">
                          <div className="form-control">
                            <label className="label cursor-pointer">
                              <input
                                {...register("radio", { required: true })}
                                type="radio"
                                name="radio"
                                className="radio border-4 border-white bg-[#D3D4DB] radio-primary"
                              />

                              <span className="label-text ml-3 text-lg">
                                Credit debit card
                              </span>
                            </label>
                          </div>
                        </div>
                        {errors.radio?.type === "required" && (
                          <p className="text-red-600 text-sd" role="alert">
                            {" "}
                            Please select a payment option
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="mt-4 flex gap-6 items-center justify-center ">
                <button
                  onClick={pre}
                  className="px-4 py-2 text-lg rounded-md text-blue-500  border-2 uppercase"
                >
                  Back
                </button>

                <button
                  className="px-4 py-2 text-lg rounded-md 
               text-white bg-gradient-to-r from-[#0066CF] to-[#3CBDFF] hover:from-[#3CBDFF]  hover:to-[#0066CF] uppercase "
                >
                  Place an order{" "}
                </button>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default StepForm;
