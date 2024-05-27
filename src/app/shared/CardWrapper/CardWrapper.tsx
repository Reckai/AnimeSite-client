import React from "react";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import CardHeader from "@/app/shared/CardHeader/CardHeader";
import CardFooter from "../CardFooter/CardFooter";
import { Button } from "@/app/Components/Button/Button";

interface CardWrapperProps {
  children: React.ReactNode;
  backButtonText: string;
  backButtonLink: string;
  headerText: string;
}
function CardWrapper({
  children,
  backButtonText,
  backButtonLink,
  headerText,
}: CardWrapperProps) {
  return (
    <div className="dark:bg-color-el-bg border-2 dark:border-none p-4 rounded-md shadow-md w-[400px] gap-4  flex flex-col  dark:text-white">
      <CardHeader>{headerText}</CardHeader>
      {children}
      <CardFooter>
        <Button type="button" variant="link" size={"link"}>
          <Link href={backButtonLink}>{backButtonText}</Link>
        </Button>
      </CardFooter>
    </div>
  );
}

export default CardWrapper;
