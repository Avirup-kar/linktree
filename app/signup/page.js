"use client";
import { Suspense } from "react";

import Signupcompo from "@/components/signupcompo";


export default function Signup() {
  return (
    <Suspense fallback={<div>Loading signup form...</div>}>
      <Signupcompo />
    </Suspense>
  );
}


