// import React from "react";
// import { Header } from "../components/header";
// import { Footer } from "../components/footer";
// import { Card } from "../components/card";
// import { Button } from "@/components/button";
// import { CardForm } from "@/components/cardForm";

// export default function Home() {
//   return (
//     <main>
//       <CardForm />
//     </main>
//   );
// }

// // export default function page() {
// //   const students = [
// //     { name: "Fakhri", age: 20, gender: "male" },
// //     { name: "Naura", age: 22, gender: "female" },
// //     { name: "Bagas", age: 23, gender: "male" },
// //     { name: "Naya", age: 24, gender: "female" },
// //     { name: "Dyo", age: 18, gender: "male" },
// //   ];
// //   return (
// //     <div>
// //       <Header />
// //       <main className="grid grid-cols-3 gap-4">
// //         {students.map((student) => {
// //           return <Card key={student.name} {...student} />;
// //         })}
// //       </main>
// //       <Button>
// //         <div>+</div>
// //         <div>Button Primary</div>
// //       </Button>
// //       <Button variant="secondary">
// //         <div>+</div>
// //         <div>Button Secondary</div>
// //       </Button>
// //       <Footer />
// //     </div>
// //   );
// // }

// //testing react context
// "use client";
// import { Header } from "@/components/header";
// import { createContext } from "react";

// export const UserContext = createContext();

// export default function Home(){
//   const username = "Fakhri";

//   return(
//     <UserContext.Provider value={{ username }}>
//       <Header/>
//     </UserContext.Provider>
//   )
// }

//testing web CRUD
import { NoteForm } from "@/components/noteForm";

export default async function Home() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/e9iupnMR3fk2", { cache: "no-store" });
  const { data } = await res.json();
  console.log(data);

  return (
    <main className="max-w-2xl m-auto py-12 space-y-4">
      <h1 className="text-lg font-bold text-indigo-500 ">Gundam Database</h1>
      <div className="space-y-4">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h3 className="text-sm text-slate-400">Series From: {item.series}</h3>
              <p className="text-md font-bold">{item.gundam_name}</p>
            </div>
          );
        })}
      </div>
      <NoteForm />
    </main>
  );
}
