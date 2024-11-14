import { auth } from "../firebase-config";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, where, query, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

function UserDetails({ user }) {
  const [data, setdata] = useState([]);
  let d = [];
  const ordersCollection = collection(db, "orders");
  let qsnap;

  useEffect(() => {
    (async () => {
      let q = query(ordersCollection, where("userid", "==", user.uid));

      qsnap = await getDocs(q);

      qsnap.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        d.push(doc.data());
        console.log("hiiiiiiii");
        console.log(d);
      });

      setdata(d);
      // console.log(data);
    })();
  }, []);

  const signout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-7 mx-9">
        <div className="my-7 text-2xl font-semibold">
          {" "}
          Hi {auth.currentUser?.email}
        </div>

        <div
          className="mb-2 text-xl text-white font-bold text-center p-2  rounded-[25px]
              bg-black drop-shadow-xl px-7 py-2 inline-block"
        >
          My Orders
        </div>
        <div></div>

        <div>
          <div className="grid grid-cols-2 gap-2 mx-80">
            {data.map((d) => (
              <div
                className="m-5 border-[1px] border-gray-200 rounded-xl drop-shadow-sm p-1"
                key={d.pname}
              >
                <img
                  className="product-type border-2 border-gray-200 rounded-xl drop-shadow-sm bg-gray-50 "
                  src={d.pimg}
                />
                <div className="text-center font-semibold">{d.name}</div>
                <div className="text-center">
                  <span>Price : {" ₹"} </span>
                  {d.pprice}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div></div>
        <Link
          to="/"
          onClick={signout}
          className="bg-gray-800 text-white bg-gray-700 px-3 py-2 rounded-md text-sm font-medium "
        >
          {" "}
          Sign Out
        </Link>
      </div>
    </>
  );
}

export default UserDetails;
