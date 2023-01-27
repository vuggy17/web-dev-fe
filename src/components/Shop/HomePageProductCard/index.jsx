import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { imageLoader } from "src/app/services";
import placeHolderImage from "@public/images/official/others/cannot-load.png";

export default function HPProductCard({ product }) {
    const {
        price,
        name,
        path,
        is_publish,
        // description,
        thumbnail,
        discount,
        maxDiscount,
        is_on_sale,
    } = product;

    let salePrice;
    if (is_on_sale) {
        salePrice = price * (1 - discount);
        if (price * discount > maxDiscount) salePrice = price - maxDiscount;
    }

    salePrice = salePrice?.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    });
    let Price = price?.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    });

    const SaleCard = (
        <div className="bg-black opacity-80 text-center text-white text-xs px-2 py-1 absolute top-2 right-2">
            {is_on_sale ? `-${discount * 100}%` : ""}
        </div>
    );

    const PreviousPrice = (
        <div className="mr-4 line-through opacity-80">
            {/**Neu co gia sale thi gia cu la gia price */}
            {Price}
        </div>
    );

    if (!is_publish) return null;
    return (
        <Link passHref href={`/product/${path}`}>
            <div className="flex flex-col items-center cursor-pointer mb-4 md:mb-2 truncate">
                <div className="relative w-full mb-3 overflow-hidden">
                    <div className="transition relative duration-300 ease-in transform hover:scale-110 w-full h-[192px] overflow-hidden">
                        <Image
                            className='w-full h-full '
                            alt={name}
                            src={thumbnail || placeHolderImage}
                            loader={thumbnail ? imageLoader : undefined}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    {salePrice && SaleCard}
                </div>

                <div className="text-gray-800 lg:text-lg ">
                    <p className="mb-2 uppercase text-center hover:text-textSecondary  transition-colors">
                        {name}
                    </p>

                    <div className="text-xs lg:text-sm font-light flex flex-wrap justify-center ">
                        {salePrice && PreviousPrice}
                        <div className={`${salePrice && "underline"}`}>
                            {salePrice ? `${salePrice}` : `${Price}`}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

