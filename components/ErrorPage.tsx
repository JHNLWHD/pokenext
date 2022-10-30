/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function ErrorPage() {
  const router = useRouter()
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-16 px-4 py-24 md:gap-28 md:py-20 md:px-44 lg:flex-row lg:px-24 lg:py-24">
      <div className="relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-24">
        <div className="relative">
          <div className="absolute z-20">
            <div className="">
              <h1 className="my-2 text-2xl font-bold text-gray-800">
                Looks like you've found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800">
                Sorry about that! You can go back to the previous page.
              </p>
              <button
                onClick={() => router.back()}
                className="md my-2 rounded border bg-indigo-600 py-4 px-8 text-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 sm:w-full lg:w-auto"
              >
                Take me there!
              </button>
            </div>
          </div>
          <div>
            <Image
              src="https://i.ibb.co/G9DC8S0/404-2.png"
              alt="logo"
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
      <div>
        <Image
          src="https://i.ibb.co/ck1SGFJ/Group.png"
          alt="image"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}
