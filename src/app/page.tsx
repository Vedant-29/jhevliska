"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordCheck = (expectedPassword: string, nextStateSetter: () => void) => {
    if (password === expectedPassword) {
      nextStateSetter();
      setPassword("");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {state1 ? (
        <div>
          <Button
            className="bg-pink-500 hover:bg-pink-600 transform hover:-translate-y-1 transition duration-300 mt-2 "
            onClick={() => {
              setState1(false);
              setState2(true);
            }}
          >
            Who is this ?
          </Button>
        </div>
      ) : null}
      {state2 ? (
        <div className="w-80">
          <Label htmlFor="email">Tuzha Nao Tak</Label>
          <Input type="text" placeholder="This better be sohu " className="mt-2 w-full" value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <Button
            className="bg-pink-500 hover:bg-pink-600 transform hover:-translate-y-1 transition duration-300 w-full mt-2"
            onClick={() => handlePasswordCheck("password", () => {
              setState2(false);
              setState3(true);
            })}
          >
            Submit
          </Button>
        </div>
      ) : null}
      {state3 ? (
        <div className="w-80">
          <Label htmlFor="phone">Tuzha bf cha Nao kay Ashto</Label>
          <Input type="phone" placeholder="If you don't know then toh.." className="mt-2 w-full" value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <Button
            className="bg-pink-500 hover:bg-pink-600 transform hover:-translate-y-1 transition duration-300 w-full mt-2"
            onClick={() => handlePasswordCheck("password", () => {
              setState3(false);
              router.push("/selection");
            })}
          >
            Submit
          </Button>
        </div>
      ) : null}
    </div>
  );
}