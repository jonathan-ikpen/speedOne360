import { useState, useEffect, useRef } from "react";
import { database } from "../utils/firebase";
import { ref, push, child, update } from "firebase/database";
import Loader from "../components/Loader/index.jsx";
import Spinner from "../components/Loader/spinner";
import getLeo from "../utils/geolocation";

const packages = [
  {
    name: "Ts-1",
    distance: "[hospot]",
    price: "₦25, 000",
  },

  {
    name: "sPOT",
    distance: "[1]km",
    price: "₦45, 000",
  },

  {
    name: "miCRO",
    distance: "[1]km",
    price: "₦65, 000",
  },

  {
    name: "SoHo2",
    distance: "[1-2]km",
    price: "₦98, 950",
  },

  {
    name: "SoHo1",
    distance: "[2-5]km",
    price: "₦150, 000",
  },

  {
    name: "Galaxy",
    distance: "[3-7]km",
    price: "₦200, 000",
  },

  // {
  //   name: "Tsx",
  //   distance: "",
  //   price: "₦15, 000",
  // },
];

const Packages = ({ packages }) => {
  const options = packages.map(({ name, distance, price }) => (
    <option
      key={name}
      value={name}
      price={price}
    >{`${name}  -  ${distance}`}</option>
  ));
  return options;
};

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [choice, setChoice] = useState();
  const submitBtn = useRef();
  const packageRef = useRef();

  let btnText = "Submit";

  const handleDate = () => {
    let current = new Date();
    let cDate =
      current.getFullYear() +
      "-" +
      (current.getMonth() + 1) +
      "-" +
      current.getDate();
    let cTime =
      current.getHours() +
      ":" +
      current.getMinutes() +
      ":" +
      current.getSeconds();
    return cDate + " || " + cTime;
  };

  const [details, setDetails] = useState({
    name: "",
    address: "",
    phone: "",
    state: "",
    city: "",
    package: "",
    coords: [],
    date: handleDate(),
  });

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setDetails({
          ...details,
          coords: [latitude, longitude],
        });
      });
    } else {
      getLeo().then((d) => {
        const { latitude, longitude } = d;
        setDetails({
          ...details,
          coords: [latitude, longitude],
        });
      });
    }
  };

  const findPrice = () => {
    const pack = packages.find((p) => details.package == p.name);
    setChoice(pack);
  };

  useEffect(() => {
    getPosition();
    getLeo();
  }, []);

  useEffect(() => {
    findPrice();
  }, [details.package]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    // if (id == "package") findPrice();

    setDetails({ ...details, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formObj = {
      ...details,
      packagePrice: choice.price,
    };

    console.log(choice.price);
    console.log(formObj);

    // const data = JSON.stringify(details, null, 2);
    const data = JSON.stringify(formObj, null, 2);

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
        console.log(response);

        // Firebase dB
        const newPostKey = push(child(ref(database), "posts")).key;
        const updates = {};
        updates["/" + newPostKey] = formObj;
        return update(ref(database), updates);

        // Modal
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
              Equipment Package:
              <br />
              <span className="text-[14px] font-normal text-[#89949e]">
                Select the Equipment type you wish to purchase
              </span>
            </label>

            <select
              value={details.package}
              id="package"
              onChange={(e) => {
                handleChange(e);
              }}
              className={inputClass}
              required
              ref={packageRef}
            >
              <option className="p-4">{`-- Select type of package --`}</option>
              <Packages packages={packages} />
            </select>
          </div>

          <div className={fieldClass}>
            <label className="font-medium">Price:</label>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                value={choice?.price || ""}
                // id="packagePrice"
                // onChange={(e) => handleChange(e)}
                className={inputClass}
                readOnly={true}
              />
            </div>
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
