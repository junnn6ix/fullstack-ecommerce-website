/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const router = useRouter();

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div className="flex h-min-screen mt-7">
      <div className="w-full max-w-3xl mx-auto flex flex-col lg:flex-row p-3">
        <div>
          <div
            className="mb-8 lg:mb-12 cursor-pointer"
            onClick={() => router.push("/")}>
            <ChevronLeft className="text-gray-500 h-6 w-6 sm:h-8 sm:w-8 border-2 rounded-full p-1 duration-300 transition hover:bg-gray-100" />
          </div>

          {/* Form Header */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-blue-600">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8">
              {isSignUp
                ? "Join to Neck Shop and discover best offer for your favourite items!"
                : "Welcome back to Neck Shop!"}
            </p>
          </div>

          {/* Form Toggle Button */}
          <div className="mt-4 sm:mt-5 flex items-center justify-center">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </p>
            <Button
              variant="link"
              className="text-base sm:text-lg lg:text- text-blue-600 hover:text-blue-800 cursor-pointer"
              onClick={toggleForm}>
              {isSignUp ? "Sign In" : "Sign Up"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
