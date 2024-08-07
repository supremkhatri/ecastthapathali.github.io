import { useEffect, useState } from "react";
import Card from "./Card";

interface Member {
  name: string;
  position: string;
  imgSrc: string;
}

const Committee = () => {
  const [TeamMemberList, setTeamMemberList] = useState<Member[]>([]);

  useEffect(() => {
      setTeamMemberList([
        {
          name: "Dinanath Padhya",
          position: "President",
          imgSrc: "https://avatars.githubusercontent.com/u/85153156?v=4",
        },
        {
          name: "Suprem Khatri",
          position: "Vice President",
          imgSrc: "https://avatars.githubusercontent.com/u/128308240?v=4",
        },
        {
          name: "Pratik Pokharel",
          position: "General Secretary",
          imgSrc: "https://avatars.githubusercontent.com/u/62210661?v=4",
        },
        {
          name: "Dikshya Khatri",
          position: "Vice Secretary / Treasurer",
          imgSrc: "https://avatars.githubusercontent.com/u/155458211?v=4",
        },
        {
          name: "Kaushik Rayamajhi",
          position: "Research and Development Team",
          imgSrc: "https://avatars.githubusercontent.com/u/135457672?v=4",
        },
        {
          name: "Sandesh Dhital",
          position: "Research and Development Team",
          imgSrc: "https://avatars.githubusercontent.com/u/121079888?v=4",
        },
        {
          name: "Abhishek Panthee",
          position: "Research and Development Team",
          imgSrc: "https://avatars.githubusercontent.com/u/80570587?v=4",
        },
        {
          name: "Dharmendra Singh Chaudhary",
          position: "Research and Development Team",
          imgSrc: "https://shotcan.com/images/2024/07/02/Rnd199845903d587784b.jpg",
        },
        {
          name: "Sanjay Shrestha",
          position: "Graphics Designer",
          imgSrc: "https://shotcan.com/images/2024/07/02/grds5f990ad29e374355.jpg",
        },
        {
          name: "Ninamhang Kulung",
          position: "Technical Team",
          imgSrc: "https://avatars.githubusercontent.com/u/118673128?v=4",
        },
        {
          name: "Jesis Upadhayaya",
          position: "Technical Team",
          imgSrc: "https://avatars.githubusercontent.com/u/102139711?v=4",
        },
        {
          name: "Ujjwal Dahal",
          position: "Technical Team",
          imgSrc: "https://avatars.githubusercontent.com/u/122596469?v=4",
        },
        {
          name: "Prastut Nepal",
          position: "Technical Team",
          imgSrc: "https://avatars.githubusercontent.com/u/76209855?v=4",
        },
        {
          name: "Atul Tiwari",
          position: "Technical Team",
          imgSrc: "https://avatars.githubusercontent.com/u/168094301?v=4",
        },
        {
          name: "Plan Ghimire",
          position: "Technical Team",
          imgSrc: "https://avatars.githubusercontent.com/u/164618194?v=4",
        },
        {
          name: "Om Prakash Sharma",
          position: "Consultant",
          imgSrc: "https://avatars.githubusercontent.com/u/66164291?v=4",
        },
        {
          name: "Prashant Raj Bista",
          position: "Consultant",
          imgSrc: "https://avatars.githubusercontent.com/u/85779064?v=4",
        },
        {
          name: "Shristi Mallik",
          position: "Communication, Events and HR",
          imgSrc: "https://shotcan.com/images/2024/07/02/commhr5468ad6fdbd96eff.th.jpg",
        },
        {
          name: "Prenisha Upreti",
          position: "Communications, Events and HR",
          imgSrc: "https://shotcan.com/images/2024/07/02/commhr12702a9c0781ff015.jpg",
        },
        {
          name: "Shaswat Sharma",
          position: "Editor in Chief",
          imgSrc: "https://shotcan.com/images/2024/07/02/edt1ed2af06f43f4db47.jpg",
        },
        {
          name: "Bipul Ratna Shakya",
          position: "Social Media Handler",
          imgSrc: "https://shotcan.com/images/2024/07/02/scmd7f68efb3434d07e7.jpg",
        },
        
      ]);
    }, []);

  return (
    <section className="bg-black from-theme-lqa flex w-full text-center flex-col p-4">
      <h1 className="text-theme text-5xl my-8">Our Committee</h1>
      {/* Team Member Cards Collections */}
      <div className="py-8 grid place-items-center gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {/* replace it with the appropaite object containing team info... */}
        {TeamMemberList.map((memInfo) => (
          <Card
            imgSrc={
              memInfo.imgSrc == ""
                ? "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                : memInfo.imgSrc
            }
            name={memInfo.name}
            pos={memInfo.position}
          />
        ))}
      </div>
    </section>
  );
};

export default Committee;
