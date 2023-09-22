"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProfileIcon, SearchIcon } from "../utils/components/Icons";
import Button from "../utils/components/Button";
import Input from "../utils/components/Input";
import Container from "../layout/Container";
import { useRouter } from "next/navigation";

function HomeCard(): React.JSX.Element {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const isValidUsername = (username: string) => {
    const regex =
      /^(?=[a-zA-Z0-9_\-]{3,}$)[a-zA-Z0-9][a-zA-Z0-9_\-]*[a-zA-Z0-9]$/;

    if (!regex.test(username)) {
      setError(
        "Username must be at least 3 characters long, and only contain letters, numbers, underscores, and dashes. It must start and end with alphanumeric characters. Spaces are not allowed.",
      );
    } else {
      setError("");
      router.push(`user/${username}`);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isValidUsername(username);
  };
  return (
    <Container className="flex w-full md:w-3/4">
      <motion.form
        className="flex w-full flex-col items-center justify-center"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            type: "spring",
            duration: 1,
          },
        }}
      >
        <Input
          name="username"
          className="w-3/4 md:w-2/3"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        >
          <ProfileIcon
            className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6"
            color="text-neutral-500"
          />
        </Input>
        {error && (
          <motion.p
            className="w-3/4 text-center text-xs text-red-600 md:text-sm lg:text-base"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                duration: 1,
              },
            }}
          >
            {error}
          </motion.p>
        )}
        <Button name="search" type="submit" className="w-3/4 md:w-2/3">
          <SearchIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
        </Button>
      </motion.form>
    </Container>
  );
}

export default HomeCard;
