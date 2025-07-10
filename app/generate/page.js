"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { fetchuser, fetchloginuser } from "../api/senddata/route";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const Generate = () => {
  const { data: session } = useSession();
  const usehParams = useSearchParams();
  const router = useRouter();

  // Initialize username with an empty string to avoid hydration mismatch
  const [username, setusername] = useState(""); // Empty string to avoid mismatch
  const [bio, setbio] = useState("");
  const [addlinks, setaddlinks] = useState([{ link: "", text: "" }]);
  const [handel, sethandel] = useState(usehParams.get("handel"));
  const [ppic, setppic] = useState("");

  // Update username once the session data is available
  useEffect(() => {
    if (session?.user?.name) {
      fetchData();
    }
  }, [session]);

  const fetchData = async () => {
    const response = await fetchuser(session?.user?.name);
    const loginresponse = await fetchloginuser(session?.user?.name);
    if (loginresponse.success === "true") {
      setusername(loginresponse.result.username);
    }
    if (response.success === "true") {
      setbio(response.result.bio);
      setaddlinks(response.result.links);
      setppic(response.result.profilepic);
      sethandel(response.result.handel);
    }
    // else {
    //   toast.error("Error fetching user data");
    // }
  };

  const handleChange = (index, link, text) => {
    setaddlinks((initialLinks) =>
      initialLinks.map((item, i) => {
        if (i === index) {
          return { link, text };
        } else {
          return item;
        }
      })
    );
  };

  const addLinks = () => {
    setaddlinks(addlinks.concat([{ text: "", link: "" }]));
  };

  const submitLinks = async () => {
    try {
      const response = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          bio: bio,
          profilepic: ppic,
          links: addlinks,
          handel: handel,
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success(result.message);
        setTimeout(() => {
          router.replace("/" + username);
        }, 2000);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <>
      <section className="bg-purple-300 min-h-[100vh] py-6">
        <div className="h-[650px] w-full md:w-3xl mx-auto px-4">
          <h1 className="text-center text-black py-7 text-4xl font-bold">
            Edit your profile
          </h1>
          <div className="h-[500px] custom-scrollbar overflow-auto">
            <div className="flex flex-col gap-1 mb-9">
              <label className="text-black font-bold mx-3" htmlFor="">
                Step 1: Username
              </label>
              <input
                className="bg-white text-black w-full rounded-2xl px-7 py-2"
                value={username || ""}
                onChange={(e) => setusername(e.target.value)}
                disabled
                type="text"
                placeholder="Enter your username"
              />
            </div>
            <div className="flex flex-col gap-1 mb-9">
              <label className="text-black font-bold mx-3" htmlFor="">
                Step 2: Name
              </label>
              <input
                className="bg-white text-black w-full rounded-2xl px-7 py-2"
                value={handel || ""}
                onChange={(e) => sethandel(e.target.value)}
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col gap-1 mb-9">
              <label className="text-black font-bold mx-3" htmlFor="">
                Step 3: Add Links
              </label>
              {addlinks &&
                addlinks.map((item, index) => {
                  return (
                    <div className="flex gap-1.5 mb-4" key={index}>
                      <input
                        className="bg-white text-black w-full rounded-2xl px-7 py-2"
                        value={item.text || ""}
                        onChange={(e) =>
                          handleChange(index, item.link, e.target.value)
                        }
                        type="text"
                        placeholder="Site Name"
                      />
                      <input
                        className="bg-white text-black w-full rounded-2xl px-7 py-2"
                        value={item.link || ""}
                        onChange={(e) =>
                          handleChange(index, e.target.value, item.text)
                        }
                        type="text"
                        placeholder="Site Link"
                      />
                    </div>
                  );
                })}
              <button
                onClick={() => addLinks()}
                className="bg-gray-800 hover:bg-gray-700 py-2 px-7 mx-auto cursor-pointer text-white rounded-2xl"
              >
                + Add more Links
              </button>
            </div>

            <div className="flex flex-col gap-1 mb-9">
              <label className="text-black font-bold mx-3" htmlFor="">
                Step 4: Profile Picture
              </label>
              <input
                className="bg-white text-black w-full rounded-2xl px-7 py-2"
                value={ppic || ""}
                onChange={(e) => setppic(e.target.value)}
                type="text"
                placeholder="Enter your profile picture URL"
              />
            </div>
            <div className="flex flex-col gap-1 mb-9">
              <label className="text-black font-bold mx-3" htmlFor="">
                Step 5: Bio
              </label>
              <input
                className="bg-white text-black w-full rounded-2xl px-7 py-2"
                value={bio || ""}
                onChange={(e) => setbio(e.target.value)}
                type="text"
                placeholder="Enter your bio"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            disabled={ppic === "" || handel === "" || username === "" || bio === ""}
            className="bg-gray-800 disabled:bg-slate-700 hover:bg-gray-700 fixed bottom-10 py-2 px-7 text-lg mx-auto cursor-pointer text-white rounded-2xl"
            onClick={submitLinks}
          >
            Save Profile
          </button>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Generate;
