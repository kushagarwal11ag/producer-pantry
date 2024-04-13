"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Popover } from "antd";
import axios from "axios";

import defaultProfile from "../../../public/defaultProfile.svg";

const ProductDesc = ({ cropId }) => {
  const [crop, setCrop] = useState(null);

  useEffect(() => {
    const fetchCrop = async () => {
      try {
        const fetchedCrop = await axios.get(`/api/v1/crops/crop/${cropId}`, {
          withCredentials: true,
        });
        const cropDetails = fetchedCrop?.data?.data?.[0];
        setCrop(cropDetails);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCrop();
  }, [cropId]);

  const content = (
    <div>
      <p>Edit</p>
      <p>Delete</p>
    </div>
  );

  const timeLapsed = (createdAt) => {
    const givenDate = new Date(createdAt);
    const currentDate = new Date();
    const differenceInDays = (currentDate - givenDate) / (24 * 60 * 60 * 1000);
    return Math.floor(differenceInDays);
  };

  return (
    <>
      {crop && (
        <div class="">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg   mb-4">
                  <Image
                    src={crop.image}
                    width={500}
                    height={700}
                    objectFit="cover"
                    alt="Crop image"
                  />{" "}
                </div>
              </div>
              <div class="md:flex-1 px-4">
                <div className="flex justify-between">
                  <h2 class="text-2xl font-bold text-gray-800  mb-2">
                    Product Name
                  </h2>
                  <div>
                    <Popover content={content}  placement="bottom">
                     
					<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots-vertical" fill="currentColor">
  <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
</svg>
                     
                    </Popover>
                  </div>
                </div>

                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  <p className="">{crop.name}</p>
                </p>
                <div class="flex mb-4">
                  <div class="mr-4">
                    <span class="font-bold text-gray-700 ">Price:</span>
                    <span class="text-gray-600 ">${crop.price}</span>
                  </div>
                  <div>
                    <span class="font-bold text-gray-700 ">Availability:</span>
                    <span class="text-gray-600 ">
                      {crop.available ? "In Stock" : "Out of stock"}
                    </span>
                  </div>
                </div>
                <div class="mb-4">
                  <span class="font-bold text-gray-700 ">Quantity</span>
                  <div class="flex items-center mt-2">{crop.quantity}</div>
                </div>

                <div>
                  <span class="font-bold text-gray-700 ">
                    Product Description:
                  </span>
                  <p class="text-gray-600  text-sm mt-2">{crop.description}</p>
                </div>
                <hr className="opacity-8 mt-8"></hr>
                <button className="mt-4 flex gap-4 items-center">
                  <Image
                    src={crop.farmer?.avatar || defaultProfile}
                    width={48}
                    height={48}
                    alt="User avatar"
                    className="w-12 h-12 rounded-full object-cover "
                  />
                  <span>{crop.farmer?.name}</span>
                </button>
                <p className="my-7">
                  Created {timeLapsed(crop.createdAt)} days ago
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDesc;
