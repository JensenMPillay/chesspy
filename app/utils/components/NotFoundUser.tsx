import Button from "@/app/utils/components/Button";
import Container from "@/app/layout/Container";
import Title from "@/app/utils/components/Title";
import Link from "next/link";

export default function NotFoundUser({
  username,
}: {
  username: string;
}): React.JSX.Element {
  return (
    <Container>
      <Title>User Not Found</Title>
      <p className="w-full text-sm md:text-base lg:text-lg">
        Could not find any requested resource for "{username}".
      </p>
      <Link href="/" className="w-full">
        <Button className="w-full" name="return home" />
      </Link>
    </Container>
  );
}
