import MyInput from "@components/Common/FormComponent/MyInput";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import provinceApi from "../../app/api/provincesApi";
import { getCookie, setCookie } from "../../app/utils/cookie";
import MySelection from "../../components/Common/FormComponent/MySelection";
import { CHECKOUT_INFOR } from "../../definitions/constants";

const schema = yup.object().shape({
  customer_email: yup.string().required("*Vui lòng nhập email"),
  customer_name: yup.string().required("*Vui lòng nhập tên"),
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  address: yup.string().required("*Vui lòng nhập tên đường/số nhà"),
  province: yup
    .string()
    .test(
      "empty-check",
      "*Vui lòng chọn Tỉnh/ Thành Phố",
      (data) => data.length !== 0
    ),
  ward: yup
    .string()
    .test(
      "empty-check",
      "*Vui lòng chọn Phường/ Xã",
      (data) => data.length !== 0
    ),
  district: yup
    .string()
    .test(
      "empty-check",
      "*Vui lòng chọn Quận/ Huyện",
      (data) => data.length !== 0
    ),
  // province: yup.string().typeError("chưa chọn").strict(true).validateSync("")
});

export default function InfoForm({ handleCheckout, children }) {
  let {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function setCheckoutInformation() {
    let provinces = await provinceApi.getAllProvinces();
    setListProvinces(provinces);
    try {
      let checkoutInfor = JSON.parse(getCookie(CHECKOUT_INFOR));
      const {
        customer_email,
        customer_name,
        address,
        district,
        ward,
        phone,
        province,
      } = checkoutInfor;
      setValue("customer_email", customer_email);
      setValue("customer_name", customer_name);
      setValue("phone", phone);
      setValue("address", address);

      let customerProvince = provinces.find((e) => e.name === province);
      let districts = await provinceApi.getDistricts(customerProvince.id);
      let customerDistrict = districts.find((e) => e.name === district);
      let wards = await provinceApi.getWards(customerDistrict.id);
      let customerWard = wards.find((e) => e.name === ward);
      setListDistricts(districts);
      setListWards(wards);
      // setValue("province", province);
      // setValue("ward", ward);
      // setValue("district", district);
      setDefaultProvinceData({
        province: customerProvince,
        district: customerDistrict,
        ward: customerWard,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    (() => {
      setCheckoutInformation();
    })();
  }, []);

  function onSaveData(data) {
    // handleCheckout(data);
    setCookie(CHECKOUT_INFOR, JSON.stringify(data), 365);
    const {
      customer_email,
      customer_name,
      address,
      district,
      ward,
      phone,
      province,
    } = data;
    handleCheckout({
      customer_email,
      customer_name,
      phone,
      address: `${address}, ${ward}, ${district}, ${province}`,
    });
  }

  async function getDistricts(provinceId) {
    let districts = await provinceApi.getDistricts(provinceId);
    setListDistricts(districts);
  }
  async function getWards(districtId) {
    let wards = await provinceApi.getWards(districtId);
    setListWards(wards);
  }

  // useEffect(() => {
  //   getProvinces();
  // }, [])

  const [listProvinces, setListProvinces] = useState([]);
  const [listDistricts, setListDistricts] = useState([]);
  const [listWards, setListWards] = useState([]);
  const [defaultProvinceData, setDefaultProvinceData] = useState({
    province: "",
    disctrict: "",
    ward: "",
  });

  return (
    // <PublicLayout>
    <div className="w-full">
      <form onSubmit={handleSubmit(onSaveData)}>
        <MyInput
          title="Tên của bạn"
          extendClass="mb-6"
          register={register}
          name="customer_name"
          errors={errors}
        />
        <MyInput
          type="email"
          title="Địa chỉ email"
          extendClass="mb-6"
          register={register}
          name="customer_email"
          errors={errors}
        />
        <MyInput
          title="Số điện thoại"
          name="phone"
          type="number"
          extendClass="mb-6"
          register={register}
          errors={errors}
        />
        <div className="sm:grid sm:grid-cols-2 gap-x-10">
          <MySelection
            // defaultValue={variantId}
            extendClass="mb-6"
            options={listProvinces}
            title="Tỉnh/ Thành phố"
            name="province"
            defaultText="Chọn Tỉnh/ Thành phố"
            errors={errors}
            register={register}
            defaultValue={defaultProvinceData.province}
            customError="Bạn chưa chọn"
            fieldToRender="name"
            fieldValue="name"
            onSelect={(option) => {
              getDistricts(option.id);
            }}
          />
          <MySelection
            // defaultValue={variantId}
            extendClass="mb-6"
            options={listDistricts}
            name="district"
            defaultText="Chọn Quận/ Huyện"
            register={register}
            errors={errors}
            title="Quận/ huyện"
            fieldToRender="name"
            fieldValue="name"
            defaultValue={defaultProvinceData.district}
            onSelect={(option) => {
              getWards(option.id);
            }}
          />
          <MySelection
            // defaultValue={variantId}
            name="ward"
            register={register}
            defaultText="Chọn Phường/ Xã"
            extendClass="mb-6"
            errors={errors}
            options={listWards}
            title="Phường/ Xã"
            fieldToRender="name"
            fieldValue="name"
            defaultValue={defaultProvinceData.ward}
            onSelect={(option) => {}}
          />
          <MyInput
            title="Địa chỉ nhà"
            name="address"
            extendClass="mb-6"
            register={register}
            errors={errors}
            placeholder="Số nhà và tên đường"
          />
        </div>
        {/* <MyTextarea
                    rows={5}
                    title="Ghi chú"
                    name="note"
                    extendClass="mb-6"
                    // register={register}
                    errors={errors}
                    placeholder="Số nhà và tên đường"
                /> */}

        {children}
        <div className="mb-8 mt-6">
          <input
            type="submit"
            className="cursor-pointer bg-primary inline-block text-sm py-4 px-4 text-gray-50 uppercase hover:bg-gray-800 transition duration-500 ease-linear w-full"
            value="ĐẶT HÀNG"
          />
        </div>
      </form>
    </div>
    // </PublicLayout>
  );
}
