import Image from "next/image";
import defaultProfile from "../../../public/defaultProfile.svg";

const UserProfile = () => {
  return (
    <>
      <div class="w-full  px-4 mx-auto">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg mt-16">
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4 flex justify-center">
                <div class="relative">
                  <Image
                    name="avatar"
                    src={defaultProfile}
                    alt="User Profile Image"
                    width={200}
                    height={200}
                    className="w-52 h-52 m-7 rounded-full object-cover"
                  />
                </div>
              </div>
            
            </div>
            <div class="text-center ">
              <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                Jenna Stones
              </h3>
              <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
              </div>
              <div class="mb-2 text-blueGray-600 mt-10">
                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager - Creative Tim Officer
              </div>
              <div class="mb-2 text-blueGray-600">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                University of Computer Science
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                  <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                  <a
                    href="javascript:void(0);"
                    class="font-normal text-pink-500"
                  >
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
