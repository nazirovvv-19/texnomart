import React, { useState } from "react";
import { Button, Modal, message } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import UserIcon from "../icons/user-stroke-rounded (1)";

function Kirish() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState("ism_nomer");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    axios
      .post("https://gateway.texnomart.uz/api/common/v1/user/register", data)
      .then((response) => {
        console.log("Server javobi:", response.data);
        message.success("Kod yuborildi!");
        setStep("sms_kod");
      })
      .catch((error) => {
        console.error("Error:", error);
        message.error("Xatolik yuz berdi!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <UserIcon
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer"
      />
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
      >
        {step === "ism_nomer" ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <p className="text-xl text-center">Kirish va ro'yxatdan o'tish</p>

        
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Telefon
                </label>
                <input
                  className="border-2 p-2 rounded-lg border-yellow-400 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 no-spinner"
                  type="number"
                  placeholder="Telefon raqamingiz"
                  {...register("phone", {
                    required: "Telefon raqam majburiy!",
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

      
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Ismingiz
                </label>
                <input
                  className="border-2 p-2 rounded-lg border-yellow-400 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  type="text"
                  placeholder="Ismingiz"
                  {...register("name", { required: "Ism majburiy!" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <Button
                htmlType="submit"
                loading={loading}
                style={{
                  backgroundColor: "#facc15",
                  color: "black",
                  border: "none",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                Kodni yuborish
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-xl">SMS kodni kiriting</p>
            <input
              className="border-2 p-2 outline-0 rounded-lg border-yellow-400 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 no-spinner"
              type="number"
              placeholder="Parolni kiriting"
            />
            <Button
              style={{
                backgroundColor: "#facc15",
                color: "black",
                border: "none",
                marginTop: "10px",
                width: "100%",
              }}
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Tasdiqlash
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Kirish;
