// import { Button } from '@/components/ui/button'
// import { Explora } from 'next/font/google'
// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import InterviewCard from '@/components/InterviewCard'
// import { dummyInterviews } from '@/constants'
// const Page=()=> {
//   return(
//   <>
//   <section className='card-cta'>
//     <div className='flex flex-col gap-6 max-w-lg'>
//     <h2>Get Interview-Ready with AI-powered Practice and Feedback</h2>
//     <p className='text-lg'>
//       Practice on real interview questions and get feedback to improve skills
//     </p>
//     <Button asChild className='btn-primary max-sm:w-full'>
//    <Link href="/interview">
//    Start an Interview
//    </Link>
//     </Button>
//     </div>
//     <Image src='/robot.png' alt="robot" width={400} height={400} className='max-sm:hidden'></Image>

//   </section>
//   <section className='flex flex-col gap-6 mt-8'>
//     <h2>Your Interviews</h2>
//     <div className='interview-section'>
//       {dummyInterviews.map((interview)=>(
//         <InterviewCard  {...interview}/>
//       ))}
//       {/* <p>You haven&apos;t yaken any interview yet</p> */}
//     </div>

//   </section>
//   <section className='flex flex-col gap-6 mt-8'>
//     <h2>Take an Interview</h2>
//     <div className='interviews-section'>
//       {dummyInterviews.map((interview)=>(
//         <InterviewCard  {...interview}/>
//       ))}
//     </div>
//   </section>
//   </>
//   )
// }
// export default Page
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { dummyInterviews } from "@/constants";

function Page() {
  const hasPastInterviews = dummyInterviews?.length > 0;
  const hasUpcomingInterviews = dummyInterviews?.length > 0;

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-powered Practice and Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions and get feedback to improve
            skills
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      {/* Past Interviews */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>

        <div className="interviews-section">
          {hasPastInterviews ? (
            dummyInterviews.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      {/* Upcoming Interviews */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            dummyInterviews.map((interview) => (
              <InterviewCard key={interview.id} {...interview} />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Page;
