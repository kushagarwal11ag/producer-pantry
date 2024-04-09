import React from "react";
import Image from "next/image";
import profile2 from "../../../public/profile2.jpg";
import gov from "../../../public/gov.png";

const ProfilePage = () => {
  return (
    <>
      <div className="w-11/12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-9">Profile information</h2>
        <div className="flex gap-6">
          <div className="border border-[#454664] p-10 rounded-lg flex flex-col gap-6 max-h-64 w-1/4 items-center">
            <Image src={profile2} alt="User Avatar" className="w-32 h-32 rounded-full" />
            <label htmlFor="file" className=" cursor-pointer">Replace image</label>
            <input type="file" id="file" className="hidden"/>
          </div>
          <div className="flex-1 flex flex-col gap-4 mt-[-32px]">
            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-2 flex-1">
                <label>First name</label>
                <input
                  placeholder="Robert"
                  type="text"
                  className="p-2 border border-[#454664] rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label>Last name</label>
                <input
                  placeholder="Swein"
                  type="text"
                  className="p-2 border border-[#454664] rounded-lg"
                />
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-2 flex-1">
                <label>Email</label>
                <input
                  placeholder="Robert@gmail.com"
                  type="email"
                  className="p-2 border border-[#454664] rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label>Phone Number</label>
                <input
                  placeholder="9898989898"
                  type="number"
                  className="p-2 border border-[#454664] rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Address</label>
              <textarea
                rows={3}
                placeholder="Address"
                className="p-2 border border-[#454664] rounded-lg resize-none"
              />
            </div>

            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-2 flex-1">
                <label>Gov. ID</label>
                <div className="p-2 border border[#454664] rounded-lg">
                  <Image src={gov} alt="Government identification" className="" />
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label>Certificate</label>
                <div className="p-2 border border[#454664] rounded-lg">
                  <Image src={gov} alt="Certification" className="" />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-[green] text-white p-2 rounded-lg">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
