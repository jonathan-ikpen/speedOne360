import { useState, useEffect, useRef } from "react";
import { database } from "../utils/firebase";
import { ref, push, child, update } from "firebase/database";
import Loader from "../components/Loader/index.jsx";
import Spinner from "../components/Loader/spinner";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const submitBtn = useRef();

  let btnText = "Submit";

  const [details, setDetails] = useState({
    name: "",
    address: "",
    phone: "",
    state: "",
    city: "",
    package: "",
    coords: [],
  });

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setDetails({
          ...details,
          coords: [latitude, longitude],
        });
        console.log(latitude, longitude);
      });
      // console.log(lat);
      // console.log(lng);
    }
  };

  useEffect(() => {
    getPosition();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    // setDetails({ value: e.target.value });
    setDetails({ ...details, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(details);

    const data = JSON.stringify(details, null, 2);
    const auth_token = `6101713318:AAFrQfpNB-Nvy1ZEofAVp69F6Dy1I80oA18`;
    const chat_id = `1212292511`;
    const tele2 = `https://api.telegram.org/bot6101713318:AAFrQfpNB-Nvy1ZEofAVp69F6Dy1I80oA18/`;

    //$message = urlencode("Name:".$name."\n Message : ".$message);
    //file_get_contents(url."sendmessage?text=".$message."&chat_id=".$chat_id."&parse_mode=HTML");

    setLoading(true);
    setTimeout(() => {
      try {
        const send = `${tele2}sendMessage?text=${data}&chat_id=${chat_id}&parse_mode=HTML`;

        // Telegram
        const response = fetch(send, {
          method: "POST",
        });

        // Firebase dB
        const newPostKey = push(child(ref(database), "posts")).key;
        const updates = {};
        updates["/" + newPostKey] = details;
        return update(ref(database), updates);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        setDetails({
          name: "",
          address: "",
          phone: "",
          state: "",
          city: "",
          package: "",
          coords: [],
        });
      }
    }, 3000);
  };

  const fieldClass = "flex flex-col gap-4 text-[16px]";
  const inputClass = "rounded-[8px] p-2 outline-none";

  return (
    <>
      <main className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-[620px] w-[100%]"
        >
          <div className={fieldClass}>
            <label className="font-medium">Full Name:</label>
            <input
              type="text"
              value={details.name}
              id="name"
              onChange={(e) => handleChange(e)}
              className={inputClass}
              required
            />
          </div>

          <div className={fieldClass}>
            <label className="font-medium">Address:</label>
            <input
              type="text"
              value={details.address}
              id="address"
              onChange={(e) => handleChange(e)}
              className={inputClass}
              required
            />
          </div>

          <div className={fieldClass}>
            <label className="font-medium">Phone number:</label>
            <input
              type="text"
              value={details.phone}
              id="phone"
              onChange={(e) => handleChange(e)}
              className={inputClass}
              required
            />
          </div>

          <div className={fieldClass}>
            <label className="font-medium">State:</label>
            <input
              type="text"
              value={details.state}
              id="state"
              onChange={(e) => handleChange(e)}
              className={inputClass}
              required
            />
          </div>

          <div className={fieldClass}>
            <label className="font-medium">City:</label>
            <input
              type="text"
              value={details.city}
              id="city"
              onChange={(e) => handleChange(e)}
              className={inputClass}
              required
            />
          </div>

          <div className={fieldClass}>
            <label className="font-medium">
              Package:
              <br />
              <span className="text-[14px] font-normal text-[#89949e]">
                Select the Equipment type you wish to purchase
              </span>
            </label>

            <select
              value={details.package}
              id="package"
              onChange={(e) => handleChange(e)}
              className={inputClass}
              required
            >
              <option
                className="p-4"
                value=""
              >{`-- Select type of package --`}</option>
              <option
                className="p-4"
                value="SoHo1"
              >{`SoHo1  -  [2-5]km`}</option>
              <option value="SoHo2">{`SoHo2  -  [1-2]km`}</option>
              <option value="Galaxy">{`Galaxy  - [3-7]km`}</option>
              <option value="miCRO">{`miCRO  -  [1]km`}</option>
              <option value="sPOT">{`sPOT  -   [1]km`}</option>
              <option value="Ts-1">{`Ts-1  -   [hospot]`}</option>
            </select>
          </div>

          <div className={fieldClass}>
            <label className="font-medium">GPS Location:</label>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                value={details.coords}
                id="coords"
                onChange={() => getPosition()}
                className={inputClass}
              />
              <div
                onClick={() => getPosition()}
                className="bg-[#2e2e2e] rounded-[8px] w-12 h-10 cursor-pointer flex items-center justify-center"
              >
                <svg
                  style={{ color: "white" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="8px"
                >
                  <path
                    d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </div>
            {/* <button onClick={() => getLocation()}> &rarr; </button> */}
          </div>

          <div className="flex justify-center mt-8">
            <button
              className="bg-main_tint border-main_tint hover:bg-main_tint hover:border-main_tint max-w-[140px] w-[100%] whitespace-nowrap border-solid border-[1px] text-[18px] text-white font-medium font-rubik tracking-[.02em] leading-7 rounded-[8px] py-[8px] px-[8px]"
              ref={submitBtn}
            >
              {!loading ? btnText : <Loader />}
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Register;
