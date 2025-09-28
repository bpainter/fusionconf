import { About } from "@/components/sections/about";
import { Sessions } from "@/components/sections/sessions";
import { Speakers } from "@/components/sections/speakers";
import { Sponsors } from "@/components/sections/sponsors";
import { Tickets } from "@/components/sections/tickets";
import { Venue } from "@/components/sections/venue";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <About />
      <Speakers />
      <Sessions />
      <Venue />
      <Sponsors />
      <Tickets />
    </>
  );
}
