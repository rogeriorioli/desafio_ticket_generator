"use client";
import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { roboto, space } from "@/app/fonts";
import { useUserContext } from "@/app/context/useContext";

const Ticket = () => {
  const { user } = useUserContext();
  return (
    <div className={`lg:w-full h-full lg:p-11 p-2 ${style.ticketWrapper}`}>
      <div className="card flex lg:flex-row flex-col">
        <div className={`lg:w-3/5 ${style.eventLogo}`}></div>
        <div className={`lg:w-2/5 bg-gray-light p-4`}>
          <div className="flex flex-col">
            <div className="flex justify-center lg:w-full">
              <Image
                src={user.avatar_url}
                className="rounded-full mb-1"
                width={128}
                height={128}
                alt={user.name}
              />
            </div>
            <div className="flex justify-center flex-col text-center">
              <p
                className={`gap-2 text-purple-normal uppercase ${space.className}`}
              >
                Tripulante
              </p>
              <p
                className={`text-gray-dark font-semibold  ${roboto.className}`}
              >
                {user.name}
              </p>
            </div>
            <div className="flex mt-6">
              <div
                className={`w-1/2 text-xs uppercase  font-semibold ${space.className}`}
              >
                evento <br /> data <br /> hora
              </div>
              <div
                className={`w-1/2 text-xs uppercase  font-semibold ${space.className}`}
              >
                ia para devs
                <br /> 14 — 16 ago. 2023 <br />
                ao vivo — 19h
              </div>
            </div>
            <div className="mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="234"
                height="16"
                viewBox="0 0 234 16"
                fill="none"
              >
                <path
                  d="M233.881 0.414368H228.979V15.2379H233.881V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M225.864 0.414368H221.11V15.2379H225.864V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M217.847 0.414368H213.242V15.2379H217.847V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M209.831 0.414368H205.372V15.2379H209.831V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M201.81 0.414368H197.501V15.2379H201.81V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M193.797 0.414368H189.634V15.2379H193.797V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M185.777 0.414368H181.763V15.2379H185.777V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M177.76 0.414368H173.893V15.2379H177.76V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M169.74 0.414368H166.023V15.2379H169.74V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M161.727 0.414368H158.156V15.2379H161.727V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M153.707 0.414368H150.285V15.2379H153.707V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M145.69 0.414368H142.415V15.2379H145.69V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M137.673 0.414368H134.548V15.2379H137.673V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M129.656 0.414368H126.677V15.2379H129.656V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M121.636 0.414368H118.807V15.2379H121.636V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M113.623 0.414368H110.939V15.2379H113.623V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M105.603 0.414368H103.069V15.2379H105.603V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M97.5857 0.414368H95.1985V15.2379H97.5857V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M89.5723 0.414368H87.3314V15.2379H89.5723V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M81.5517 0.414368H79.4606V15.2379H81.5517V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M73.5357 0.414368H71.5908V15.2379H73.5357V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M65.5185 0.414368H63.7233V15.2379H65.5185V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M57.5018 0.414368H55.8529V15.2379H57.5018V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M49.482 0.414368H47.9827V15.2379H49.482V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M41.4684 0.414368H40.1155V15.2379H41.4684V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M33.4481 0.414368H32.2448V15.2379H33.4481V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M25.4315 0.414368H24.3745V15.2379H25.4315V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M17.4147 0.414368H16.5073V15.2379H17.4147V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M9.39814 0.414368H8.63708V15.2379H9.39814V0.414368Z"
                  fill="#202024"
                />
                <path
                  d="M1.37786 0.414368H0.766479V15.2379H1.37786V0.414368Z"
                  fill="#202024"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
