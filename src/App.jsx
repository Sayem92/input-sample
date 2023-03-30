import "./App.css";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { toast, Toaster } from "react-hot-toast";

function App() {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [phone, setPhone] = useState("");

  //Note: react hook form are not working to get value so use state for get value and required values.

  useEffect(() => {
    if (phone.length === 11) {
      // console.log(phone);
      const value = `+${phone}`;
      setValue("phoneNumber", value);
    } else {
      setValue("phoneNumber", "");
    }
  }, [phone, setPhone]);


  const onSubmit = (data) => {
    if (data.phoneNumber === "") {
      return toast.error("Please enter a valid phone number");
    } else {
      console.log(data); //{phoneNumber: '+14545345345'}
      // mutate(data);
      // call api for send data
    }
  };

  const handlePhoneChange = (value) => {
    setPhone(value.replace(/\D/g, "").slice(0, 11));
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={handlePhoneChange}
          // inputProps={register('phoneNumber')}
          onlyCountries={["us"]}
          disableDropdown={true}
          countryCodeEditable={false}
        />
        <button
          style={{ marginTop: "10px", border: "1px solid blue" }}
          type="submit"
        >
          Submit
        </button>
      </form>
      <Toaster />
    </div>
  );
}

export default App;
