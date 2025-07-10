import Link from "next/link";
import clientPromise from "@/lib/mongodb";
export default async function Page({ params }) {
  const { username } = await params;
  const clint = await clientPromise;
    const db = clint.db("Linktree");
    const collection = db.collection("Links");

    const item  = await collection.findOne({username: params.username})



  return (
    <>
      {!item && <section className="min-h-screen bg-[#224918]   flex justify-center items-center  py-11 px-6"><Link href="/generate"><button className="bg-gray-900 hover:bg-gray-800 py-5 px-7 text-lg cursor-pointer text-white rounded-full">Creat your account first</button></Link> </section>}
      {item && <section className="min-h-screen bg-[#224918]   flex justify-center  py-11 px-6">
        <div className="flex flex-col items-center gap-2">
          <img
            className="w-30 h-30  rounded-full"
            src={item.profilepic}
            alt=""
          />
          <p className="text-lg font-bold text-[#d2e823]">@{item.handel}</p>
          <p className="text-center w-80 font-semibold text-[#d2e823]">
            {item.bio}
          </p>

          {item.links.map((item, i) => {
            return (
              <Link
                target="_blanck"
                key={i}
                href={item.link}
                className="links shadow-md hover:w-[460px] hover:text-lg shadow-black [@media(max-width:613px)]:w-[90vw] [@media(max-width:613px)]:hover:w-[91vw] flex items-center justify-center text-xl font-semibold text-gray-500 bg-[#d2e823] h-16 rounded-2xl w-[450px] mt-2">{item.text}</Link>
            );
          })}
        </div>
      </section>}
    </>
  );
}
