import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";

import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const VolunteerRulesAndCopyright = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;
  const photo = user?.photoURL;

  const handleReportViolation = async (e) => {
    e.preventDefault();
    const form = e.target;
    const report = form.report.value;
    const name = form.name.value;
    const later = { report, name, email, photo };
    try {
      const response = await axiosSecure.post(`/copy`, later);
      if (response.data.insertedId) {
        toast.success("Report successfully send");
      }
      form.reset();
    } catch (error) {
      toast.error("Report can not sent");
    }
    document.getElementById("my_modal_2").close();
  };
  return (
    <div className="flex justify-center my-4">
      <Helmet>
        <title>Unity Quest-Rules & Copyright</title>
      </Helmet>
      <div className="space-y-6 md:w-3/5 lg:w-1/2 border p-4">
        <img
          className="h-60 flex justify-center"
          src="https://i.ibb.co/1Z99VrJ/copy.png"
          alt="Copyright"
        />
        <h2 className="text-lg font-semibold mb-2">Volunteer Rules</h2>
        <ol className="list-decimal list-inside">
          <li>
            Respect others: Treat fellow volunteers, staff, and community
            members with kindness and consideration.( অন্যদেরকে সম্মান করুন:
            সহকর্মী, কর্মী, এবং সম্প্রদায়ের সদস্যদের সম্মান ও ভালোবাসার সাথে
            প্রতিষ্ঠা করুন।)
          </li>
          <li>
            Follow instructions: Adhere to instructions provided by project
            leaders and coordinators.( নির্দেশিকা অনুসরণ করুন: প্রকল্প নেতাদের
            এবং সমন্বয়কারীদের প্রদত্ত নির্দেশনাগুলি মেনে চলুন।)
          </li>
          <li>
            Safety first: Prioritize safety by wearing appropriate gear and
            following safety guidelines.( সুরক্ষা প্রথম: উপযুক্ত গিয়ার পরিধান
            করুন এবং সুরক্ষা নির্দেশিকা অনুসরণ করুন।)
          </li>
          <li>
            Communicate effectively: Keep communication clear and open with
            project leaders and team members.( কার্যকর যোগাযোগ: প্রকল্প নেতাদের
            এবং দলের সদস্যদের সাথে যোগাযোগ স্থির এবং খোলামেলা রেখে রাখুন। )
          </li>
          <li>
            Commitment: Fulfill commitments and responsibilities to the best of
            your ability.( প্রতিশ্রুতি: সম্ভাব্যতা অনুযায়ী প্রতিশ্রুতি এবং
            দায়িত্ব প্রদান করুন।)
          </li>
        </ol>
        <h2 className="text-lg font-semibold mt-4 mb-2">Copyright Notice</h2>
        <p>
          All content and designs displayed on this website are protected by
          copyright law © [2024] [Volunteer Hub]. All rights reserved. Any
          unauthorized use, reproduction, or distribution of the content without
          prior written permission is strictly prohibited.( এই ওয়েবসাইটে
          প্রদর্শিত সমস্ত বিষয়বস্তু এবং ডিজাইনগুলি কপিরাইট আইনের অধীনে সুরক্ষিত
          আছে © [2024] [ভলান্টিয়ার হাব]। সমস্ত অধিকার সংরক্ষিত। পূর্বের লেখা
          অনুমতি ছাড়া সামগ্রীর অনুমতি ছাড়া, প্রতিকৃতি, বা বিতরণ ক্রমাগত
          নিষিদ্ধ।)
        </p>
        <p className="mt-4">
          Any violation of copyright law or volunteer rules will result in
          appropriate action being taken. If you suspect a violation, please
          report it.
          <button
            className="btn  btn-link"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            here
          </button>
          <dialog
            id="my_modal_2"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <form onSubmit={handleReportViolation}>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Your Name"
                  className="w-full mb-4 rounded-lg text-black "
                />
                <textarea
                  name="report"
                  id=""
                  className="rounded-lg text-black w-full"
                  placeholder="Your report only (250)words"
                  maxLength={250}
                  rows="8"
                ></textarea>
                <button
                  type="submit"
                  onClick={() => document.getElementById("my_modal_2").close()}
                  className="btn text-md bg-gradient-to-r from-cyan-500 to-green-500 text-white"
                >
                  submit
                </button>
              </form>
            </div>
          </dialog>
        </p>
      </div>
    </div>
  );
};

export default VolunteerRulesAndCopyright;
