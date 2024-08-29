"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Homepage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('admin')
  }, [])
  return (
    <div className=''>Homepage</div>
  )
}

export default Homepage