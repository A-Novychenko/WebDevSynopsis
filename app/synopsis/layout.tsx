import {SynopsisLinks} from "@/components/Navigation/SynopsisLinks/SynopsisLinks";
import type {Metadata} from "next";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div style={{maxWidth: "1200px", marginRight: "auto", marginLeft: "auto"}}>
      <SynopsisLinks />
      {children}
    </div>
  );
}
