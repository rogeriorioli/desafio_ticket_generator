"use client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { roboto, space } from "../../fonts";
import axios from "axios";
import { useUserContext } from "@/app/context/useContext";
import html2canvas from "html2canvas";

const Form = () => {
  const { updateUser } = useUserContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [message, setMessage] = useState("");
  const [statusClass, setStatusClass] = useState("");
  const [status, setStatus] = useState(false);
  const createImageFromDiv = async (e: any) => {
    e.preventDefault();
    const card: HTMLElement | null = document.querySelector(
      ".style_ticketWrapper__oK_rX"
    );

    if (card) {
      try {
        const canvas = await html2canvas(card);
        canvas.toBlob((blob) =>
          //@ts-ignore
          window.open(URL.createObjectURL(blob), "_blank")
        );
      } catch (error) {
        console.error("Error creating image:", error);
      }
    }
  };
  const handleInputValue = async (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      await axios
        .get(`https://api.github.com/users/${inputRef.current.value}`)
        .then((success) => {
          const { data } = success;
          updateUser({
            name: data.name,
            avatar_url: data.avatar_url,
          });

          setStatus(true);
          setStatusClass(`text-gray-light uppercase ${space.className}`);
          setMessage("ticket criado com sucesso");
        })
        .catch((err) => {
          setStatus(false);
          setStatusClass(`text-danger ${roboto.className}`);
          setMessage("Usuário inválido. Verifique e tente novamente.");
          if (inputRef.current) {
            inputRef.current.value = "";
          }
        });
    }
  };

  return (
    <div className="form-container">
      <form>
        <div className={`${style.inputContainer} bg-gray-light my-4`}>
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M10 1.56909C5.16797 1.56909 1.25 5.58862 1.25 10.5417C1.25 14.5066 3.75781 17.866 7.23438 19.0535C7.28314 19.0641 7.33291 19.0693 7.38281 19.0691C7.70703 19.0691 7.83203 18.8308 7.83203 18.6238C7.83203 18.4089 7.82422 17.8464 7.82031 17.0964C7.53088 17.1643 7.23478 17.1997 6.9375 17.2019C5.25391 17.2019 4.87109 15.8933 4.87109 15.8933C4.47266 14.8582 3.89844 14.5808 3.89844 14.5808C3.13672 14.0457 3.89453 14.03 3.95312 14.03H3.95703C4.83594 14.1082 5.29688 14.9597 5.29688 14.9597C5.73438 15.7253 6.32031 15.9402 6.84375 15.9402C7.18986 15.9333 7.53061 15.8534 7.84375 15.7058C7.92188 15.1277 8.14844 14.7332 8.39844 14.5066C6.45703 14.28 4.41406 13.5105 4.41406 10.073C4.41406 9.09253 4.75391 8.29175 5.3125 7.66675C5.22266 7.44019 4.92188 6.52612 5.39844 5.29175C5.46236 5.27645 5.52806 5.26988 5.59375 5.27222C5.91016 5.27222 6.625 5.39331 7.80469 6.21362C9.2381 5.81257 10.7541 5.81257 12.1875 6.21362C13.3672 5.39331 14.082 5.27222 14.3984 5.27222C14.4641 5.26988 14.5298 5.27645 14.5938 5.29175C15.0703 6.52612 14.7695 7.44019 14.6797 7.66675C15.2383 8.29565 15.5781 9.09643 15.5781 10.073C15.5781 13.5183 13.5312 14.2761 11.582 14.4988C11.8945 14.7761 12.1758 15.323 12.1758 16.1589C12.1758 17.3582 12.1641 18.3269 12.1641 18.6199C12.1641 18.8308 12.2852 19.0691 12.6094 19.0691C12.6619 19.0693 12.7142 19.0641 12.7656 19.0535C16.2461 17.866 18.75 14.5027 18.75 10.5417C18.75 5.58862 14.832 1.56909 10 1.56909Z"
                fill="#202024"
              />
            </svg>
          </div>
          <input
            type="text"
            name="username"
            ref={inputRef}
            placeholder="Nome de usuário"
            className={`bg-transparent w-full ${style.input}`}
          />
        </div>
        <p className={`${statusClass}  flex flex-row  items-center`}>
          {status && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              className="mr-2"
            >
              <path
                d="M29.0666 15.4716V16.6983C29.065 19.5735 28.134 22.3712 26.4124 24.674C24.6909 26.9769 22.271 28.6616 19.5138 29.4768C16.7565 30.292 13.8096 30.1941 11.1126 29.1977C8.41554 28.2013 6.11284 26.3597 4.54791 23.9477C2.98299 21.5356 2.23968 18.6823 2.42887 15.8133C2.61805 12.9443 3.72957 10.2134 5.59767 8.02769C7.46577 5.84202 9.99035 4.31877 12.7949 3.68513C15.5994 3.05148 18.5337 3.34138 21.16 4.5116"
                stroke="#04D361"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M29.0665 6.03162L15.7332 19.3783L11.7332 15.3783"
                stroke="#04D361"
                stroke-width="2"
                stroke-linejoin="round"
              />
            </svg>
          )}
          {message}
        </p>
        {status ? (
          <button
            className="bg-purple-normal hover:bg-purple-dark text-gray-light uppercase w-full py-3 mt-4"
            onClick={createImageFromDiv}
          >
            <span className={roboto.className}>FAZER DOWload</span>
          </button>
        ) : (
          <button
            className="bg-purple-normal hover:bg-purple-dark text-gray-light uppercase w-full py-3 mt-4"
            onClick={handleInputValue}
          >
            <span className={roboto.className}>Gerar meu ticket</span>
          </button>
        )}
      </form>
    </div>
  );
};

export default Form;
