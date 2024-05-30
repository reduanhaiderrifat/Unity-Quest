
import Payment from "./Payment";
import { useEffect, useState } from "react";

const Donate = () => {
  const [donates, setDonates] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL_SERVER}/donates`)
      .then((res) => res.json())
      .then((data) => {
        setDonates(data);
        console.log(data);
      });
  }, []);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {donates.map((donate) => (
        <div
          key={donate._id}
          className=" border space-y-12 bg-[#553739] rounded-2xl"
        >
          <div className="relative">
            <img
              className="rounded-t-2xl"
              src={donate?.image}
              alt=""
            />
            <h2 className=" absolute top-4 text-xl text-white rounded-full left-2 bg-[#5B5857] pb-2 pt-2 px-6">
              SOCIAL
            </h2>
            <div className="absolute bg-white py-1 px-4 pl-2 text-white rounded-full  w-2/3 left-[13%]">
              <div className="flex bg-[#9C914F] py-1 px-4  rounded-full items-center justify-between">
                <p>COLLECTED</p> <p>90%</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="px-5  text-white">
              <h2 className="text-xl font-bold mb-3">{donate?.title}</h2>
              <p>
             {donate?.description}
              </p>

              <div className="flex items-center gap-4 mt-12">
                <p>Donate For change life :</p>
                <p>$100</p>
              </div>
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn w-full my-6 transition-all hover:-translate-y-3 bg-[#955E42] border-none rounded-full text-xl text-white hover:bg-white hover:text-[#955E42] font-semibold"
              >
                DONATE NOW
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box text-black">
                  <Payment />
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-0">
                        ✕
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Donate;

