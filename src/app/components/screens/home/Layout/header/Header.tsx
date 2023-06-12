import { useRouter } from "next/router";
import { FC } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header: FC = () => {
  const pathname = useRouter();
  console.log(pathname);
  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default Header;
