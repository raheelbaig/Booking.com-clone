import SearchForm from "@/components/SearchForm";
import { trending_data } from "@/data/trending";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#013894]">
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-5xl text-white">Find your Next Step</h2>
        <h3 className="text-white text-xl py-5">
          Search low prices hotels, homes and much more...
        </h3>
      </section>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl mt-10 p-6  bg-white rounded-t-xl">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destination</h3>
          <p className="font-light">
            Most popular choices for travellers from around the world
          </p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((items) => (
            <div className="space-y-1 shrink-0 cursor-pointer">
              <img
                key={items.id}
                className="w-80 h-72 object-cover rounded-xl pb-2"
                src={items.src}
                alt=""
              />
              <p className="font-bold">{items.title}</p>
              <p className="">{items.location}</p>
              <p className="font-light text-sm">{items.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
